import React, { useState } from "react";
import Modal from '../components/Modal'
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className=''>
            <button  onClick={() => setShowModal(true)}>Open Modal</button>
            <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                Hello from the modal!
            </Modal>
        </div>
    )
}