import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App'

import './Css/style.min.css'
import Background from './background.jpg'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <img src={ Background }/>
    <App />
  </React.StrictMode>
)
