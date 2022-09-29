import Container from 'react-bootstrap/Container'
import NavLink from 'react-bootstrap/esm/NavLink'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href='#home'>Anime List</Navbar.Brand>
                <Nav className='me-auto'>
                    <NavLink href='#home'>Home</NavLink>
                </Nav>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header