import { useState } from 'react';
import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FiMail, FiMapPin, FiClock, FiUsers, FiCalendar, FiAward } from 'react-icons/fi';
import './Associacao.css';
import CombataColera from "../../midia/associacao/capa.jpg";
import Certificado from "../../midia/associacao/certificado.jpg";
import Excursao from "../../midia/associacao/excursão.jpg";
import Com from '../../midia/associacao/comunicacao/com.jpg';
import Comun2 from '../../midia/associacao/comunicacao/comun2.jpg';
import Comun3 from '../../midia/associacao/comunicacao/comun3.jpg';
import Membros from './Membros';

export default function Associacao() {
  const [theme, setTheme] = useState('light');
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const galleryItems = [
    {
      id: 1,
      image: Com,
      title: "Palestras e Workshops",
      description: "Eventos com profissionais renomados para complementar sua formação.",
      icon: <FiCalendar size={24} />
    },
    {
      id: 2,
      image: Comun2,
      title: "Atividades Esportivas",
      description: "Torneios e atividades para manter o corpo e a mente saudáveis.",
      icon: <FiAward size={24} />
    },
    {
      id: 3,
      image: Comun3,
      title: "Eventos Culturais",
      description: "Exposições, peças de teatro e shows para expandir seus horizontes.",
      icon: <FiUsers size={24} />
    }
  ];

   return (
    <div className={`associacao-page ${isDark ? 'dark-theme' : 'light-theme'}`}>
      {/* Hero Section com Carrossel */}
      <section className="hero-section position-relative">
        <Carousel fade indicators={false} controls={false} interval={5000}>
          <Carousel.Item>
            <img
              src={CombataColera}
              loading="eager"
              alt="Eventos da associação"
              className="w-100 hero-image"
            />
            <Carousel.Caption className="d-flex flex-column justify-content-center h-100">
              <h2 className="display-4 fw-bold mb-4">Associação de Estudantes</h2>
              <p className="lead mb-5">Juntos construímos uma comunidade acadêmica mais forte</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              src={Certificado}
              loading="lazy"
              alt="Atividades culturais"
              className="w-100 hero-image"
            />
            <Carousel.Caption className="d-flex flex-column justify-content-center h-100">
              <h2 className="display-4 fw-bold mb-4">Atividades Culturais</h2>
              <p className="lead mb-5">Descubra nossos eventos e participe!</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              src={Excursao}
              alt="Grupo de estudantes em excursão ao museu de tecnologia"
              loading="lazy"
              className="w-100 hero-image"
            />
            <Carousel.Caption className="d-flex flex-column justify-content-center h-100">
              <h2 className="display-4 fw-bold mb-4">Excursões Acadêmicas</h2>
              <p className="lead mb-5">Conheça novos lugares com a associação!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Seção de Atividades */}
      <section className={`atividades-section py-5 ${isDark ? 'bg-dark-2' : 'bg-light'}`}>
        <Container>
          <h2 className={`text-center mb-5 display-5 fw-bold ${isDark ? 'text-white' : 'text-dark'}`}>Nossas Atividades</h2>
          <Row className="g-4">
            {galleryItems.map((item) => (
              <Col key={item.id} md={4}>
                <Card className={`h-100 border-0 ${isDark ? 'bg-dark-3 text-light' : 'bg-white text-dark'} shadow-sm-hover transition-all`}>
                  <div className="image-container">
                    <Card.Img 
                      variant="top" 
                      src={item.image} 
                      alt={item.title}
                      className="gallery-image"
                    />
                  </div>
                  <Card.Body className="p-4">
                    <div className={`icon-container ${isDark ? 'bg-dark-red' : 'bg-light-red'} rounded-circle p-3 mb-3`}>
                      {item.icon}
                    </div>
                    <Card.Title as="h3" className="fw-bold mb-3">{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Seção de Membros */}
      <section className={`membros-section py-5 ${isDark ? 'bg-dark' : 'bg-light-2'}`}>
        <Container>
          <h2 className={`text-center mb-5 display-5 fw-bold ${isDark ? 'text-white' : 'text-dark'}`}>Nossa Diretoria</h2>
          <Membros />
        </Container>
      </section>

      {/* CTA - Fazer Parte */}
      <section className={`cta-section py-5 `}>
        <Container className="text-center">
          <h2 className="display-5 fw-bold mb-4">Quer fazer parte da nossa associação?</h2>
          <p className="lead mb-5 mx-auto" style={{maxWidth: '600px'}}>
            Junte-se a nós e faça a diferença na sua comunidade acadêmica!
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Button variant="light" size="lg" className="px-4 fw-bold">Associe-se</Button>
            <Button variant="outline-light" size="lg" className="px-4 fw-bold">Seja voluntário</Button>
          </div>
        </Container>
      </section>

      {/* Seção de Contatos */}
      <section className={`contatos-section py-5 ${isDark ? 'bg-dark-2' : 'bg-light'}`}>
        <Container>
          <h2 className={`text-center mb-5 display-5 fw-bold ${isDark ? 'text-white' : 'text-dark'}`}>Entre em Contato</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className={`h-100 border-0 ${isDark ? 'bg-dark-3 text-light' : 'bg-white text-dark'} text-center p-4`}>
                <div className={`icon-container ${isDark ? 'bg-dark-red' : 'bg-light-red'} rounded-circle p-3 mb-3 mx-auto`}>
                  <FiMail size={24} className="text-white" />
                </div>
                <h4 className="fw-bold mb-3">Email</h4>
                <p className="mb-0">contato@associacaoestudantes.edu</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={`h-100 border-0 ${isDark ? 'bg-dark-3 text-light' : 'bg-white text-dark'} text-center p-4`}>
                <div className={`icon-container ${isDark ? 'bg-dark-red' : 'bg-light-red'} rounded-circle p-3 mb-3 mx-auto`}>
                  <FiMapPin size={24} className="text-white" />
                </div>
                <h4 className="fw-bold mb-3">Localização</h4>
                <p className="mb-0">Prédio da Reitoria, Sala 205</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={`h-100 border-0 ${isDark ? 'bg-dark-3 text-light' : 'bg-white text-dark'} text-center p-4`}>
                <div className={`icon-container ${isDark ? 'bg-dark-red' : 'bg-light-red'} rounded-circle p-3 mb-3 mx-auto`}>
                  <FiClock size={24} className="text-white" />
                </div>
                <h4 className="fw-bold mb-3">Horário</h4>
                <p className="mb-0">Segunda a Sexta: 9h às 17h</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}