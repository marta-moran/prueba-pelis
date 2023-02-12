import { FilmsContext } from '../../context/films.context'
import { useContext } from 'react';
import Film from '../../components/FilmComponent.jsx/Film';
import { Link } from 'react-router-dom';

const FilmsContent = () => {
    const { films } = useContext(FilmsContext)

    let counter = 6

    return (
        <>
            <h2>Pelis más populares</h2>
            <div className='card-container'>
                {
                    films.items.map((film, index) => index < counter ? <Link key={index} to={`/films/${film.id}`}><Film element={film}></Film></Link> : null)

                }
            </div>
        </>
    )

}

export default FilmsContent