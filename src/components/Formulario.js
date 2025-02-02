import { useState } from 'react'
import { Button, Form, FloatingLabel } from "react-bootstrap"
import styles from './memoria.module.css'

function Formulario({ onFormSubmit, onClose }) {

    const [creator, setCreator] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [comment, setComment] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                console.log('Imagem carregada:', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const data = { creator, title, image, comment };
        
        onFormSubmit(data);
        
        setCreator("");
        setTitle("");
        setImage(null);
        setComment("");
        onClose();
    };
    
    return (
        <div className={styles.formContainer}>
            <h5 className="text-center text-dark">Informações</h5>
            <FloatingLabel className="mb-1" controlId="creator" label="Creator">
                <Form.Control 
                    type="text" 
                    placeholder="creator" 
                    value={creator}
                    onChange={(event) => setCreator(event.target.value)}
                />
            </FloatingLabel>
            <FloatingLabel className="mb-1" controlId="title" label="Title">
                <Form.Control 
                    type="text" 
                    placeholder="title" 
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </FloatingLabel>
            <FloatingLabel className="mb-1" controlId="Leave a comment here" label="Comment">
                <Form.Control 
                    as="textarea" 
                    style={{ height: '100px' }} 
                    type="text"
                    placeholder="comment"  
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                />
            </FloatingLabel>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Control 
                    type="file" 
                    onChange={handleImageChange}
                />
            </Form.Group>
            <div className="d-flex justify-content-between">
                <Button variant="outline-primary" onClick={handleSubmit}>Salvar</Button>
                <Button variant="outline-danger" onClick={onClose}>Cancelar</Button>
            </div>
        </div>
    );
}

export default Formulario;
