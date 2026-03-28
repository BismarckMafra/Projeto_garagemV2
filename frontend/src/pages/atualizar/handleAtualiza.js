import axios from "axios";

const BASE_URL = "http://localhost:3000/carros";

// Busca os dados atuais do carro para preencher o formulário
export async function buscaCarroAtualizar(id) {
  const response = await axios.get(`${BASE_URL}/listar_carro/${id}`);
  return response.data;
}

// Envia as alterações para o backend
export async function atualizarCarro(id, { categoria, marca, modelo, ano, cor }) {
  const response = await axios.put(`${BASE_URL}/atualizar_carro/${id}`, {
    categoria,
    marca_car: marca,    // Mapeando para o padrão do seu banco
    modelo_car: modelo,
    ano_modelo: ano,
    cor
  });
  return response.data;
}