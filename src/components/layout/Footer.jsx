import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub, FaHome, FaEnvelope, FaPhone, FaPrint } from "react-icons/fa";
import { useTheme } from "./ThemeContext";  // Importando o contexto de tema
import { BiCopy, BiCopyright } from "react-icons/bi";

export default function Footer() {
  const { theme } = useTheme();  // Usando o tema do contexto

  const footerBgColor = theme === "dark" ? "#1c2331" : "#ffffff";
  const footerTextColor = theme === "dark" ? "#ffffff" : "#000000";
  const sectionBgColor = theme === "dark" ? "#6351ce" : "#ff5733";

  return (
    <footer className="text-center text-lg-start" style={{ backgroundColor: footerBgColor, color: footerTextColor }}>
      <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#ff1717e7' }}>
        <div className="me-5">
          <span>Conecte-se conosco nas redes sociais</span>
        </div>
        <div>
          <a href="https://www.facebook.com/ispbenguela/" target="_blank" className="text-white me-4">
            <FaFacebookF size={20}/>
          </a>
          <a href="https://www.instagram.com/ispb.oficial/" target="_blank" className="text-white me-4">
            <FaInstagram size={20}/>
          </a>
          <a href="https://www.linkedin.com/company/103223557/admin/feed/posts/" target="_blank" className="text-white me-4">
            <FaLinkedin size={20}/>
          </a>
        </div>
      </section>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Quem somos?</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "10rem", backgroundColor: "red", height: "3px" }} />
              <p>
                
O ISPB é uma instituição de ensino superior em Benguela, dedicada à excelência, inclusão e inovação, com cursos de qualidade e infraestrutura moderna.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">RECURSOS</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "10rem", backgroundColor: "red", height: "3px" }} />

              <p><a href="https://drive.google.com/drive/folders/1FZb2Dn1oN2B87lif1gaf_hql13rO0XNV?usp=drive_link" target="_blank" className="nav-link">Repositorios Ortogas</a></p>
              <p><a href="http://moodle.ispbenguela.com/" target="_blank" className="nav-link">Moodle</a></p>
              <p><a href="http://beducation.ispbenguela.com/" target="_blank" className="nav-link">BeEducation</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Links Úteis</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "10rem", backgroundColor: "red", height: "3px" }} />

              <p><a href="/#/conta" className="nav-link">Sua Conta</a></p>
              <p><a href="/#/cursos" className="nav-link">Cursos</a></p>
              <p><a href="/#/contato" className="nav-link">Ajuda</a></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contato</h6>
                           <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "10rem", backgroundColor: "red", height: "3px" }} />

              <p><FaHome className="mr-3" />Av. Governador Moutinho, T 125</p>
              <p><FaEnvelope className="mr-3" /> geral@ispbenguela.com</p>
              <p><FaPhone className="mr-3" />+244 923 919 100</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        <BiCopyright/> 2024 Todos os direitos reservados : 
        <a className="text-white text-decoration-none" href="https://mdbootstrap.com/"> Evandro Fernandes</a>
      </div>
    </footer>
  );
}
