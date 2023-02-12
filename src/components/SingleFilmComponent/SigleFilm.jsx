import React from 'react'
import { Link } from 'react-router-dom'
import './SilgleFilm.css'

const SigleFilm = ({ element }) => {
    console.log("PELÍCULA ELEGIDA", element)
    return (
        <div className='single-film'>
            <section className='main-info'>
                <div>
                    <h3>{element.title}</h3>
                    <h4>Directed by</h4>
                    <h4><strong>{element.directors}</strong></h4>
                </div>
                <div>
                    <img src={element.image} />
                </div>
            </section>
            {/* <section className='details'>
                <p>{element.year} · {element.runtimeMins}</p>
                <Link><p> Trailer </p></Link>
            </section>
 */}


            <section className='description'>

            </section>

        </div>
    )
}

export default SigleFilm