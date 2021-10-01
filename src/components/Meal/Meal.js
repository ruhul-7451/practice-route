import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Meal = (props) => {
    const { name, image, description, id } = props;
    const history = useHistory();
    const handleMealDetails = () => {
        history.push(`/meal/${id}`)
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 200)}
                        </Card.Text>
                        <Card.Footer className="d-flex justify-content-between rounded">
                            <Link className="btn btn-warning" to={`/meal/${id}`}>Meal Details</Link>
                            <button className="btn btn-danger" onClick={handleMealDetails}>Click Handeler</button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default Meal;