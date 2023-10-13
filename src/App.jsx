import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import OpenTicket from "./Pages/OpenTicket/OpenTicket";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./Pages/NotFound/NotFound";
import ListTickets from "./Pages/ListTickets/ListTickets";
import Ticket from "./Pages/Ticket/Ticket";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/open" element={<OpenTicket />} />
          <Route path="/tickets" element={<ListTickets />} />
          <Route path="/ticket/:id" element={<Ticket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
