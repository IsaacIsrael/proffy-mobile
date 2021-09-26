import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { View, ScrollView, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import RNPickerSelect from "react-native-picker-select";

import api from "../../services/api";

import style, { pickerSelectStyles } from "./styles";
import {
  TextInput,
  BorderlessButton,
  RectButton,
} from "react-native-gesture-handler";

export default function TeacherList() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  useFocusEffect(() => {
    loadFavorited();
  });

  function loadFavorited() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => teacher.user_id
        );
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function handleToogleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorited();

    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
    setIsFilterVisible(false);
  }

  return (
    <View style={style.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToogleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFilterVisible && (
          <View style={style.searchForm}>
            <Text style={style.label}>Matéria</Text>
            <TextInput
              style={style.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Qual a matéria ?"
              placeholderTextColor="#c1bcc"
            />
            <RNPickerSelect
              placeholder={{
                label: "Qual a matéria ?",
                value: null,
                color: "red",
              }}
              style={pickerSelectStyles}
              onValueChange={(value) => console.log(value)}
              Icon={() => (
                <Feather name="chevron-down" size={20} color="#c1bcc" />
              )}
              items={[
                { label: "Football", value: "football" },
                { label: "Baseball", value: "baseball" },
                { label: "Hockey", value: "hockey" },
              ]}
            />
            <View style={style.inputGroup}>
              <View style={style.inputBlock}>
                <Text style={style.label}>Dia da Semana</Text>
                <TextInput
                  style={style.input}
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bcc"
                />
              </View>
              <View style={style.inputBlock}>
                <Text style={style.label}>Horário</Text>
                <TextInput
                  style={style.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Qual o horário?"
                  placeholderTextColor="#c1bcc"
                />
              </View>
            </View>
            <RectButton
              style={style.submitButton}
              onPress={handleFiltersSubmit}
            >
              <Text style={style.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={style.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.user_id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
