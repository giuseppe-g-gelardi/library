import React from 'react'
import './styles/Book.css'

export default function Book(props) {
  console.log('from book ', props)
  // console.log('from book ', props.book.title)
  // console.log('from book ', props.book.author)
  return (
    <div className='book'>
      <div className='cover'>
        {/* <h1 className='title'>{props.book.title}</h1>
          <h4 className='author'>{props.book.author}</h4> */}
      </div>
    </div>
  )
}
