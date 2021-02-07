import React from 'react'
import './loading.css'
import {Col} from 'react-bootstrap'

const Loading = () => {
    return (
        <>
            <Col>
                <div className="d-flex flex-column align-items-center">
                    <h2>Cargando...</h2>
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </Col>
        </>
    )
}

export default Loading