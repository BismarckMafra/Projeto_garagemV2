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
      <Nav />
      <Routes>
        <Route path="/" element={<SectionMain />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;