import React from 'react'
import { Col } from "react-bootstrap";
import Carta from '../Carta';

const ProductItem = (character:any) => {

    const {character:personaje, setCart} = character

    return (
        <>
            <Col className="mb-4 mr-1">
                <Carta
                    personaje={personaje}
                    setCart={setCart}
                />
            </Col>
        </>
    )
}

export default ProductItem