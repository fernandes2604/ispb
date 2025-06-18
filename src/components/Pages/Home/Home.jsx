import {Carousel, Col, Row , Nav,Image} from "react-bootstrap";
import golda from '../../midia/go.jpg';

import bads from '../../midia/bads.png';
import preme from '../../midia/preme.jpg';

import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
    return(
        <div>
          <Carousel fade>
            <Carousel.Item>
              <Link to={'adasd'}>
              <img
                className="d-block w-100"
                src={golda}
                alt="First slide"
              />
              </Link>
              
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bads}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 fluid"
                src={preme}
                alt="Third slide"
              />
              <Carousel.Caption className="d-none">
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <p className="mt-2 mb-2"/>
          <Nav className="d-flex flex-wrap justify-content-center">
            <Nav.Link eventKey="link-event-key-1" className="bg-danger text-white rounded-1 me-md-5 ms-md-5 me-sm-3 ms-sm-3 my-3 hover-effect">
              Ação Social
            </Nav.Link>
            <Nav.Link eventKey="link-event-key-2" className="bg-danger text-white rounded-1 me-md-5 ms-md-5 me-sm-3 ms-sm-3 my-3 hover-effect">
              Cursos
            </Nav.Link>
            <Nav.Link eventKey="link-event-key-3" className="bg-danger text-white rounded-1 me-md-5 ms-md-5 me-sm-3 ms-sm-3 my-3 hover-effect">
              Extensão
            </Nav.Link>
            <Nav.Link eventKey="link-event-key-3" className="bg-danger text-white rounded-1 me-md-5 ms-md-5 me-sm-3 ms-sm-3 my-3 hover-effect">
              Ivestigação
            </Nav.Link>
          </Nav>
          <div className="p-2">
            <div className="box-shadow home1"> </div>
            <p className="mt-5"/>
            <div className="box-shadow home1"> </div>
          <Row className="mt-3">
            <Col sm={12} md={7} className="box-shadow  home1"></Col>
            <Col/>
            <Col sm={12} md={4} className="box-shadow home1"> </Col>
          </Row>
          <p className="m-5"/>
          <div className="box-shadow home1">
            <h1 className="display-5 fs-2 text-center">Acesse a sua conta de estudante</h1>
          </div>
          <p className="m-5"/>

        </div>
      </div>
    )
    
}