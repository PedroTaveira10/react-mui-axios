
import BooksForm from '../components/BooksForm';
import BooksTable from '../components/BooksTable';

import api from '../services/api';
import { useEffect, useState } from 'react';


const initialBookFormValue = {
  id: '',
  Nome: '',
  apelido: '',
  email: '',
  year: ''
}

function BooksPage({ setOpen, setErrorMessage }) {  
  const [books, setBooks] = useState([]);
  const [bookForm, setBookForm] = useState(initialBookFormValue);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getBooks();
  }, []);

  function getBooks() {
    api.get('/books')
      .then(res => setBooks(res.data))
      .catch(err => {
        console.log(err);
        setOpen(true);
      });
  }

  function deleteBook(book) {
    console.log(book);
    api.delete(`/books/${book.id}`)
      .then(() => getBooks())
      .catch(err => {
        console.log(err);
        setOpen(true);
      });
  }

  function createOrUpdateBook() {
    isEditing ? updateBook(bookForm) : createBook(bookForm);
  }

  function startEditing(book) {
    setBookForm({ ...book });
    setIsEditing(true);
  }

  function refreshPage() {
    getBooks();
    setBookForm(initialBookFormValue);
    setIsEditing(false);
  }

  function createBook(book) {
    if (!book.Nome || !book.apelido || !book.email || !book.year || !book.cpf || !book.cnpj) {
      setErrorMessage('Erro, preencha todos os campos!');
      setOpen(true);
      return;
    }

    api.post('/books', {...book, year: Number(book.year)})
      .then(() => {
        refreshPage();
      })
      .catch(err => {
        console.log(err);
        setOpen(true);
      });
  }

  function updateBook(book) {
    if (!book.Nome || !book.apelido || !book.email || !book.year || !book.cpf || !book.cnpj ) {
      setErrorMessage('Erro, preencha todos os campos!');
      setOpen(true);
      return;
    }

    api.put(`/books/${book.id}`, {...book, year: Number(book.year)})
      .then(() => {
        refreshPage();
      })
      .catch(err => {
        console.log(err);
        setOpen(true);
      });
  }

  function onValueChange(e) {
    setBookForm({ ...bookForm, [e.target.name]: e.target.value});
  }
  
  return (
    <>
      <BooksForm 
        bookForm={bookForm} 
        onValueChange={onValueChange} 
        createOrUpdateBook={createOrUpdateBook} 
        refreshPage={refreshPage}
        isEditing={isEditing} /> 
      <BooksTable 
        books={books} 
        startEditing={startEditing}
        deleteBook={deleteBook} />
    </>
  );
}

export default BooksPage;