import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter  } from "react-router-dom"
import { HomeProvider } from './context/home.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <BrowserRouter>    
      <HomeProvider>
          <App />
      </HomeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
