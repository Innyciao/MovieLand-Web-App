import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './Search.svg';


// cc376021

const API_URL = "http://www.omdbapi.com?apikey=cc376021";

// const movie1 = {
//     "Title": "Panda! Go Panda!",
//     "Year": "1972",
//     "imdbID": "tt0069058",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZjdiMGYwMjgtNjdmZC00ZjdkLThhMjgtMjBhZTQzMzE5MGM2XkEyXkFqcGdeQXVyNzMwOTY2NTI@._V1_SX300.jpg"
// }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }


    useEffect(() => {
        searchMovies('spiderman');
    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='Search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                    ? (<div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                    ) : (
                        <div>
                            <h2>No movies found</h2>
                        </div>
                    )
            }


        </div>
    )
};

export default App;