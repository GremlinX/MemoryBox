import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Formulario from './Formulario';

function CustomModal({ onFormSubmit }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <app-modal>
      <div className="d-flex justify-content-center mb-3">
        <Button variant="primary" onClick={handleShow}>+ Adicionar Lembrança</Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Formulario onFormSubmit={onFormSubmit} onClose={handleClose}/>
      </Modal>
    </app-modal>
  );
}

export default CustomModal;