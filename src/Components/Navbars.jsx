import React, {useState,useEffect} from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '@restart/ui/esm/Button'

const Navbars = () => {
    const {loginWithRedirect, isAuthenticated, user ,logout } = useAuth0();
    const [textButton,setTextButton] = useState('Login')
    const [Name, SetName] = useState('')

    useEffect(() => {
        if(isAuthenticated){
            setTextButton('Logout')
            SetName(user.name)
        }else {
            setTextButton('Login')
            SetName('')
        }
    }, [isAuthenticated])

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <img className="Logo" src="https://e7.pngegg.com/pngimages/809/777/png-clipart-car-revathy-auto-parts-ford-motor-company-spare-part-advance-auto-parts-car-car-vehicle.png" alt="logo" />
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to='/'> <Nav.Link href="#home">Home</Nav.Link> </Link>
          <Nav.Link><Link to='/features'>Features</Link> </Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          {
              isAuthenticated ?
              <NavDropdown title={Name} id="navbarScrollingDropdown">
          <NavDropdown.Item ><Link to= "/dash">Dashboard</Link>Action</NavDropdown.Item>
          <NavDropdown.Item >Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            Something else here
          </NavDropdown.Item>
        </NavDropdown>:
        null


          }

        </Nav>
        </Container>
        {
            isAuthenticated ?
            <button
        onClick ={()=> logout({returnTo: window.location.origin})}
            className="btn btn-primary"> {textButton} </button>:
            <button
        onClick ={() => loginWithRedirect()}
            className="btn btn-primary">{textButton} </button>
        }
      </Navbar>
    )
}
export default Navbars
