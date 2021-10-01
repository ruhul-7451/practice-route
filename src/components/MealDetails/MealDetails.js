import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MealCard from '../MealCard/MealCard';

const MealDetails = () => {
    const { mealId } = useParams();
    const [food, setFood] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFood(data.meals))
    }, [mealId]);
    return (
        <div>
            {
                food.map(showFood => <MealCard
                    key={showFood.idMeal}
                    name={showFood.strMeal}
                    category={showFood.strTags}
                    instructions={showFood.strInstructions}
                    image={showFood.strMealThumb}
                ></MealCard>)
            }
        </div >
    );
};

export default MealDetails;