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
                <th scope="col">Status</th>
                <th scope="col">ID</th>
                <th scope="col">Título</th>
                <th scope="col">Descrição</th>
                <th scope="col">Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <Badge bg="warning">Aberto</Badge>
                </th>
                <td scope="row">1</td>
                <td>
                  <a href="/ticket/1">Sem conexão</a>
                </td>
                <td>O wifi caiu.</td>
                <td>07/10/2023</td>
              </tr>
              <tr>
                <th scope="row">
                  <Badge bg="danger">Fechado</Badge>
                </th>
                <td scope="row">2</td>
                <td>
                  <a href="/ticket/2">Impressora sem tinta</a>
                </td>
                <td>Não há tintas na impressora.</td>
                <td>08/10/2023</td>
              </tr>
              <tr>
                <th scope="row">
                  <Badge bg="primary">Resondido</Badge>
                </th>
                <td scope="row">3</td>
                <td>
                  <a href="/ticket/3">PC não liga</a>
                </td>
                <td>
                  Ligamos na tomada e apertamos o botão de ligar, mas ele não dá
                  resposta.
                </td>
                <td>09/10/2023</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </main>
    </>
  );
};

export default ListTickets;
