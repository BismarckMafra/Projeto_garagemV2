import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscaCarros, atualizarCarros } from "./handleAtualiza";
import "./style.css";
//dhg
function SectionAtualiza() {
  const [idBusca, setIdBusca] = useState("");
  const navigate = useNavigate();
  const [carro, setCarro] = useState(null);
  const [categoria, setCategoria] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");

  const handleBuscar = async () => {
    const encontrado = await buscaCarros(idBusca);
    setCarro(encontrado);
    setCategoria(encontrado.categoria || "");
    setMarca(encontrado.marca_car || "");
    setModelo(encontrado.modelo_car || "");
    setAno(encontrado.ano_modelo || "");
    setCor(encontrado.cor || "");
  };

  const handleAtualizar = async (event) => {
    event.preventDefault();
    if (!carro) return;
    const atualizado = await atualizarCarros(carro.id, { categoria, marca, modelo, ano, cor });
    setCarro(atualizado);
    navigate("/carros");
  };

  return (
    <section class="page-container">
      <h1 class="page-title">Atualizar carro</h1>
      <div class="form search-row">
        <div class="input-group">
          <label htmlFor="idBusca">ID do carro</label>
          <input
            id="idBusca"
            type="number"
            value={idBusca}
            onChange={(e) => setIdBusca(e.target.value)}
          />
        </div>
        <button type="button" class="button-primary" onClick={handleBuscar}>
          Buscar
        </button>
      </div>
      {carro && (
        <form onSubmit={handleAtualizar} className="form">
          <p className="info-text">
            Editando carro ID: <strong>{carro.id}</strong>
          </p>

          <div className="input-group">
            <label htmlFor="categoria">Categoria</label>
            <input
              id="categoria"
              type="text"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="marca">Marca</label>
            <input
              id="marca"
              type="text"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="modelo">Modelo</label>
            <input
              id="modelo"
              type="text"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="ano">Ano</label>
            <input
              id="ano"
              type="number"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="cor">Cor</label>
            <input
              id="cor"
              type="text"
              value={cor}
              onChange={(e) => setCor(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="button-primary">
            Atualizar
          </button>
        </form>
      )}
    </section>
  );
}

export default SectionAtualiza;