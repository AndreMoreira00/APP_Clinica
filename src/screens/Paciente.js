import React, {useState} from "react";
import { StatusBar, Text, TextInput, Pressable } from "react-native";
import Tela from "../components/Tela";
import Navegacao from "../components/Navegacao";
import Janela from "../components/Janela";
import Salvar from "../functions/Salvar";

export default function Paciente({navigation}){

  const [formulario, definirFormulario] = useState({
    nome:"",
    horario:"",
    categoria:"",
  })

  function SalvarFormulario(){
    Salvar(formulario.nome, formulario.horario, formulario.categoria)
    definirFormulario({nome:"", horario:"", categoria:""})
    alert("Salvo com sucesso!")
  }

  return <Tela>
    <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"}/>
    <Navegacao navigation={navigation}/>

    <Janela>
      <Text style={{fontSize:20, fontFamily: "Roboto", textAlign:"center"}}>Formulário do Paciente {"\n"}</Text>

      <TextInput style={{backgroundColor: "#eee", fontFamily:"Roboto", padding: 8, marginBottom: 8}}
      value={formulario.nome}
      onChangeText={valor => definirFormulario({...formulario, nome:valor})}
      placeholder="Nome"/>

      <TextInput style={{backgroundColor: "#eee", fontFamily:"Roboto", padding: 8, marginBottom: 8}}
      value={formulario.horario}
      onChangeText={valor => definirFormulario({...formulario, horario:valor})}
      placeholder="Horario"/>

      <TextInput style={{backgroundColor: "#eee", fontFamily:"Roboto", padding: 8, marginBottom: 8}}
      value={formulario.categoria}
      onChangeText={valor => definirFormulario({...formulario, categoria: valor})}
      placeholder="Categoria"/>

      <Pressable onPress={SalvarFormulario}>
        <Text style={{
          backgroundColor:"#6ebbdc",
          color:"#fff",
          fontFamily:"Roboto",
          paddingVertical:16,
          textAlign:"center"}}>Enviar</Text>
      </Pressable>
    </Janela>
  </Tela>
}