import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from './memoria.module.css';
import Cartao from "./Cartao";
import CustomModal from "./Modal";

function Memoria() {
    const [cards, setCards] = useState([]);    

    useEffect(() => {
        const savedCards = localStorage.getItem('cards');
        if (savedCards) {
            setCards(JSON.parse(savedCards));
        }
    }, []);

    const handleFormSubmit = (data) => {
        const newCards = [...cards, data];
        setCards(newCards);
        localStorage.setItem('cards', JSON.stringify(newCards));
    };

    const handleDelete = (index) => {
        const filteredCards = cards.filter((_, i) => i !== index);
        setCards(filteredCards);
        localStorage.setItem('cards', JSON.stringify(filteredCards));
    };

    return (
        <div className={styles.memoriaContainer}>
            <Container fluid>
                <h1 className="text-center m-3">Lembranças</h1>
                <CustomModal onFormSubmit={handleFormSubmit} />
                <div className={styles.grid}>
                    {cards.map((card, index) => (
                        <Cartao
                            key={index}
                            creator={card.creator}
                            title={card.title}
                            comment={card.comment}
                            image={card.image}
                            onDelete={() => handleDelete(index)}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Memoria;
