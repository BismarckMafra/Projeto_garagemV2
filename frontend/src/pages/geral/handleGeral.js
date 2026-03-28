import axios from "axios";

const BASE_URL = "http://localhost:3000/carros";

export async function listarCarros() {
  try {
    const response = await axios.get(`${BASE_URL}/listar_carro`);
    return response.data; // O backend retorna a lista aqui
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return []; // Retorna vazio em caso de erro para não quebrar o map
  }
}