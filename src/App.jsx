import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Noticias from "./components/Pages/Noticias";
import Cursos from "./components/Pages/Cursos";
import Actividades from "./components/Pages/Actividades";
import Contactos from "./components/Pages/contactos";
import Login from "./components/Pages/Login";
import Conta from "./components/Auth/UserAccount";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import EngDepart from "./components/Pages/EngDepart";
import { ThemeProvider } from "./components/layout/ThemeContext";
import PageNotFound from "./components/Pages/Error";
import EngenhariaInformatica from "./components/Pages/Cursos/EngInf";
import "./App.css";
import Associacao from "./components/Pages/Associacao/Associacao";
import EngenhariaTelecomunicacoes from "./components/Pages/Cursos/EngTel";
import EngenhariaEletronica from "./components/Pages/Cursos/EngEle";
import EngenhariaAgropecuaria from "./components/Pages/Cursos/EngAgro";

function App() {
  return (
    <ThemeProvider>  {/* Envolvendo o conteúdo com o ThemeProvider */}
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/cursos/departamento-de-engenharias" element={<EngDepart />} />
            <Route path="/cursos/departamento-de-engenharias/engenharia-de-informatica" element={<EngenhariaInformatica/>} />
            <Route path="/cursos/departamento-de-engenharias/engenharia-telecomunicacoes" element={<EngenhariaTelecomunicacoes/>} />
            <Route path="/cursos/departamento-de-engenharias/engenharia-eletronica" element={<EngenhariaEletronica/>} />
            <Route path="/cursos/departamento-de-engenharias/engenharia-agropecuaria" element={<EngenhariaAgropecuaria/>} />
            <Route path="/actividades" element={<Actividades />} />
            <Route path="/contato" element={<Contactos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/conta" element={<Conta />} />
            <Route path="/associação-de-estudantes" element={<Associacao />} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
