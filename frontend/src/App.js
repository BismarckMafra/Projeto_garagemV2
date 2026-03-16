import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import { Route, Routes } from 'react-router-dom';
import SectionMain from './pages/main/SectionMain';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter >
        <Nav />
        <Routes >
          <Route path="/" element={<Section />} />
          <Route path="/fastandfurious" element={<SectionUser />} />
          <Route path="/usuarios/buscar" element={<SectionUserId />} />
          <Route path="/cadastrar" element={<SectionCadastra />} />
          <Route path="/atualizar" element={<SectionAtualiza />} />
          <Route path="/deletar" element={<SectionDeleta />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;