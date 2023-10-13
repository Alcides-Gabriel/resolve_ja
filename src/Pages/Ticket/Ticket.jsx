import { useParams } from "react-router-dom";
import styles from "./Ticket.module.css";
import Container from "react-bootstrap/esm/Container";

const Ticket = () => {
  const ticketId = useParams().id;

  return (
    <>
      <main>
        <Container className="mt-5 bg-white p-5 shadow-sm rounded">
          <h1>Ticket {ticketId}</h1>
          <h3>ID: {ticketId}</h3>
        </Container>
      </main>
    </>
  );
};

export default Ticket;
