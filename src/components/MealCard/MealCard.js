import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MealCard = (props) => {
    const { name, category, instructions, image } = props
    return (
        <div>
            <Card border="primary" style={{ width: '50rem' }} className="mx-auto mt-5">
                <Card.Header>{category}</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title> <hr />
                    <Card.Img variant="top" src={image} />
                    <Card.Title>Instructions</Card.Title>
                    <Card.Text>
                        {instructions}
                    </Card.Text>
                    <Link className="btn btn-warning" to={`/order`}>Order Food</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MealCard;