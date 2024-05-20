import { getItemAsync } from "expo-secure-store";

export default async function Carregar(){
  return await getItemAsync("consulta")

}