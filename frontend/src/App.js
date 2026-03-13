import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

// import Header from './components/header/Header';
// import Nav from './components/nav/Nav';
// import Footer from './components/footer/Footer';

// import Section from './pages/section/Section';
// import SectionAtualiza from './pages/update/SectionAtualiza';
// import SectionDeleta from './pages/deletar/SectionDeleta';
// import SectionCadastra from './pages/insert/SectionCadastra';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter >
        <Nav />
        <Routes >
          <Route path="/" element={<Section />} />
          <Route path="/fastandfurious" element={<SectionUser />} />
          {/* <Route path="/usuarios/buscar" element={<SectionUserId />} />
          <Route path="/cadastrar" element={<SectionCadastra />} />
          <Route path="/atualizar" element={<SectionAtualiza />} />
          <Route path="/deletar" element={<SectionDeleta />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;