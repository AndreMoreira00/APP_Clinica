import { setItemAsync } from "expo-secure-store";

export default async function Salvar(nome, horario, categoria){
  await setItemAsync("consulta", JSON.stringify({
    nome,
    horario,
    categoria
  }))
}