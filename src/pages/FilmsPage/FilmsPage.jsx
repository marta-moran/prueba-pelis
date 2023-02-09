import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleFilm from '../../components/SingleFilmComponent/SigleFilm'
import FilmsAxios from '../../services/films.service';

const FilmsPage = ({ element }) => {
    const { id } = useParams()
    const [film, setFilm] = useState({})

    useEffect(() => {
        FilmsAxios.getOneFilm(id)
            .then(film => console.log(film))
    }, [])

    return (
        <SingleFilm element={element}></SingleFilm>
    )


}

export default FilmsPage