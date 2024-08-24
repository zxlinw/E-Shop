import React from 'react'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser} from 'react-icons/fa';
import logo from '../assets/logo.png';
import {useSelector} from 'react-redux';

const Header = () => {
  const {cartItems} = useSelector((state) => state.cart);

  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/"><img width={50} src={logo} alt='E-Shop' /> E-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/cart"><FaShoppingCart/> Cart
                        {
                            cartItems.length > 0 && (
                                <Badge pill bg='success' style={{marginLeft:'5px'}}>
                                    {cartItems.reduce((acc, current) => acc + current.qty, 0)}
                                </Badge>
                            )
                        }</Nav.Link>
                        <Nav.Link href="/login"> <FaUser /> User</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header