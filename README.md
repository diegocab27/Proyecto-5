![banner](https://github.com/diegocab27/proyecto1/assets/162330383/d1251c1c-916c-4b7c-b57b-cab573e44281)

# PROYECTO 5: Aplicación Web con React

El objetivo principal de este proyecto es construir una aplicacion Web con React que consumirá datos de una API pública. Los datos que se obtengan de la API se mostrarán en una interfaz de usuario.

## Autor
- Diego Cabrera Carrasco  [@diegocab27](https://www.github.com/diegocab27)

## Planteamiento

Construir una aplicación Web con React y utilizando el framwork de vite que consume datos de una API publica de Anime los cuales se administran para mostrarse por genero en una lista y al seleccionar un Anime este mostrara la imagen y una descripcion de este.

## Instalacion 

Para instalar y ejecutar el proyecto realizamos los siguientes comandos

```
  npm install 
  npm run dev
```
    

#### Uso del proyecto

- La pagina principal muestra el titulo del proyecto junto en boton para ver los generos.



- Luego se muestran todos los generos y se selecciona uno para mostrar el listado.



- En el listado se puede seleccionar alguno para ver su imagen y descripcion.




#### App

```
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


```

