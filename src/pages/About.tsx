import { Card, Col, Row } from "react-bootstrap";
import AboutList from "../data/aboutInfo.json";

export function About() {
  return (
    <>
      <div
        style={{
          marginBottom: 32,
          fontSize: 12,
          textAlign: "center",
        }}
      >
        <img
          src="/images/capa.jpg"
          alt=""
          style={{ width: "100%", height: 350, marginBottom: 8 }}
        />
        <span style={{ fontSize: 16 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {AboutList.map((item) => (
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-1">
                  <h5 className="fs-4">{item.title}</h5>
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={item.image}
                  height="200px"
                  style={{ objectFit: "cover" }}
                />
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
