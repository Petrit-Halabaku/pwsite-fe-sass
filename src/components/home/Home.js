import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import me from "../../assets/images/png/me.png";
import insta from "../../assets/images/svg/insta.svg";
import linkedIn from "../../assets/images/svg/linked-In.svg";
import pinterest from "../../assets/images/svg/pinterest.svg";
import homeMesh from "../../assets/images/png/homeMesh.png";

import "./home.scss";

const Home = () => {
  return (
    //  <div>
    <Container>
      <div id="home">
        <Row>
          <Col id="content">
            <div className="home__content">
              <p className="home__content-title">Hello, I am</p>
              <img
                src={homeMesh}
                alt="home-mesh"
                className="home__circle-mesh"
              />

              <p className="home__content-name">Petrit Halabaku</p>
              <p className="home__content-description">
                A young Developer with a love for React.js
              </p>
              <div className="home__social">
                {" "}
                <p>Find Me on</p>
                <ul className="home__content-icons">
                  <li>
                    <a href="#">
                      <img src={pinterest} alt="github" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={linkedIn} alt="linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={insta} alt="ingtagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="home__content-buttons">
                <button className="hire-red">
                  <a href="#contact">Hire Me</a>{" "}
                </button>
                <button>
                  <a href="#portfolio">Portfolio</a>{" "}
                </button>
              </div>
            </div>
          </Col>
          <Col id="image">
            <div className="home__image">
              <img src={me} alt="ME" />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
