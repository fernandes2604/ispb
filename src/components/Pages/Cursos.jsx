import { Col, Image, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ispb from '../midia/ispb1.jpg';
import crono from '../midia/cro.png';
import MultiCarousel from './compos/Cols';
import './cursos.css';

export default function Cursos() {
  const carouselItems = [
    { title: "Análises Clínicas", duration: "4 anos", area: "Ciências da Saúde" },
    { title: "Fisioterapia", duration: "4 anos", area: "Reabilitação e Saúde Física" },
    { title: "Enfermagem", duration: "4 anos", area: "Cuidados de Saúde" },
    { title: "Medicina Dentária", duration: "5 anos", area: "Saúde e Odontologia" },
    { title: "Administração Pública, Autárquica e Gestão do Território", duration: "4 anos", area: "Gestão Pública e Políticas Urbanas" },
    { title: "Contabilidade, Fiscalidade e Auditoria", duration: "4 anos", area: "Finanças e Negócios" },
    { title: "Gestão de Recursos Humanos", duration: "4 anos", area: "Gestão e Desenvolvimento de Talentos" },
    { title: "Gestão de Empresas", duration: "4 anos", area: "Gestão e Negócios" },
    { title: "Gestão do Ambiente", duration: "4 anos", area: "Sustentabilidade e Meio Ambiente" },
    { title: "Ensino Primário", duration: "4 anos", area: "Educação Infantil" },
    { title: "Engenharia Informática", duration: "4 anos", area: "Tecnologia da Informação" },
    { title: "Engenharia de Telecomunicações", duration: "5 anos", area: "Comunicação e Redes" },
    { title: "Engenharia Electrónica", duration: "5 anos", area: "Sistemas Eletrônicos" },
    { title: "Engenharia Agropecuária", duration: "5 anos", area: "Produção Agrícola e Pecuária" },
  ];

  const departamentos = [
    {
      nome: "Engenharia",
      descricao: "Formar profissionais altamente qualificados em diversas áreas de engenharia, capazes de contribuir para o desenvolvimento sustentável e tecnológico de Angola.",
    },
    {
      nome: "Saúde",
      descricao: "Desenvolver competências no campo da saúde, formando profissionais preparados para enfrentar os desafios de saúde pública e bem-estar.",
    },
    {
      nome: "Gestão",
      descricao: "Oferecer uma formação de qualidade em áreas de gestão, capacitando líderes e empreendedores para o desenvolvimento econômico e social.",
    },
    {
      nome: "Educação",
      descricao: "Formar educadores que promovam o ensino de qualidade e a disseminação do conhecimento, com foco na inclusão e desenvolvimento social.",
    },
  ];

  const navItems = [
    { label: "Departamento de Saúde", to: "/#ciencias" },
    { label: "Departamento de Engenharia", to: "departamento-de-engenharias" },
    { label: "Departamento de Gestão", to: "/#gestao" },
    { label: "Departamento de Educação", to: "/#educacao" },
  ];

  return (
    <div>
      <h1 className="d-none">ISPB - Cursos</h1>

      <Image src={ispb} className="ispb" alt="Imagem ilustrativa do ISPB" fluid />

      <Nav className="sub-nav text-center text-uppercase row my-4">
        {navItems.map(({ label, to }, idx) => (
          <Nav.Item key={idx} className="nav-link-cursos col">
            <Link
              className="bg-danger text-white me-2 rounded-2 nav-link"
              to={to}
              onClick={(e) => to.includes('#') && e.preventDefault()}
            >
              {label}
            </Link>
          </Nav.Item>
        ))}
      </Nav>

      <section className="departamentos p-3 mt-5">
        <h2 className="text-center mb-5">Sobre os Departamentos</h2>
        <Row>
          {departamentos.map((departamento, index) => {
            const bgClass = [
              'bg-primary text-white',
              'bg-warning text-dark',
              'bg-dark text-white',
              'bg-danger text-white',
            ][index % 4];

            return (
              <Col key={index} className={`${bgClass} p-3 mb-4 rounded-2`}>
                <h3>{departamento.nome}</h3>
                <p>{departamento.descricao}</p>
              </Col>
            );
          })}
        </Row>
      </section>

      <section className="organograma my-5">
        <h2 className="text-center mb-4">Organograma dos Departamentos</h2>
        <Image src={crono} className="w-100" fluid alt="Organograma dos departamentos" />
      </section>

      <section className="cursos my-5">
        <h2 className="text-center mb-5">Nossos Cursos</h2>
        <MultiCarousel items={carouselItems} />
      </section>
    </div>
  );
}
