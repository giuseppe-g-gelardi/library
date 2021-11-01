import React from 'react'
import './styles/TitleBar.css'

export default function TitleBar() {
  return ( 
    <div className='row row-space'>
      <div className='col-md-12' style={{ padding: 0 }}>
        <div className='titlebar-nav'>
          <h1>dCC Library</h1>
        </div>
      </div>
    </div>
  )
}