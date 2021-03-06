import React, { useState } from 'react'
import TitleBar from './components/TitleBar';
import './App.css'
import BookViewer from './components/BookViewer';
import BookCreator from './components/BookCreator';

export default function App() {
  const [bookNumber, setBookNumber] = useState(0)
  const [books, setBooks] = useState([
    {title: 'Ready Player One', author: 'Ernest Cline'},
    {title: 'All The Light We Cannot See', author: 'Anthony Doerr'},
    {title: 'The First and Last Freedome', author: 'jiddy Krishnamurit'}
  ])

  const goToNextBook = () => {
    let tempBookNumber = bookNumber;
    tempBookNumber++
    if (tempBookNumber === books.length) {
      tempBookNumber = 0
    }
    setBookNumber(tempBookNumber)
  }

  const goToPreviousBook = () => {
    let tempBookNumber = bookNumber
    tempBookNumber--
    if (tempBookNumber < 0) {
      tempBookNumber = books.length - 1
    }
    setBookNumber(tempBookNumber)
  }

  const createBook = (newBook) => {
    setBooks([...books, newBook])
    setBookNumber(books.length)
  }

  return (
    <div className='container-fluid'>
      <TitleBar />
      <BookViewer 
        book={books[bookNumber]} 
        nextBook={goToNextBook}
        previousBook={goToPreviousBook}
      />
      <BookCreator  createNewBook={createBook} />

    </div>
  );
}

