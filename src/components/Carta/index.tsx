import React, {useContext, useState} from 'react'
import './card.css'
import { 
    Card, 
    Button,
    Modal
} from "react-bootstrap";
import ModalContent from "../ModalContent";
import { DataContext } from "../../utils/DataContext";

const Carta = ({personaje:persona, setCart}:any) => {

    const {cart} = useContext(DataContext)

    const [show, setShow] = useState(false);

    const {id, name, image, location } = persona

    let price = 0
    if (name !== undefined) {
        price = name.charCodeAt(0)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOnCart = (id) => {
        const existe = cart.some(producto => producto.id === id)

        if (existe) {
            setShowExiste(true);
        } else {
            setCart([
                ...cart,
                persona
            ])
        }
    }

    // Modal existe
    const [showExiste, setShowExiste] = useState(false);

    const handleCloseExiste = () => setShowExiste(false);
    const handleShowExiste = () => setShowExiste(true);

    return (
        <>
            <Card 
                className="carta"
            >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {location?.description}
                    </Card.Text>
                    <Card.Text>
                        Price: S/ {price}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <Card.Text 
                            className="mb-0 vistaprevia"
                            onClick={handleShow}
                        >
                            Vista previa
                        </Card.Text>
                        <Button 
                            variant="primary"
                            onClick={() => handleOnCart(id)}
                        >Agregar</Button>
                    </div>
                </Card.Body>
            </Card>
            
            <Modal 
                show={show} 
                onHide={handleClose}
            >
                <ModalContent
                    data={persona}
                    setCart={setCart}
                />
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* SI un item ya existe en el carrito */}
            <Modal 
                show={showExiste} 
                onHide={handleCloseExiste}
            >
                <Modal.Body>
                    <div className="text-center">
                        <h2>No se puede agregar dos veces el mismo producto :)</h2>
                        <Button variant="danger" onClick={handleCloseExiste}>
                            Cerrar
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Carta