import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
