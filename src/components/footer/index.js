import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { IconContext } from "react-icons/lib";

import "./styles.scss";

const Footer = ({ msg = "" }) => {
  return (
    <>
      <div className="footer-wrapper">
        <Container className="footer-container">
          <Row>
            <Col>
              <Row className="column-title">Categoria</Row>
              <Row>Categoria</Row>
              <Row>Categoria</Row>
              <Row>Categoria</Row>
            </Col>
            <Col>
              <Row>Categoria</Row>
              <Row>Categoria</Row>
              <Row>Categoria</Row>
            </Col>
            <Col>
              <Row className="column-title">Institucional</Row>
              <Row>Privacidade e termos de uso</Row>
              <Row>Privacidade e termos de uso</Row>
              <Row>Privacidade e termos de uso</Row>
              <Row>Privacidade e termos de uso</Row>
            </Col>
            <Col>
              <Row className="column-title">Fale conosco</Row>
              <Row>Atendimento Avanti</Row>
              <Row>(14)0000-0000</Row>
              <Row>
                <div className="social-media-icons">
                  <IconContext.Provider
                    value={{ color: "#1B4D9B", size: "20px" }}
                  >
                    <div>
                      <AiFillFacebook />
                      <AiOutlineInstagram />
                      <AiFillLinkedin />
                      <AiOutlineWhatsApp />
                    </div>
                  </IconContext.Provider>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          proin neque montes, eget. Porta et diam nunc in massa turpis
          ultricies. Nibh ullamcorper id tellus volutpat elementum morbi egestas
          nulla id. In in in leo sed mattis.
        </span>
      </div>
    </>
  );
};

export default Footer;
