import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/footer";
import Header from "../components/header";
import logo from "../images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Container>
          <h1 className="text-center">My blogspot</h1>
          <Row>
            <Col xs={12} className="mt-3">
              <Card>
                <Card.Body>
                  <Card.Title className="bg-light">Post1</Card.Title>
                  <Card.Text>
                    A man is sharing love with his girlfriend
                  </Card.Text>
                  <Button variant="primary">View post</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} className="mt-3">
              <Card>
                <Card.Body>
                  <Card.Title className="bg-light">Post2</Card.Title>
                  <Card.Text>Spongebob is currently at Bikini Bottom</Card.Text>
                  <Button variant="primary">View post</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} className="mt-3">
              <Card>
                <Card.Body>
                  <Card.Title className="bg-light">Post3</Card.Title>
                  <Card.Text>The hash slinging slasher</Card.Text>
                  <Button variant="primary">View post</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
