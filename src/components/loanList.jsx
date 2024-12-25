import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './index.css'; // Asegúrate de tener un archivo CSS específico

function LoanList() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const storedLoans = JSON.parse(localStorage.getItem("loans")) || [];
    setLoans(storedLoans);
  }, []);

  return (
    <div className="loan-list">
      <h1>Lista de Préstamos</h1>
      {loans.length === 0 ? (
        <p>No hay préstamos registrados.</p>
      ) : (
        <ul>
          {loans.map((loan, index) => (
            <li key={index}>
              Libro: {loan.bookId} - Usuario: {loan.user} - Fecha: {loan.loanDate}
            </li>
          ))}
        </ul>
      )}
      <div className="btn-group-loan">
        <Link to="/booklist" className="btn">Ver Lista de Libros</Link>
        <Link to="/loan" className="btn">Prestar Libro</Link>
        <Link to="/" className="btn">Inicio</Link>
      </div>
    </div>
  );
}

export default LoanList;
