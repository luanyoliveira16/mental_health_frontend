import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      id: 1,
      name: "Dr. Lucas Silva",
      specialty: "Psicólogo",
      details:
        "Especialidade - Psicólogo\nFormação - PUC\n10 anos de experiência",
      rating: 5,
    },
    {
      id: 2,
      name: "Dra. Carolina Gomes",
      specialty: "Psicanalista",
      details: "Agenda",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Agendar consulta</Text>
      </View>

      {/* Seção de Agendamentos */}
      <Text style={styles.sectionTitle}>Agendamentos</Text>

      <ScrollView style={styles.agendaContainer}>
        {doctors.map((doctor) => (
          <TouchableOpacity
            key={doctor.id}
            style={[
              styles.card,
              selectedDoctor?.id === doctor.id && styles.cardSelected,
            ]}
            onPress={() => setSelectedDoctor(doctor)}
          >
            <FontAwesome name="user-circle" size={40} color="white" />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.cardTitle}>{doctor.name}</Text>
              <Text style={styles.cardSubtitle}>{doctor.specialty}</Text>
              {selectedDoctor?.id === doctor.id && (
                <>
                  <Text style={styles.cardDetails}>{doctor.details}</Text>
                  {doctor.rating && (
                    <View style={styles.ratingContainer}>
                      <FontAwesome name="star" size={16} color="white" />
                      <Text style={styles.ratingText}>{doctor.rating}</Text>
                    </View>
                  )}
                </>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Botão Avançar (Desativado se não houver seleção) */}
      <TouchableOpacity
        style={[styles.button, !selectedDoctor && styles.buttonDisabled]}
        disabled={!selectedDoctor}
      >
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>

      {/* Mensagem */}
      <Text style={styles.warningText}>
        Não é permitido agendamentos repetidos para a mesma especialidade
      </Text>

      {/* Rodapé */}
      <View style={styles.footer}>
        <FontAwesome name="home" size={24} color="gray" />
        <MaterialIcons name="event-note" size={24} color="blue" />
        <FontAwesome name="search" size={24} color="gray" />
      </View>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#8AA2E2",
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "gray",
    fontSize: 16,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    width: "90%",
    textAlign: "center",
  },
  agendaContainer: {
    width: "90%",
  },
  card: {
    backgroundColor: "#D0D9FF",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardSelected: {
    backgroundColor: "#5FA8FF",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  cardDetails: {
    fontSize: 12,
    color: "white",
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingText: {
    color: "white",
    marginLeft: 5,
  },
  button: {
    backgroundColor: "#007AFF",
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 15,
  },
  buttonDisabled: {
    backgroundColor: "#B0C4DE",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  warningText: {
    color: "gray",
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
});
