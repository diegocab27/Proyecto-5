import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import Header from './components/Header.jsx'
import App from './components/App.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <Header/>
    <ErrorBoundary>
    <App/>
    </ErrorBoundary>
  </React.StrictMode>,
)
