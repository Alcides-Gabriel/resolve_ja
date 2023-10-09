import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import styles from "./OpenTicket.module.css";

const OpenTicket = () => {
  return (
    <>
      <main className={`${styles.main} m-0`}>
        <Container>
          <form
            className={`${styles.open_ticket_form} p-5 m-auto shadow-sm mt-5 rounded`}
          >
            <h1>Abra um chamado</h1>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira seu nome"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="exemplo@email.com"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Empresa</Form.Label>
              <Form.Select>
                <option value="">Selecione a sua empresa</option>
                <option value="1">BiriBank</option>
                <option value="2">Hospital Sua Saúde</option>
                <option value="3">Escola AprendaAqui</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Setor</Form.Label>
              <Form.Select>
                <option value="">Selecione o seu setor</option>
                <option value="financeiro">Financeiro</option>
                <option value="administrativo">Administrativo</option>
                <option value="ti">T.I</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descreva a ocorrência</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Descreva com detalhes a ocorrência"
              />
            </Form.Group>
            <div className="d-grid">
              <Button variant="primary">Abrir Chamado</Button>
            </div>
          </form>
        </Container>
      </main>
    </>
  );
};

export default OpenTicket;
