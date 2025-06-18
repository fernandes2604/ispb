import React, { useState } from 'react';
import { auth, googleProvider } from '../Auth/firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { Button, Container, Form, Alert, Spinner, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser(user);
      console.log('Usuário autenticado:', user);
      navigate('/conta');
    } catch (err) {
      console.error('Erro ao fazer login com Google:', err.code, err.message);
      setError('Não foi possível fazer login com Google. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      setUser(user);
      console.log('Usuário autenticado com email:', user);
      navigate('/conta');
    } catch (err) {
      console.error('Erro ao fazer login com email:', err.code, err.message);
      setError('Email ou senha inválidos. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-4 text-center">Bem-vindo</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
      ) : (
        <Row className="w-100">
          <Col md={6} className="mb-3">
            <h3 className="text-center">Login com Email</h3>
            <Form onSubmit={handleEmailLogin}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">
                Entrar
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h3 className="text-center">Ou entre com Google</h3>
            <Button variant="outline-danger" onClick={handleGoogleLogin} className="w-100 py-2">
              Entrar com Google
            </Button>
          </Col>
        </Row>
      )}
      
    </Container>
  );
}
