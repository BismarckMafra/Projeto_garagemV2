import axios from "axios";

const BASE_URL = "http://localhost:3000/carros";

// Busca o carro antes para confirmar se ele existe (reutilizando a lógica)
export async function buscaCarroDeletar(id) {
  const response = await axios.get(`${BASE_URL}/listar_carro/${id}`);
  return response.data;
}

// Função que deleta efetivamente
export async function deletarCarro(id) {
  const response = await axios.delete(`${BASE_URL}/deletar_carros/${id}`);
  return response.data;
}