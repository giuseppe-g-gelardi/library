import React, { useState } from 'react'

export default function BookCreator(props) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const submit = (e) => {
    e.preventDefault()
    props.createNewBook({title, author})
    // props.createNewBook({title: title, author: author})
  }


  return (
    <form onSubmit={submit}>
      <label>Book Title</label>
      <input name='title' onChange={e => setTitle(e.target.value)} />

      <label>Author</label>
      <input name='author' onChange={e => setAuthor(e.target.value)} />

      <button type='submit'>Create Book</button>
    </form>
  )
}
