import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const consultas = [
  {
    id: "1",
    nome: "Dr. Lucas Silva",
    especialidade: "Psicólogo",
    data: "26/02/2025",
    horario: "11:00",
  },
  {
    id: "2",
    nome: "Dr. Marcos",
    especialidade: "Psiquiatra",
    data: "05/03/2025",
    horario: "11:00",
  },
];

export default function HistoricoConsultas() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Histórico de Consultas</Text>
      </View>

      {/* Botão "Completos" */}
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>Completos</Text>
      </TouchableOpacity>

      {/* Lista de Consultas */}
      <FlatList
        data={consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <FontAwesome
              name="user-circle"
              size={50}
              color="black"
              style={styles.icon}
            />
            <View style={styles.cardInfo}>
              <Text style={styles.doctorName}>{item.nome}</Text>
              <Text style={styles.specialty}>{item.especialidade}</Text>
              <Text style={styles.date}>Data: {item.data}</Text>
              <Text style={styles.time}>Horário: {item.horario}</Text>
              <TouchableOpacity style={styles.remarcarButton}>
                <Text style={styles.remarcarText}>Remarcar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
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
    backgroundColor: "#0052CC",
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  filterButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
  filterText: {
    color: "white",
    fontSize: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#D0DAFF",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "90%",
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
  cardInfo: {
    flex: 1,
  },
  doctorName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  specialty: {
    color: "#666",
  },
  date: {
    marginTop: 5,
  },
  time: {
    marginBottom: 10,
  },
  remarcarButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignSelf: "flex-start",
  },
  remarcarText: {
    color: "white",
    fontSize: 14,
  },
});
