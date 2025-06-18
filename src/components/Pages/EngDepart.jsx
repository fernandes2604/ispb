import React, { useState, useEffect } from 'react';
import { Modal, Button, Row, Col, Card, Container } from 'react-bootstrap';
import img from '../../components/midia/eng.jpg'; // Substitua pelo caminho da sua imagem
import jornadas from '../../components/midia/jornada.png';
import feiras from '../../components/midia/feiras.jpg';
import web from '../../components/midia/web.jpg';
import academ from '../../components/midia/academ.jpg';
import eng from '../../components/midia/enginf.jpg'
import eng1 from '../../components/midia/engtel.jpg'
import eng2 from '../../components/midia/engagro.jpg'
import eng3 from '../../components/midia/engelet.jpg'
import engs from '../../components/midia/engs1.jpg'
import { Link, Links } from 'react-router-dom';
import DarkCard from './compos/DarkCard';
export default function EngDepart(){  
    const actividades = [
        {
            nome: "Feira das Engenharias",
            desc: "Evento anual onde estudantes e professores apresentam projetos de pesquisa e inovação, com workshops e cursos gratuitos.",
            img: feiras,
        },
        {
            nome: "Jornadas Científicas",
            desc: "Evento acadêmico com seminários, palestras e apresentações de artigos científicos sobre inovações e tendências tecnológicas.",
            img: jornadas,
        },
        {
            nome: "Concurso de Programação Competitiva",
            desc: "Competição onde estudantes resolvem problemas de programação em tempo limitado, testando habilidades em algoritmos e lógica.",
            img: academ
        },
        {
            nome: "Concurso de Programação Web",
            desc: "Competição de desenvolvimento de aplicativos ou websites, com foco em tecnologias web e design front-end e back-end.",
            img: web
        }
    ];
    const cursos = [
       {
            nome: "Engenharia Telecomunicações",
            link: "engenharia-telecomunicacoes",
            img:eng1
        },{
            nome: "Engenharia Agropecuária",
            link: "engenharia-agropecuaria",
            img:eng2
        },{
            nome: "Engenharia Eletrônica",
            link: "engenharia-eletronica",
            img:eng3
        }
    ];
        return (
            <div className=''>
              <h1 className=' d-none'>Departamento de engenharias</h1>
              <div className="position-relative">
                <img
                    className="d-block w-100 prof"
                    src={engs}
                    alt="Imagem representativa do ISPB Benguela"/>
               
            </div>         
            <Row className='p-3'>
              <h2 className='text-center mb-4'>Sobre o Departamento</h2>
                <Col>
                    <h3 className='text-center display-5 fs-4'>Nossa Missão</h3>
                    <p className='text-justify'>Formar engenheiros altamente qualificados, capazes de contribuir para o desenvolvimento tecnológico e sustentável de Angola através da excelência no ensino, pesquisa e extensão.</p>
                </Col>
                <Col>
                    <h3 className='text-center display-5 fs-4'>Nossa Visão</h3>
                    <p className='text-justify'>Ser reconhecido como um centro de referência em educação em engenharia na África Austral, promovendo inovação e desenvolvimento tecnológico.</p>
                </Col>
            </Row>     
            <h2 className='text-uppercase display-5 fs-3 text-center mb-5 mt-5'>
                Conheça as Nossas Engenharias
            </h2>
            <Container fluid>
                <Row>
                    <Col md={7}> 
                    <Row className="mb-5">
                <Col md={6}>
                    <img 
                        src={eng}
                        alt="Engenharia Informática" 
                        className="img-fluid rounded shadow"
                    />
                </Col>
                <Col md={6}>
                    <h2 className="fw-semibold fs-5">Pesquisa, Desenvolvimento e Aplicação</h2>
                    <p className="">
                    A Engenharia de Informática envolve o estudo e desenvolvimento de sistemas de computação, redes e software. É a base para o avanço tecnológico em diversas áreas da sociedade.
                    </p>
                    <Link to={'engenharia-de-informatica'}>
                    <Button variant="primary" className="mt-3">Saiba mais</Button></Link>
                </Col>
            </Row></Col>
                    
            </Row>
            </Container>
            <Container fluid>
                 <Row>
            {cursos.map((curso, index) => (                    
                <Col key={index} sm  className="mb-4 vibrate">
                    <DarkCard
                    imageSrc={curso.img}
                    title={curso.nome}
                    links={curso.link}
                    />
                </Col>
                ))}
            </Row>
            </Container>
           
            
                <h3 className='bg-dark bg-opacity-25 text-center display-5 fs-3 mb-3'>Principais atividades do departamento</h3>
                <Row className="p-2">
                    {actividades.map((atividade, index) => (
                        <Col key={index} md={3} className="mb-4">
                            <Card className="h-100 shadow-sm  border-2 rounded-3">
                                <Card.Img
                                    variant="top" 
                                    src={atividade.img} 
                                    alt={`Imagem de ${atividade.nome}`} 
                                    className="rounded-3" 
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="text-center">{atividade.nome}</Card.Title>
                                    <Card.Text>{atividade.desc}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
          );
    
}