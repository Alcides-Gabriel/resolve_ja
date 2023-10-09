import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={`${styles.header} border border-bottom`}>
      <nav className={`container d-flex justify-content-between`}>
        <h1>ResolveJa</h1>
        <ul className={`${styles.menu} d-flex align-items-center m-0 gap-3`}>
          <li>
            <NavLink to="/open">Abrir Ticket</NavLink>
          </li>
          <li>
            <NavLink to="/tickets">Seus Tickets</NavLink>
          </li>
          <li>Sair</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
