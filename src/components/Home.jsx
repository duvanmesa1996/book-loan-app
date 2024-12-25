import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBook, FaList, FaPlusCircle, FaClipboardList, FaMoon, FaSun } from 'react-icons/fa';
import './index.css';

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <motion.div
      className={`home-container ${darkMode ? 'dark' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className="home-header">
        <h1 className="home-title">Biblioteca ABC</h1>
        <button className="theme-toggle-button" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>
      <motion.p
        className="home-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Bienvenido a tu biblioteca digital. Administra tus libros de forma rápida y moderna.
      </motion.p>
      <div className="home-button-container">
        <motion.div
          className="home-button-wrapper"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Link to="/add">
            <button className="home-button">
              <FaPlusCircle /> Agregar Nuevo Libro
            </button>
          </Link>
          <Link to="/booklist">
            <button className="home-button">
              <FaList /> Ver Lista de Libros
            </button>
          </Link>
          <Link to="/loan">
            <button className="home-button">
              <FaBook /> Prestar Libros
            </button>
          </Link>
          <Link to="/Loanlist">
            <button className="home-button">
              <FaClipboardList /> Listar Libros Prestados
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
