import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

import styles from "./ListTickets.module.css";

const ListTickets = () => {
  return (
    <>
      <main>
        <Container className={`${styles.list_area} p-5 mt-5 rounded shadow-sm`}>
          <h1>Seus Tickets</h1>
          <Table hover className="table mt-5">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Data</th>
                <th scope="col">Status</th>
                <th scope="col">Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>07/10/2023</td>
                <td>
                  <Badge bg="warning">Aberto</Badge>
                </td>
                <td>Impressora parou de funcionar.</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>07/10/2023</td>
                <td>
                  <Badge bg="danger">Fechado</Badge>
                </td>
                <td>Computador não liga.</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>07/10/2023</td>
                <td>
                  <Badge bg="danger">Fechado</Badge>
                </td>
                <td>Wifi caiu.</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </main>
    </>
  );
};

export default ListTickets;
