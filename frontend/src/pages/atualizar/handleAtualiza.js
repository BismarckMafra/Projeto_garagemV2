import axios from "axios";

const BASE_URL = "http://localhost:3000/carros";

export async function buscaCarros(id) {
  const response = await axios.get(`${BASE_URL}/listar_carro/${id}`);
  return response.data;
}

export async function atualizarCarros(id, { categoria, marca_car, modelo_car, ano_modelo, cor }) {
  const response = await axios.put(
    `${BASE_URL}/atualizar_carro/${id}`,
    { categoria, marca_car, modelo_car, ano_modelo, cor }
  );
  return response.data;
}
