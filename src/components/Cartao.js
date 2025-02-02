import { Card } from "react-bootstrap"
import style from './memoria.module.css'

function Cartao({ creator, title, comment, image }) {
    
    const defaultImageUrl = 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg';

    return (
        <div className="p-1"> 
            <app-cartao>
                <Card style={{ width: '18rem', color: 'black'}}>
                    <Card.Img className={style.cardImg} variant="top" src={image || defaultImageUrl} alt={title} />
                    <Card.Body>
                        <Card.Title className='text-center'>{title}</Card.Title>
                        <Card.Text className={style.overflowY}>{comment}</Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-center'>{creator}</Card.Footer>
                </Card>
            </app-cartao>
        </div>
    )
}

export default Cartao