import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ImageBackground, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import style from "./styles";
import giveClassesImage from "../../assets/images/give-classes-background.png";

export default function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={style.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesImage}
        style={style.content}
      >
        <Text style={style.title}>Quer ser um Proffy</Text>
        <Text style={style.description}>
          Para começar, você precisa se cadstrar na nossa platorma web.
        </Text>
      </ImageBackground>
      <RectButton style={style.okButton} onPress={handleNavigateBack}>
        <Text style={style.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}
