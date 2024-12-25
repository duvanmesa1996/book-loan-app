import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './index.css';

function LoanBook() {
  const [books, setBooks] = useState([]);
  const [loanData, setLoanData] = useState({
    bookId: "",
    user: "",
    loanDate: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  const handleLoan = (e) => {
    e.preventDefault();
    const loans = JSON.parse(localStorage.getItem("loans")) || [];
    loans.push(loanData);
    localStorage.setItem("loans", JSON.stringify(loans));
    navigate("/loanList");
  };

  return (
    <div className="loan-book">
      <h1>Registrar Préstamo</h1>
      <form onSubmit={handleLoan}>
        <label>
          Seleccionar Libro:
          <select
            value={loanData.bookId}
            onChange={(e) =>
              setLoanData({ ...loanData, bookId: e.target.value })
            }
            required
          >
            <option value="">--Seleccionar--</option>
            {books.map((book) => (
              <option key={book.id} value={book.name}>
                {book.name} - {book.author}
              </option>
            ))}
          </select>
        </label>
        <label>
          Usuario:
          <input
            type="text"
            value={loanData.user}
            onChange={(e) => setLoanData({ ...loanData, user: e.target.value })}
            required
          />
        </label>
        <label>
          Fecha de Préstamo:
          <input
            type="date"
            value={loanData.loanDate}
            onChange={(e) =>
              setLoanData({ ...loanData, loanDate: e.target.value })
            }
            required
          />
        </label>
        <button type="submit" className="btn-primary">Registrar Préstamo</button>
      </form>
      <div className="prestar_lib">
        <Link className="prestar" to="/booklist" >Ver Lista de Libros</Link>
        <Link className="prestar" to="/loanList" >Libros prestados</Link>
        <Link className="prestar"  to="/" >Inicio</Link>
      </div>
    </div>
  );
}

export default LoanBook;
