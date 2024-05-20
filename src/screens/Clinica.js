import React, {useEffect, useState} from "react";
import { StatusBar, Text } from "react-native";
import Tela from "../components/Tela";
import Navegacao from "../components/Navegacao";
import Carregar from "../functions/Carregar";
import Janela from "../components/Janela";

export default function Clinica({navigation}){
  const [resultados, definirResultado] = useState({})

  useEffect(function(){
    Carregar().then(function(dados){
      const valido = JSON.parse(dados || "{}")
      definirResultado(valido)
    })
    .catch(function(erro){
      alert(erro)
    })
  },[])

  return <Tela>
    <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"}/>
    <Navegacao navigation={navigation}/>

    {
      Object.keys(resultados).length > 0 && <Janela>
        <Text style={{fontFamily: "Roboto", fontSize:18, marginBottom:8}}>{resultados.nome}</Text>
        <Text style={{fontFamily:"Roboto"}}>{resultados.horario}</Text>
        <Text style={{fontFamily: "Roboto"}}>{resultados.categoria}</Text>
      </Janela>
    }
  </Tela>
}