import React from 'react'
import './styles/Book.css'

export default function Book(
  props: { book: { title: string; author: string } }) {

  return (
    <div className='book'>
      <div className='cover'>
        <h1 className='title'>{props.book.title}</h1>
          <h4 className='author'>{props.book.author}</h4>
      </div>
    </div>
  )
}
