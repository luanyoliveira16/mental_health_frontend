import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { DateData } from "react-native-calendars";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const availableTimes = ["09:00", "10:15", "11:00"];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lucas Silva</Text>
        <Text style={styles.headerSubtitle}>Psicólogo</Text>
      </View>

      {/* Calendário */}
      <Text style={styles.sectionTitle}>Fevereiro</Text>
      <Calendar
        onDayPress={(day: DateData) => setSelectedDate(day.dateString)}
        markedDates={
          selectedDate
            ? { [selectedDate]: { selected: true, selectedColor: "#007AFF" } }
            : {}
        }
        theme={{
          todayTextColor: "#007AFF",
          arrowColor: "black",
        }}
        style={styles.calendar}
      />

      {/* Horários disponíveis */}
      <Text style={styles.sectionTitle}>Horários</Text>
      <View style={styles.timesContainer}>
        {availableTimes.map((time) => (
          <TouchableOpacity
            key={time}
            style={[
              styles.timeButton,
              selectedTime === time && styles.timeButtonSelected,
            ]}
            onPress={() => setSelectedTime(time)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === time && styles.timeTextSelected,
              ]}
            >
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <FontAwesome name="home" size={24} color="gray" />
        <MaterialIcons name="event-note" size={24} color="black" />
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
    backgroundColor: "#0052CC",
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
  headerSubtitle: {
    color: "white",
    fontSize: 14,
  },
  sectionTitle: {
    color: "gray",
    fontSize: 16,
    marginVertical: 10,
  },
  calendar: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
    width: "90%",
  },
  timesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  timeButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#007AFF",
    marginHorizontal: 5,
  },
  timeButtonSelected: {
    backgroundColor: "#007AFF",
  },
  timeText: {
    color: "#007AFF",
  },
  timeTextSelected: {
    color: "white",
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
