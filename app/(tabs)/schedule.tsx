import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [userName, setUserName] = useState("Carregando...");
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const storedUserName = await AsyncStorage.getItem("userName");
        if (storedUserName) {
          setUserName(storedUserName);
        }
      } catch (error) {
        Alert.alert("Erro", "Não foi possível carregar o nome do usuário");
      }
    };
    fetchUserName();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://54.207.207.242:3000/user/agendamentos"
      ); // Substitua pela URL correta
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Erro ao buscar agendamentos:", error);
      Alert.alert("Erro", "Não foi possível carregar os agendamentos");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="user-circle" size={50} color="white" />
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Text style={styles.sectionTitle}>Agendamentos</Text>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <Card
              key={index}
              name={appointment.name}
              specialty={appointment.specialty}
            />
          ))
        ) : (
          <Text style={styles.loadingText}>Carregando agendamentos...</Text>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>

      <Text style={styles.warningText}>
        Não é permitido agendamentos múltiplos para a mesma especialidade
      </Text>
    </View>
  );
}

const Card = ({ name, specialty }) => {
  return (
    <View style={styles.card}>
      <FontAwesome name="user-circle" size={40} color="gray" />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.cardSubtitle}>{specialty} 🧠</Text>
        <Text style={styles.cardSubtitle}>
          Agenda <MaterialIcons name="event" size={16} color="black" />
        </Text>
      </View>
      <FontAwesome name="info-circle" size={20} color="gray" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  userName: { fontSize: 18, marginLeft: 10, fontWeight: "bold" },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  agendaContainer: { flex: 1 },
  loadingText: { textAlign: "center", marginTop: 20, fontSize: 16 },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  warningText: { textAlign: "center", color: "red", marginTop: 10 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: { fontSize: 16, fontWeight: "bold" },
  cardSubtitle: { fontSize: 14, color: "gray" },
});
