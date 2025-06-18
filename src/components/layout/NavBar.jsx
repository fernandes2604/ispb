import React, { useState, useEffect } from "react";
import { Button, Nav, Navbar, Container, Dropdown, Row, Col } from "react-bootstrap";
import { FaMoon, FaUserCircle } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logo from "../../assets/ispb.svg";
import { motion } from "framer-motion";
import { auth } from "../Auth/firebase";
import { useTheme } from "./ThemeContext";
import { MdLanguage, MdGroups } from "react-icons/md";

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Navbar expand="lg" variant={theme === "dark" ? "dark" : "light"} className="py-3">
      <Container fluid="xxl">
        {/* Logo e Itens Principais */}
        <Navbar.Brand as={NavLink} to="/" className="fw-bold me-4">
          <img 
            src={logo} 
            width="90" 
            height="35" 
            className={`d-inline-block align-top ${theme === "dark" ? "bg-dark" : "bg-light"} rounded-2 p-1`} 
            alt="ISPB Logo" 
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        
        <Navbar.Collapse id="navbar-nav">
          {/* Navegação Principal (Esquerda) */}
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className={`px-3 ${theme === "dark" ? "text-light" : "text-dark"}`}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/noticias" className={`px-3 ${theme === "dark" ? "text-light" : "text-dark"}`}>
              Notícias
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cursos" className={`px-3 ${theme === "dark" ? "text-light" : "text-dark"}`}>
              Cursos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/actividades" className={`px-3 ${theme === "dark" ? "text-light" : "text-dark"}`}>
              Actividades
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contato" className={`px-3 ${theme === "dark" ? "text-light" : "text-dark"}`}>
              Contato
            </Nav.Link>
          </Nav>

          {/* Itens do Lado Direito */}
          <Nav className="align-items-center">
            {/* Associação de Estudantes com Ícone */}
            <Nav.Link 
              as={NavLink} 
              to="/associação-de-estudantes" 
              className={`me-3 d-flex align-items-center ${theme === "dark" ? "text-light" : "text-dark"}`}
            >
              <MdGroups className="me-2" size={20} />
              Associação
            </Nav.Link>

            {/* Conta do Usuário */}
            {user ? (
              <Nav.Link as={NavLink} to="/conta" className="me-3 d-flex align-items-center">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    width="32"
                    height="32"
                    className="rounded-circle me-2"
                  />
                ) : (
                  <FaUserCircle size={24} className="me-2" />
                )}
                <Button variant={theme === "dark" ? "outline-light" : "outline-dark"}>
                  Minha Conta
                </Button>
              </Nav.Link>
            ) : (
              <Nav.Link as={NavLink} to="/login" className="me-3">
                <Button variant="danger">Entrar</Button>
              </Nav.Link>
            )}

            {/* Seletor de Idioma */}
            <Dropdown className="me-3">
              <Dropdown.Toggle variant={theme === "dark" ? "dark" : "light"} className="border-0">
                <MdLanguage size={22} />
              </Dropdown.Toggle>
              <Dropdown.Menu variant={theme === "dark" ? "dark" : "light"}>
                <Dropdown.Header>Mudar Idioma</Dropdown.Header>
                <Dropdown.Item active>Português</Dropdown.Item>
                <Dropdown.Item>Inglês</Dropdown.Item>
                <Dropdown.Item>Espanhol</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Toggle de Tema */}
            <motion.button 
              onClick={toggleTheme} 
              className="btn p-1" 
              aria-label="Toggle theme" 
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <motion.div initial={{ rotate: 180 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
                  <RiSunFill size={22} color="orange" />
                </motion.div>
              ) : (
                <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                  <FaMoon size={20} color="#6c757d" />
                </motion.div>
              )}
            </motion.button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}