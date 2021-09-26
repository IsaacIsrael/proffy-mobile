import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { View, ScrollView } from "react-native";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import style from "./styles";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(() => {
    loadFavorited();
  });

  function loadFavorited() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        setFavorites(JSON.parse(response));
      }
    });
  }

  return (
    <View style={style.container}>
      <PageHeader title="Meus proffys favoritos" />
      <ScrollView
        style={style.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </ScrollView>
    </View>
  );
}
