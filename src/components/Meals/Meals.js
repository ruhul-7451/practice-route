import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);
    // console.log(meals);
    return (
        <div className="container mt-3">
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    meals.map(meal => <Meal

                        key={meal.idMeal}
                        id={meal.idMeal}
                        name={meal.strMeal}
                        image={meal.strMealThumb}
                        description={meal.strInstructions}></Meal>)
                }
            </Row>
        </div >
    );
};

export default Meals;