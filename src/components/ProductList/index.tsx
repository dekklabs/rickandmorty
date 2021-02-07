import React, { useContext, useEffect, useState } from 'react'
import { Row } from "react-bootstrap";
import { DataContext } from '../../utils/DataContext';
import Loading from '../Loading';
import ProductItem from '../ProductItem';

const ProductList = ({setCart}:any) => {

    // const personajes = useContext(DataContext)
    const {personajes} = useContext(DataContext)

    return (
        <Row className="mt-4">
            {
                Object.entries(personajes).length !== 0
                    ?
                    personajes.map((character:any) => (
                        <ProductItem
                            key={character.id}
                            character={character}
                            setCart={setCart}
                        />
                    ))
                    :
                    <Loading />
            }
        </Row>
    )
}

export default ProductList

interface Producto {
    id: Number,
    name: String,
    price: Number
}