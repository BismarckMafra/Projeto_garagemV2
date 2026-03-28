import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Section from'./pages/main/SectionMain';
import SectionDeletar from './pages/deletar/SectionDeletar';
import SectionListar from './pages/geral/SectionGeral';
import SectionCadastro from './pages/cadastrar/SectionCadastro';

import SectionAtualiza from './pages/atualizar/SectionAtualiza';

function App() {
  return (
    <div className="App">
      <Header />
        <Nav />
        <Routes >
          <Route path="/" element={<Section />} />
          <Route path="/atualizar" element={<SectionAtualiza />} />
          <Route path="/deletar" element={<SectionDeletar />} />
          <Route path="/geral" element={<SectionListar />} />
          <Route path="/cadastrar" element={<SectionCadastro />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;