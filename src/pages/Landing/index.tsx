import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import api from "../../services/api";

import style from "./styles";

import landingImg from "../../assets/images/landing.png";
import studyIco from "../../assets/images/icons/study.png";
import giveClassesIco from "../../assets/images/icons/give-classes.png";
import heartIco from "../../assets/images/icons/heart.png";

export default function Landing() {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  function handleNavigationToGiveClassPage() {
    navigate("GiveClasses");
  }

  function handleNavigationToStudyPages() {
    navigate("Study");
  }

  return (
    <View style={style.container}>
      <Image source={landingImg} style={style.banner} />
      <Text style={style.title}>
        Seja bem-vindo, {"\n"}
        <Text style={style.titleBold}> O que deseja fazer</Text>
      </Text>

      <View style={style.buttonsContainer}>
        <RectButton
          style={[style.button, style.buttonPrimary]}
          onPress={handleNavigationToStudyPages}
        >
          <Image source={studyIco} />
          <Text style={style.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          style={[style.button, style.buttonSecondary]}
          onPress={handleNavigationToGiveClassPage}
        >
          <Image source={giveClassesIco} />
          <Text style={style.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={style.totalConnections}>
        {`Total de ${totalConnections} conexões já realizadas `}
        <Image source={heartIco} />
      </Text>
    </View>
  );
}
