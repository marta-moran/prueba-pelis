import { useEffect } from 'react';
import { createContext, useState } from 'react';

const SeriesContext = createContext()

const SeriesProvider = (props) => {
    const [series, setSeries] = useState()

    const [loadingSeries, setLoadingSeries] = useState(true);

    useEffect(() => {
        const fetchSeries = async () => {
            const response = await fetch('https://imdb-api.com/API/MostPopularTVs/k_0bm7384g');
            const data = await response.json();
            setSeries(data);
            setLoadingSeries(false);
        };

        fetchSeries();
    }, []);

    console.log(series)

    return (
        <SeriesContext.Provider
            value={{ series, loadingSeries }}
        >
            {loadingSeries ? <div>Loading...</div> : props.children}
        </SeriesContext.Provider>
    );
}

export { SeriesProvider, SeriesContext }