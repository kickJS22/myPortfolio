import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LanThContextProvider } from './Context/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanThContextProvider>
      <App />
    </LanThContextProvider>
  </React.StrictMode>,
)
