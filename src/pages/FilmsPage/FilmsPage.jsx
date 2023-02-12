import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleFilm from '../../components/SingleFilmComponent/SigleFilm'
import FilmsAxios from '../../services/films.service';

const FilmsPage = () => {
    const { id } = useParams()
    const [film, setFilm] = useState({})

    useEffect(() => {
        FilmsAxios.getOneFilm(id)
            .then(selectedFilm => setFilm(selectedFilm))
    }, [])

    return (
        <SingleFilm element={film}></SingleFilm>
    )


}

export default FilmsPage