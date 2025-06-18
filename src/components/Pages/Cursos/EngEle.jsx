import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FiArrowRight, FiCpu, FiSettings, FiZap, FiSun, FiMoon } from 'react-icons/fi';

function EngenhariaEletronica() {
  const [activeTab, setActiveTab] = useState('embedded');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  const courseData = {
    hero: {
      title: "Engenharia Eletrônica: Inovação em Circuitos e Sistemas",
      subtitle: "Domine o projeto e desenvolvimento de sistemas eletrônicos complexos para aplicações industriais e comerciais.",
      cta: "Quero fazer parte",
      stats: [
        { value: "95%", label: "Empregabilidade" },
        { value: "4.7", label: "Avaliação dos alunos" },
        { value: "40+", label: "Laboratórios especializados" }
      ]
    },
    features: [
      {
        title: "Projeto de Circuitos Eletrônicos",
        description: "Aprenda a projetar e implementar circuitos analógicos e digitais para diversas aplicações.",
        icon: <FiCpu size={24} />
      },
      {
        title: "Sistemas Embarcados",
        description: "Desenvolva sistemas inteligentes combinando hardware e software para soluções integradas.",
        icon: <FiSettings size={24} />
      },
      {
        title: "Automação Industrial",
        description: "Domine tecnologias para automação de processos industriais e controle de sistemas.",
        icon: <FiZap size={24} />
      }
    ],
    specializations: {
      title: "Áreas de Especialização em Eletrônica",
      tabs: [
        {
          id: 'embedded',
          label: 'Sistemas Embarcados',
          content: 'Desenvolvimento de sistemas microcontrolados para aplicações específicas em diversos setores.',
          courses: ['Microcontroladores', 'RTOS', 'IoT']
        },
        {
          id: 'industrial',
          label: 'Eletrônica Industrial',
          content: 'Projeto e manutenção de sistemas eletrônicos para automação e controle industrial.',
          courses: ['CLPs', 'Sensores Industriais', 'Controle de Processos']
        },
        {
          id: 'digital',
          label: 'Eletrônica Digital',
          content: 'Projeto de sistemas digitais complexos usando tecnologias modernas como FPGAs e ASICs.',
          courses: ['FPGA', 'VHDL', 'Sistemas Digitais']
        }
      ]
    },
    testimonials: [
      {
        quote: "O curso me preparou para trabalhar em grandes projetos de automação industrial desde o primeiro emprego.",
        author: "Miguel Costa",
        role: "Engenheiro na Siemens"
      },
      {
        quote: "A base sólida em eletrônica me permitiu empreender na área de dispositivos médicos.",
        author: "Tatiana Almeida",
        role: "CEO da MedTech Solutions"
      }
    ]
  };

  return (
    <div className={`engenharia-page ${darkMode ? 'dark' : 'light'}`}>
            {/* Hero Section */}
         <section className={`hero-section ${darkMode ? 'bg-dark-red' : 'bg-light-red'} py-5`}>
           <Container>
             <Row className="align-items-center">
               <Col lg={6} className="mb-5 mb-lg-0">
                 <h1 className="display-5 fw-bold mb-4">{courseData.hero.title}</h1>
                 <p className={`lead mb-5 `}>{courseData.hero.subtitle}</p>
                 <Button variant={darkMode ? 'light' : 'dark-red'} size="lg" className="px-4 py-3 fw-bold">
                   {courseData.hero.cta} <FiArrowRight className="ms-2" />
                 </Button>
                 
                
       
               </Col>
               <Col lg={6}>
                 <div className="hero-image-container position-relative">
                   <div className="hero-image-main rounded-4 shadow-lg overflow-hidden">
                     <img 
                       src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                       alt="Estudantes trabalhando em projeto de tecnologia" 
                       className="img-fluid"
                       loading="eager"
                     />
                   </div>
                   <div className="hero-image-secondary position-absolute rounded-3 shadow-sm overflow-hidden">
                     <img 
                       src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                       alt="Laboratório de informática moderno" 
                       className="img-fluid"
                       loading="lazy"
                     />
                   </div>
                 </div>
               </Col>
             </Row>
           </Container>
         </section>
   
         {/* Features Section */}
         <section className={`py-5 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
           <Container>
             <Row className="mb-5">
               <Col className="text-center">
                 <h2 className={`display-5 fw-bold mb-3 ${darkMode ? 'text-white' : 'text-dark'}`}>Por que escolher nosso curso?</h2>
                 <p className={`lead mx-auto ${darkMode ? 'text-light-50' : 'text-muted'}`} style={{maxWidth: '700px'}}>
                   Uma formação completa que vai além do convencional para preparar você para os desafios do mercado
                 </p>
               </Col>
             </Row>
             <Row className="g-4">
               {courseData.features.map((feature, index) => (
                 <Col md={4} key={index}>
                   <Card className={`h-100 border-0 transition-all ${darkMode ? 'bg-dark-2 text-light' : 'bg-white text-dark'}`}>
                     <Card.Body className="p-4 text-center">
                       <div className={`icon-container ${darkMode ? 'bg-light-red' : 'bg-dark-red'} rounded-circle p-3 mb-4 mx-auto`}>
                         {React.cloneElement(feature.icon, { className: darkMode ? 'text-white' : 'text-white' })}
                       </div>
                       <h3 className={`h4 fw-bold mb-3 ${darkMode ? 'text-white' : 'text-dark'}`}>{feature.title}</h3>
                       <p className={darkMode ? 'text-light-50' : 'text-muted'}>{feature.description}</p>
                     </Card.Body>
                   </Card>
                 </Col>
               ))}
             </Row>
           </Container>
         </section>
   
         {/* Specializations Section */}
         <section className={`py-5 ${darkMode ? 'bg-dark-2' : 'bg-light-2'}`}>
           <Container>
             <Row className="mb-5">
               <Col className={`${darkMode ? 'bg-dark-red' : 'bg-light-red'}`}>
                 <h2 className={`display-5 fw-bold mb-3 '}`}>{courseData.specializations.title}</h2>
                 <div className="d-flex justify-content-center mb-4">
                   <div className="tabs-container">
                     {courseData.specializations.tabs.map(tab => (
                       <Button
                         key={tab.id}
                         variant={activeTab === tab.id ? 
                           (darkMode ? '' : '') : 
                           (darkMode ? 'outline-light-red' : 'outline-dark-red')}
                         className={`me-2 ${activeTab === tab.id ? 'active' : ''}`}
                         onClick={() => setActiveTab(tab.id)}
                       >
                         {tab.label}
                       </Button>
                     ))}
                   </div>
                 </div>
               </Col>
             </Row>
             <Row>
               <Col lg={6} className="mb-4 mb-lg-0">
                 <div className={`specialization-content p-4 rounded-3 ${darkMode ? 'bg-dark-3 text-light' : 'bg-light text-dark'}`}>
                   <h3 className={`fw-bold mb-4 ${darkMode ? 'text-white' : 'text-dark'}`}>
                     {courseData.specializations.tabs.find(t => t.id === activeTab)?.label}
                   </h3>
                   <p className={`lead mb-4 ${darkMode ? 'text-light' : 'text-dark'}`}>
                     {courseData.specializations.tabs.find(t => t.id === activeTab)?.content}
                   </p>
                   <ul className="course-list">
                     {courseData.specializations.tabs.find(t => t.id === activeTab)?.courses.map((course, i) => (
                       <li key={i} className={`d-flex align-items-center mb-2 ${darkMode ? 'text-light' : 'text-dark'}`}>
                         <FiArrowRight className={`${darkMode ? 'text-light-red' : 'text-dark-red'} me-2`} />
                         <span>{course}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </Col>
               <Col lg={6}>
                 <img 
                   src={`https://source.unsplash.com/random/600x400?${activeTab},technology`} 
                   alt={`Imagem representando ${activeTab}`}
                   className="img-fluid rounded-3 shadow"
                   loading="lazy"
                 />
               </Col>
             </Row>
           </Container>
         </section>
   
         {/* Final CTA */}
         <section className={`py-5 ${darkMode ? 'bg-dark' : 'bg-light-red'}`}>
           <Container>
             <Row className="justify-content-center">
               <Col lg={8} className="text-center">
                 <h2 className={`display-5 fw-bold mb-4 `}>Pronto para transformar sua carreira?</h2>
                 <p className={`lead mb-5 `}>
                   Inscreva-se agora e dê o primeiro passo para se tornar um engenheiro de software de alto nível
                 </p>
                 <div className="d-flex gap-3 justify-content-center">
                   <Button  size="lg" className="px-4 py-3 fw-bold">
                     Inscreva-se agora
                   </Button>
                   <Button  size="lg" className="px-4 py-3 fw-bold">
                     Fale com um orientador
                   </Button>
                 </div>
               </Col>
             </Row>
           </Container>
         </section>
       </div>
  );
}

export default EngenhariaEletronica;