import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../styles/Navegacao";

export default function Navegacao(props){
  return <View style={styles.navegacao}>
    <View style={styles.navegacaoTopo}>
      <Text style={styles.navegacaoTopoTexto}>Atendimento</Text>
    </View>
    <View style={styles.navegacaoBase}>
      <Pressable onPress={() => props.navigation.navigate("Clinica")} style={styles.navegacaoBaseBotao}>
        <Text style={styles.navegacaoBaseTexto}>Clinica</Text>
      </Pressable>

      <Pressable onPress={() => props.navigation.navigate("Paciente")}style={styles.navegacaoBaseBotao}>
        <Text style={styles.navegacaoBaseTexto}>Paciente</Text>
      </Pressable>
    </View>
  </View>
}