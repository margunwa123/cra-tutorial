import React from "react";
import { Card, Button } from "react-bootstrap";

function PostCard(props) {
  const title = props.title;
  const description = props.description;

  return (
    <Card>
      <Card.Body>
        <Card.Title className="bg-light">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">visit</Button>
      </Card.Body>
    </Card>
  );
}

export default PostCard;
