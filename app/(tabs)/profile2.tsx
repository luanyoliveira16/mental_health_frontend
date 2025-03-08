import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome, MaterialIcons, Feather } from "@expo/vector-icons";

export default function PerfilUsuario() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.profilePicContainer}>
          <FontAwesome name="user-circle" size={70} color="white" />
          <TouchableOpacity style={styles.cameraIcon}>
            <FontAwesome name="camera" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Campos de Entrada */}
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="person-outline" size={20} color="black" />
          <TextInput style={styles.input} placeholder="Nome" />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="person-outline" size={20} color="black" />
          <TextInput style={styles.input} placeholder="Sobrenome" />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="phone" size={20} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="location-on" size={20} color="black" />
          <TextInput style={styles.input} placeholder="Endereço" />
        </View>
      </View>

      {/* Botões */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
        <Text style={styles.buttonText}>Histórico de Consultas</Text>
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
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicContainer: {
    position: "relative",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#007AFF",
    padding: 5,
    borderRadius: 10,
  },
  form: {
    width: "90%",
    marginTop: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: "#007AFF",
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
