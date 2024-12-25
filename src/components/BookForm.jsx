import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";

function BookForm() {
  const [book, setBook] = useState({
    name: "",
    author: "",
    genre: "",
    date: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
      const bookToEdit = storedBooks.find((b) => b.id === id);
      if (bookToEdit) {
        setBook(bookToEdit);
      }
    }
  }, [id]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
      if (id) {
        const updatedBooks = storedBooks.map((b) =>
          b.id === id ? { ...b, ...book } : b
        );
        localStorage.setItem("books", JSON.stringify(updatedBooks));
      } else {
        const newBook = { ...book, id: Date.now().toString() };
        storedBooks.push(newBook);
        localStorage.setItem("books", JSON.stringify(storedBooks));
      }
      navigate("/booklist");
    },
    [book, id, navigate]
  );

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <h2>{id ? "Editar Libro" : "Agregar Nuevo Libro"}</h2>
      <label>
        Nombre:
        <input
          type="text"
          value={book.name}
          onChange={(e) => setBook({ ...book, name: e.target.value })}
          required
        />
      </label>
      <label>
        Autor:
        <input
          type="text"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          required
        />
      </label>
      <label>
        Género:
        <input
          type="text"
          value={book.genre}
          onChange={(e) => setBook({ ...book, genre: e.target.value })}
          required
        />
      </label>
      <label>
        Fecha de Préstamo:
        <input
          type="date"
          value={book.date}
          onChange={(e) => setBook({ ...book, date: e.target.value })}
          required
        />
      </label>
      <div className="form-buttons">
        <button type="submit" className="btn-agregar">
          {id ? "Actualizar" : "Agregar"}
        </button>
        <div className="btn-group">
          <Link to="/" className="btn">
            Inicio
          </Link>
          <Link to="/booklist" className="btn">
            Ver Lista de Libros
          </Link>

          <Link to="/loan" className="btn">
            Prestar Libro
          </Link>
          <Link to="/Loanlist" className="btn">
            Libros prestados
          </Link>
        </div>
      </div>
    </form>
  );
}

export default BookForm;
