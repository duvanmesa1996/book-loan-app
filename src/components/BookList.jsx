import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
    setBooks(updatedBooks);
  };

  return (
    <div className="book-list">
      <h1>Lista de Libros</h1>
      {books.length === 0 ? (
        <p>No hay libros en la lista. Agrega uno nuevo.</p>
      ) : (
        <ul className="book-list">
          <li className="book-header">
            <span className="book-title">Título</span>
            <span className="book-author">Autor</span>
            <span className="book-genre">Género</span>
            <span className="book-date">Fecha</span>
            <span className="book-actions-header">Acciones</span>
          </li>
          {books.map((book) => (
            <li key={book.id} className="book-item">
              <span className="book-title">{book.name}</span>
              <span className="book-author">{book.author}</span>
              <span className="book-genre">{book.genre}</span>
              <span className="book-date">{book.date}</span>
              <div className="book-actions">
                <Link
                  className="btn btn-delete"
                  onClick={() => deleteBook(book.id)}
                >
                  Eliminar
                </Link>
                <Link className="btn-edit" to={`/edit/${book.id}`}>
                  Editar
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="btn-group-list">
        <Link to="/" className="btn-list">
          Inicio
        </Link>
        <Link to="/add" className="btn-list">
          Agregar Nuevo Libro
        </Link>
        <Link to="/loan" className="btn-list">
          Prestar Libro
        </Link>
        <Link to="/Loanlist" className="btn-list">
          Libros prestados
        </Link>
      </div>
    </div>
  );
}

export default BookList;
