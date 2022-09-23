import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap"
import { FiHelpCircle } from "react-icons/fi";


function Infomodal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="text-center">
            <sup>
                <FiHelpCircle onClick={handleShow} style={{ "color": "blue", "height": "20px", "width": "20px" }} />
            </sup>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h4>{props.title}</h4>
                
                </Modal.Header>
                <Modal.Body>
                    <p>{props.text}</p>
                    <a href={props.link} className="">Meer informatie (bron)</a>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Infomodal