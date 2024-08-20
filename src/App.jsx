import React from 'react'
import Home from './components/Home'
import Page from './components/Page'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <div className='Aplicacion'>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Page' element={<Page/>} />
    </Routes>


    </div>
  )
}

export default App
