import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Section from'./pages/main/SectionMain';

import SectionAtualiza from './pages/atualizar/SectionAtualiza';

function App() {
  return (
    <div className="App">
      <Header />
        <Nav />
        <Routes >
          <Route path="/" element={<Section />} />
          <Route path="/atualizar" element={<SectionAtualiza />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;