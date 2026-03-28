import { useState, useEffect } from "react";
import { listarCarros } from "./handleGeral";
import "./style.css";

function SectionListar() {
  const [carros, setCarros] = useState([]);

  // Função para carregar os dados
  const carregarDados = async () => {
    const dados = await listarCarros();
    setCarros(dados);
  };

  // Carrega ao iniciar a página
  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <section className="page-container">
      <h1 className="page-title">Minha Coleção</h1>
      
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <button className="button-primary" onClick={carregarDados}>
          Listar todos os itens
        </button>
      </div>

      <div className="card-grid">
        {carros.length > 0 ? (
          carros.map((carro) => (
            <div key={carro.id} className="car-card">
              <div className="card-header">
                <span className="car-id">ID: {carro.id}</span>
                <h3 className="car-title">{carro.modelo_car}</h3>
              </div>
              <hr />
              <div className="card-body">
                <p><strong>Marca:</strong> {carro.marca_car}</p>
                <p><strong>Categoria:</strong> {carro.categoria}</p>
                <p><strong>Ano:</strong> {carro.ano_modelo}</p>
                <p><strong>Cor:</strong> {carro.cor}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            Nenhum carrinho encontrado.
          </p>
        )}
      </div>
    </section>
  );
}

export default SectionListar;