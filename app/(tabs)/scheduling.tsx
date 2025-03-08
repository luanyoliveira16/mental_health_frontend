import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons, Feather } from "@expo/vector-icons";

export default function ConfirmacaoAgendamento() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ana Paula Rocha</Text>
        <FontAwesome
          name="pencil"
          size={14}
          color="white"
          style={styles.editIcon}
        />
        <View style={styles.profilePic} />
      </View>

      {/* Mensagem de Sucesso */}
      <View style={styles.successMessage}>
        <Text style={styles.successText}>
          Agendamento efetuado com sucesso.
        </Text>
      </View>

      {/* Informações do Agendamento */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>
          Data: 24/02/2025{" "}
          <MaterialIcons name="calendar-today" size={14} color="gray" />
        </Text>
        <Text style={styles.detailText}>Hora: 10:15</Text>
        <Text style={styles.detailText}>Dr. Lucas Silva</Text>
      </View>

      {/* Botão de Avançar */}
      <TouchableOpacity style={styles.nextButton}>
        <Feather name="arrow-right" size={24} color="blue" />
      </TouchableOpacity>

      {/* Rodapé */}
      <View style={styles.footer}>
        <FontAwesome name="home" size={24} color="gray" />
        <FontAwesome name="search" size={24} color="gray" />
        <MaterialIcons name="event-note" size={24} color="blue" />
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
    backgroundColor: "#0052CC",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  editIcon: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    position: "absolute",
    bottom: -25,
  },
  successMessage: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 20,
    marginTop: 50,
  },
  successText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  detailsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  detailText: {
    color: "gray",
    fontSize: 16,
    marginVertical: 5,
  },
  nextButton: {
    marginTop: 40,
    backgroundColor: "transparent",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "gray",
    position: "absolute",
    bottom: 0,
  },
});
