import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscaCarroAtualizar, atualizarCarro } from "./handleAtualiza";
import "./style.css";

function SectionAtualiza() {
  const [idBusca, setIdBusca] = useState("");
  const [carro, setCarro] = useState(null);
  const navigate = useNavigate();

  // Estados para os campos (preenchidos após a busca)
  const [categoria, setCategoria] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");

  const handleBuscar = async () => {
    try {
      const encontrado = await buscaCarroAtualizar(idBusca);
      setCarro(encontrado);
      // Preenche os inputs com os dados vindos do banco
      setCategoria(encontrado.categoria || "");
      setMarca(encontrado.marca_car || "");
      setModelo(encontrado.modelo_car || "");
      setAno(encontrado.ano_modelo || "");
      setCor(encontrado.cor || "");
    } catch (error) {
      alert("Carro não encontrado!");
      setCarro(null);
    }
  };

  const handleSalvarAlteracoes = async (event) => {
    event.preventDefault();
    try {
      await atualizarCarro(carro.id, { categoria, marca, modelo, ano, cor });
      alert("Dados atualizados com sucesso!");
      navigate("/"); // Volta para a principal
    } catch (error) {
      alert("Erro ao atualizar os dados.");
    }
  };

  return (
    <section className="page-container">
      <h1 className="page-title">Atualizar Hot Wheel</h1>
      
      {/* Área de Busca */}
      <div className="form search-row">
        <div className="input-group">
          <label htmlFor="idBusca">Digite o ID do item</label>
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

      {/* Formulário de Edição (Só aparece se encontrar o carro) */}
      {carro && (
        <form onSubmit={handleSalvarAlteracoes} className="form">
          <p className="info-text">Editando item ID: <strong>{carro.id}</strong></p>
          
          <div className="input-group">
            <label>Categoria</label>
            <input 
              type="text" 
              value={categoria} 
              onChange={(e) => setCategoria(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Marca</label>
            <input 
              type="text" 
              value={marca} 
              onChange={(e) => setMarca(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Modelo</label>
            <input 
              type="text" 
              value={modelo} 
              onChange={(e) => setModelo(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Ano</label>
            <input 
              type="number" 
              value={ano} 
              onChange={(e) => setAno(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Cor</label>
            <input 
              type="text" 
              value={cor} 
              onChange={(e) => setCor(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="button-primary">
            Salvar Alterações
          </button>
        </form>
      )}
    </section>
  );
}

export default SectionAtualiza;