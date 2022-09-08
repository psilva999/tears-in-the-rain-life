import React from 'react'
import './Css/style.min.css'

import { years } from './Events/years'

function App() {
  window.addEventListener('load', years)

  return (
    <main>
      <h1>Tears in the Rain</h1>

      <ul></ul>
    </main>
  )
}

export default App
