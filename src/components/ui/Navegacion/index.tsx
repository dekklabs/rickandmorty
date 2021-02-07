import React, { useContext, useState } from 'react'
import {
    Container,
    Navbar, 
    Nav,
    NavDropdown,
    Badge,
    Button
} from 'react-bootstrap'
import './navegacion.css'
import { DataContext } from "../../../utils/DataContext";
import cardpng from '../../../cart.png'

const Navegacion = ({setCart}:any) => {

    const {cart} = useContext(DataContext)

    const total = cart.reduce((acc, key) => acc + key['name'].charCodeAt(0), 0);

    const handleDeleteItemCart = (id:any) => {
        const arrDelete = cart.filter(producto => producto['id'] !== id)
        setCart(arrDelete)
    }

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Tienda</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#link" className="enlace">
                            <img  
                                width="30"
                                height="30"
                                src={cardpng}
                            />
                            <Badge className="badgeitem" variant="secondary">{ cart.length }</Badge>
                        </Nav.Link>
                       <NavDropdown title="Tienda" id="basic-nav-dropdown">
                            <ul className="cartlist pr-3">
                                {
                                    Object.entries(cart).length !== 0
                                        ? 
                                            cart.map(({ id, name, image }, index) => (
                                                <li 
                                                    className="d-flex align-items-center justify-content-between"
                                                    key={index}
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <img 
                                                            width="40"
                                                            height="40"
                                                            src={image} 
                                                            alt="wq"
                                                        />
                                                        <p className="mb-0">{name}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="mb-0 mr-2 price">Cantidad: <strong>1</strong></p>
                                                        <Button 
                                                            variant="danger"
                                                            onClick={() => handleDeleteItemCart(id)}
                                                        >X</Button>
                                                    </div>
                                                </li>
                                            ))
                                        :
                                            <p>NO HAY ITEMS</p>
                                }
                            </ul>
                            <NavDropdown.Divider />
                            <div className="pr-3 d-flex justify-content-end align-items-center">
                                <p className="mb-0 mr-3">Total:</p>
                                <p className="mb-0">S/ <strong>{total}</strong></p>
                            </div>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Navegacion