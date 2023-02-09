import { SeriesContext } from '../../context/series.context'
import { useContext } from 'react';
import Film from '../../components/FilmComponent.jsx/Film';

const SeriesContent = () => {
    const { series } = useContext(SeriesContext)
    let counter = 6

    return (
        <>
            <h2 style={{ marginTop: '3em' }}>Series más populares</h2>
            <div className='card-container'>
                {
                    series.items.map((serie, index) => index < counter ? <Film key={index} element={serie}></Film> : null)

                }
            </div>
        </>
    )

}

export default SeriesContent