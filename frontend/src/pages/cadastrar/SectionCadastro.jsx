import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cadastrarCarro } from "./handleCadastro";
import "./style.css";

function SectionCadastro() {
  const navigate = useNavigate();
  
  // Estados para os campos do formulário
  const [categoria, setCategoria] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");

  const handleSalvar = async (event) => {
    event.preventDefault();
    try {
      await cadastrarCarro({ 
        categoria, 
        marca, 
        modelo, 
        ano, 
        cor 
      });
      
      alert("Hot Wheel cadastrado com sucesso!");
      navigate("/"); // Redireciona para a página principal (SectionMain)
    } catch (error) {
      alert("Erro ao salvar o carrinho. Verifique o console.");
    }
  };

  return (
    <section className="page-container">
      <h1 className="page-title">Cadastrar Novo Hot Wheels</h1>
      
      <form onSubmit={handleSalvar} className="form">
        <div className="input-group">
          <label htmlFor="categoria">Categoria (ex: HW Screen Time)</label>
          <input
            id="categoria"
            type="text"
            placeholder="Digite a categoria..."
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="marca">Marca (ex: Ford, Nissan)</label>
          <input
            id="marca"
            type="text"
            placeholder="Digite a marca..."
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="modelo">Modelo (ex: '67 Mustang)</label>
          <input
            id="modelo"
            type="text"
            placeholder="Digite o modelo..."
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="ano">Ano do Modelo</label>
          <input
            id="ano"
            type="number"
            placeholder="Ex: 2024"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="cor">Cor Principal</label>
          <input
            id="cor"
            type="text"
            placeholder="Ex: Azul Metálico"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="button-primary">
          Salvar na Coleção
        </button>
      </form>
    </section>
  );
}

export default SectionCadastro;