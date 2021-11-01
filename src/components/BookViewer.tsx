import React from 'react'
import Book from './Book'

export default function BookViewer(
  props: { previousBook: () => void; 
    book: { title: string; author: string }; 
    nextBook: () => void }) {

  return (
      <div className='row row-spacer'>

        <div className='col-md-4'>
          <button onClick={() => {
            props.previousBook()
          }}>Previous Book</button>
        </div>

          <div className='col-md-4'>
            <Book book={props.book} />
          </div>
          
        <div className='col-md-4'>
          <button onClick={() => {
            props.nextBook()
          }}>Next Book</button>
        </div>

      </div>
  )
}
