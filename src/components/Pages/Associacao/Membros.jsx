import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './DynamicDescriptionCarousel.css';
import Presidas from "../../midia/associacao/presidente.jpg";
import capa from "../../midia/associacao/capa.jpg";

const Membros = ({theme}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      id: 1,
      image: capa,
      title: "Conheça nossa equipe",
      description: "Nossa associação é formada por estudantes dedicados que trabalham para representar seus colegas e organizar atividades que enriquecem a vida acadêmica.",
      buttonText: "Ver diretoria",
      buttonVariant: "outline-primary"
    },
    {
      id: 2,
      image: Presidas,
      title: "Nossos Eventos",
      description: "Organizamos diversos eventos acadêmicos, culturais e esportivos durante todo o ano letivo.",
      buttonText: "Ver calendário",
      buttonVariant: "outline-success"
    },
    {
      id: 3,
      image: "/assets/projetos-associacao.jpg",
      title: "Nossos Projetos",
      description: "Desenvolvemos projetos inovadores para melhorar a experiência acadêmica dos estudantes.",
      buttonText: "Conhecer projetos",
      buttonVariant: "outline-info"
    }
  ];

  const nextItem = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevItem = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const currentItem = items[activeIndex];

  return (
    <div className={theme === "dark" ? "dynamic-carousel-container text-light" : "dynamic-carousel-container text-dark"}>
      <Row className="align-items-center">
        <Col md={6} className="image-column">
          <div className="image-wrapper">
            <img 
              src={currentItem.image} 
              alt={currentItem.title} 
              className="img-fluid rounded shadow"
            />
            <div className="carousel-controls">
              <button 
                className="control-btn prev-btn"
                onClick={prevItem}
                aria-label="Anterior"
              >
                &lt;
              </button>
              <button 
                className="control-btn next-btn"
                onClick={nextItem}
                aria-label="Próximo"
              >
                &gt;
              </button>
            </div>
            <div className="indicators">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  className={`indicator ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ir para item ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Col>
        
        <Col md={6} className="description-column">
          <h3>{currentItem.title}</h3>
          <p>{currentItem.description}</p>
          <Button variant={currentItem.buttonVariant}>
            {currentItem.buttonText}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Membros;