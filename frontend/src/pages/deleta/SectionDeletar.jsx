import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscaCarroDeletar, deletarCarro } from "./handleDeletar";
import "./style.css";

function SectionDeletar() {
  const [idBusca, setIdBusca] = useState("");
  const [carro, setCarro] = useState(null);
  const navigate = useNavigate();

  const handleBuscar = async () => {
    try {
      const encontrado = await buscaCarroDeletar(idBusca);
      setCarro(encontrado);
    } catch (error) {
      alert("Carro não encontrado!");
      setCarro(null);
    }
  };

  const handleConfirmarDelecao = async () => {
    if (!carro) return;
    
    const confirmar = window.confirm(`Tem certeza que deseja excluir o modelo: ${carro.modelo_car}?`);
    
    if (confirmar) {
      try {
        await deletarCarro(carro.id);
        alert("Carro removido da coleção com sucesso!");
        navigate("/"); // Volta para a principal após deletar
      } catch (error) {
        alert("Erro ao deletar o carro.");
      }
    }
  };

  return (
    <section className="page-container">
      <h1 className="page-title">Remover da Coleção</h1>
      
      <div className="form search-row">
        <div className="input-group">
          <label htmlFor="idBusca">ID do carro para excluir</label>
          <input
            id="idBusca"
            type="number"
            value={idBusca}
            onChange={(e) => setIdBusca(e.target.value)}
          />
        </div>
        <button type="button" className="button-primary" onClick={handleBuscar}>
          Buscar
        </button>
      </div>

      {carro && (
        <div className="form" style={{ border: "2px solid #ff0000", marginTop: "20px" }}>
          <p className="info-text">
            <strong>Atenção!</strong> Você está prestes a excluir:
          </p>
          <p><strong>ID:</strong> {carro.id}</p>
          <p><strong>Modelo:</strong> {carro.modelo_car}</p>
          <p><strong>Marca:</strong> {carro.marca_car}</p>
          
          <button 
            onClick={handleConfirmarDelecao} 
            className="button-primary" 
            style={{ backgroundColor: "#d9534f", marginTop: "15px" }}
          >
            Confirmar Exclusão Definitiva
          </button>
        </div>
      )}
    </section>
  );
}

export default SectionDeletar;