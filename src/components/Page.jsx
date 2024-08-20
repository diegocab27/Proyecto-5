import React, { useEffect, useState } from "react";


const Page = () => {
  const [animes, setAnime] = useState([]);
  const [genres, setGenre] = useState({});
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedAnime, setSelectAnime] = useState(null);



  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime')
      .then(response => response.json())
      .then(data => {
        const animes = data.data;
        setAnime(animes);
        groupByGenre(animes);
      });
  }, []);

  const groupByGenre = (animes) => {
    const grouped = animes.reduce((acc, anime) => {
      const genres = anime.genres[0].name;
      if (!acc[genres]) acc[genres] = [];
      acc[genres].push(anime);
      return acc;
    }, {});
    setGenre(grouped);
  };


  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    setSelectAnime(null);
  };

  const handleAnimeClick = (anime) => {
    setSelectAnime(anime);
  }

  return (


    <div>
      <div className="flex ml-5 my-10 ">
        {Object.keys(genres).map(genre => (
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-bg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" key={genre} onClick={() => handleGenreClick(genre)}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {genre}
            </span>
          </button>
        ))}
      </div>
      <div className="flex justify-auto space-x-40">
        {selectedGenre && (
          <div className="flex ml-6">
            <ul>
              {genres[selectedGenre].map(anime => (
                <li key={anime.mal_id}>
                  <button className="w-40 h-18 transition ease-in-out delay-5 hover:-translate-y-1 hover:scale-150 duration-200 shadow-lx m-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-400 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => handleAnimeClick(anime)}>
                    {anime.titles[0].title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        )}
        {selectedAnime && (
          <a
            href="#"
            className="flex fixed left-20 h-1/4 w-full max-w-2xl flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:h-64 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-48 md:h-full md:w-64 md:rounded-none md:rounded-s-lg"
              src={selectedAnime.images.jpg.large_image_url}
              alt={selectedAnime.title}
            />
            <div className="flex flex-col justify-between p-4 leading-normal h-full overflow-y-auto">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {selectedAnime.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-base">
                {selectedAnime.synopsis}
              </p>
            </div>
          </a>

        )}
      </div>
    </div>
  );
}


export default Page;
