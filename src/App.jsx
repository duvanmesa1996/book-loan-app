import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Home from "./components/Home";
import LoanBook from "./components/LoanBook";
import LoanList from "./components/loanList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/add" element={<BookForm />} />
        <Route path="/edit/:id" element={<BookForm />} />
        <Route path="/loan" element={<LoanBook />} />
        <Route path="/loanList" element={<LoanList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
