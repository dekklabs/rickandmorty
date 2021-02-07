import React, { useContext, useState } from 'react'
import {
    Modal,
    Image,
    Button,
    Alert
} from 'react-bootstrap'
import { DataContext } from '../../utils/DataContext'
import './modalcontent.css'

const ModalContent = ({data, setCart}:any) => {

    const {cart} = useContext(DataContext)

    const [existeClass, setExisteClass] = useState(false)

    const {id, name, image, location : {name:description}} = data
    const price = name.charCodeAt(0)

    const handleOnSetCart = (id) => {
        const existe = cart.some(producto => producto.id === id)

        if (existe) {
            setExisteClass(true)
        } else {
            setCart([
                ...cart,
                data
            ])
            setExisteClass(false)
        }
    }

    console.log(existeClass)

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <Image src={image} className="mb-3" />
                    <p>{description}</p>
                    <p>Precio: <strong>S/ {price}</strong></p>
                    <Button 
                        variant="primary"
                        onClick={ () => handleOnSetCart(id)}
                    >Agregar</Button>

                    <Alert variant="danger" className={`${existeClass ? 'existe' : 'noexiste'} mt-2`}>
                        Este producto ya existe en el carrito
                    </Alert>
                </div>
            </Modal.Body>
        </>
    )
}

export default ModalContent