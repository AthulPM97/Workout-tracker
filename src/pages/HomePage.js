import { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getStats } from "../store/getStatsThunk";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getStats()
  }, [])

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
