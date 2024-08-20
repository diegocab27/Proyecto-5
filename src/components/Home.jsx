import React from "react"
import { Link } from "react-router-dom"


function Home () {
return(

<div className="sticky top-0 backdrop-opacity-50 shadow-md z-50">
    <div className="flex justify-center mb-4  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
    <h1 className="flex justify-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-cyan-100 from-yellow-500">Todo Anime</span></h1>
    </div>
    <div className="flex items-center justify-center min-h-screen">
      <Link
        to="/Page"
        className="bg-blue-500 text-white py-4 px-6 text-xl rounded hover:bg-blue-600"
      >
        Animes por Genero
      </Link>
    </div>
 

</div>



);}

export default Home