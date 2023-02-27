import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import headerImg from "../../assets/img/astronauta4.png";
import styles from "./banner.module.css";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Fullstack developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  function tick() {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.banner} id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="" data-aos="fade-right">
              <span className={styles.tagline}>
                Bienvenidos a mi Portafolio
              </span>
              <h1>
                {"Hola, mi nombre es Quimey y soy "}
                <span className={styles.wrap}>{text}</span>
              </h1>
              <p>
                Mi objetivo principal es desarrollarme profesionalmente,
                evolucionar en mi sector, enriquecer y aportar mis
                conocimientos. Me destaco por saber trabajar en equipo,
                adaptarme a cambios para la resolución de problemas, saber
                escuchar e impulsar el trabajo individual y colectivo para poder
                alcanzar el objetivo en común.{" "}
              </p>
              <a href='mailto:qalopez2000@gmail.com'>
                <button>Conectemos</button>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="" data-aos="fade-left">
              <img
                className={styles.imgBanner}
                src={headerImg}
                alt="Headder Img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
