import Card from 'react-bootstrap/Card';
import './Film.css'

const Film = ({ element }) => {
    console.log(element)
    //cuando clickes en cualquier punto de la peli debe llevarte a ella
    //style={{ display: 'flex' }}
    return (

        <Card style={{ width: '9rem', border: 'none' }}>
            <Card.Img variant="top" src={element.image} />
            <div className='rate'>
                <p>{element.imDbRating}</p>
            </div>
            <Card.Body >
                <Card.Title>{element.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Film