import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Filming</Navbar.Brand>
                    <Nav className="me-auto nav">
                        <Link to="/">Home</Link>
                        <Link to="/films">Films</Link>
                        <Link to="/series">Series</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header