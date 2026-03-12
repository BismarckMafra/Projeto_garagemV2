import { useState, useEffect } from "react";
import { listarCarros } from "./Servico_listar";


function SectionCarro() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    const carregarCarros = async () => {
      try {
        const lista_de_carros = await listarCarros();
        setCarros(lista_de_carros);
      
      } catch (error) {
        console.error("Erro ao carregar carros:", error);
      }
    };
    carregarCarros();
  
  },
    []);

  return (
    <div >
      <h2>Listar Carros</h2>
      <p>Esta página permite visualizar os carros cadastrados.</p>
      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Categoria</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Ano</th>
          <th>Cor</th>
          </tr>
        </thead>
        <tbody>
          {carros.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.categoria}</td>
              <td>{c.marca}</td>
              <td>{c.modelo}</td>
              <td>{c.ano}</td>
              <td>{c.cor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  );
}

export default SectionUser;