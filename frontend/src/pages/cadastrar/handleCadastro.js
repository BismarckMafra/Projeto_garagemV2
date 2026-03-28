import axios from "axios";

const BASE_URL = "http://localhost:3000/carros";

// Função para enviar o novo carro ao servidor
export async function cadastrarCarro({ categoria, marca, modelo, ano, cor }) {
  try {
    const response = await axios.post(`${BASE_URL}/cadastrar_carros`, {
      categoria,
      marca_car: marca,    // Traduzindo 'marca' do form para 'marca_car' do backend
      modelo_car: modelo,  // Traduzindo 'modelo' para 'modelo_car'
      ano_modelo: ano,     // Traduzindo 'ano' para 'ano_modelo'
      cor
    });
    return response.data;
  } catch (error) {
    console.error("Erro na requisição de cadastro:", error);
    throw error;
  }
}