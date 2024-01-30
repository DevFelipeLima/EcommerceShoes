import { Carousel, Row } from "react-bootstrap";

export function Home() {
  return (
    <>
      <Row>
        <Carousel style={{ textAlign: "center" }}>
          <Carousel.Item interval={3000}>
            <img
              style={{ height: "90vh", width: "70%", objectFit: "cover" }}
              src="/images/home1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: "#000" }}>Nova Coleção Chegando</h3>
              <p style={{ color: "#000", fontSize: 18 }}>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              style={{ height: "90vh", width: "70%", objectFit: "cover" }}
              src="/images/home2.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: "#000" }}>Para todos os estilos</h3>
              <p style={{ color: "#000", fontSize: 18 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              style={{ height: "90vh", width: "70%", objectFit: "cover" }}
              src="/images/home3.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: "#000" }}>Para usar em qualquer lugar</h3>
              <p style={{ color: "#000", fontSize: 18 }}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  );
}
