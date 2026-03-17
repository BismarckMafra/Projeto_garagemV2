import axios from "axios";

const BASE_URL = "http://localhost:3000/listarCarros";

export async function atualizarCarro(id) {
  const response = await axios.get(`${BASE_URL}/listar_carros/${id}`);
  return response.data;
}

export async function atualizarCarro(id, { categoria, marca_car, modelo_car, ano_modelo, cor }) {
  const response = await axios.put(
    `${BASE_URL}/atualizar_carros/${id}`,
    { categoria, marca_car, modelo_car, ano_modelo, cor }
  );
  return response.data;
}
