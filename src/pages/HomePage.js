import { Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Card>
        <Card.Header>Push day</Card.Header>
        <Card.Body>
            Current stats
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HomePage;
