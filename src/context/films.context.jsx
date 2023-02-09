import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const FilmsContext = createContext()

export const FilmsProvider = (props) => {
    const [films, setFilms] = useState([]);
    const [loadingFilms, setLoadingFilms] = useState(true);

    useEffect(() => {
        const fetchFilms = async () => {
            const response = await fetch('https://imdb-api.com/API/MostPopularMovies/k_0bm7384g');
            const data = await response.json();
            setFilms(data);
            setLoadingFilms(false);
        };

        fetchFilms();
    }, []);

    console.log(films)

    return (
        <FilmsContext.Provider value={{ films, loadingFilms }}>
            {loadingFilms ? <div>Loading...</div> : props.children}
        </FilmsContext.Provider>
    );
};


