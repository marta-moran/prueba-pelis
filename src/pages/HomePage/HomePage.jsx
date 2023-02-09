import { FilmsContext } from '../../context/films.context'
import { SeriesContext } from '../../context/series.context'
import { useContext } from 'react';

import FilmsContent from '../../components/FilmContentComponent/ListFilms';
import SeriesContent from '../../components/SeriesContentComponent/ListSeries';

const HomePage = () => {

    const { loadingFilms } = useContext(FilmsContext)
    const { loadingSeries } = useContext(SeriesContext)


    return loadingFilms && loadingSeries ? (
        <div>Loading...</div>
    ) : (
        <>
            <FilmsContent></FilmsContent>
            <SeriesContent></SeriesContent>

        </>
    )
}

export default HomePage