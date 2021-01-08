import { Button, Card, Col, Container, Row } from "react-bootstrap";
import logo from "../images/logo.svg";
import PostCard from "../components/postcard";

function Home() {
  return (
    <div className="main">
      <Container>
        <h1 className="text-center">My blogspot</h1>
        <Row>
          <Col xs={12} className="mt-3">
            <PostCard title="Post1" description="A man could be at 2 places" />
          </Col>
          <Col xs={12} className="mt-3">
            <PostCard title="Post2" description="Emenenm" />
          </Col>
          <Col xs={12} className="mt-3">
            <PostCard title="test" description="sdjasidasj" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
