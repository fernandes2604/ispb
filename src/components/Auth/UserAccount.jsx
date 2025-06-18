import React, { useState, useEffect } from 'react';
import { auth } from '../Auth/firebase';
import { signOut } from 'firebase/auth';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

export default function Conta() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao sair:", error.message);
    }
  };

  return (
    <Container className="mt-5">
      {user ? (
        <Card className="shadow-lg border-0">
          <Card.Body>
            <Row className="align-items-center">
              <Col md={3} className="text-center mb-3 mb-md-0">
                <img
                  src={user.photoURL || "https://via.placeholder.com/100"}
                  alt="Foto de perfil do usuário"
                  width="100"
                  height="100"
                  className="rounded-circle border"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/100";
                  }}
                />
              </Col>
              <Col md={9}>
                <h4 className="fw-bold">Informações da Conta</h4>
                <p className="mb-1"><strong>Nome:</strong> {user.displayName}</p>
                <p className="mb-3"><strong>Email:</strong> {user.email}</p>
                <Button variant="danger" onClick={handleLogout}>Sair da Conta</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ) : (
        <Card className="text-center border-0 shadow-sm">
          <Card.Body>
            <h5 className="text-muted">Você não está autenticado.</h5>
            <p>Faça login para visualizar os dados da sua conta.</p>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}
