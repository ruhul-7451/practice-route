import React, { useEffect, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Meal from '../Meal/Meal';

const SearchBox = () => {
    const [searchText, setSearchText] = useState([]);
    const [searchMeal, setSearchMeal] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setSearchMeal(data.meals))
    }, [searchText]);
    const history = useHistory();
    if (searchMeal === null) {
        return (`${history.push(`/noresults`)}`);
    }

    const handleSearchField = event => {
        const searchTextValue = event.target.value;
        setSearchText(searchTextValue);
    }
    return (
        <div>
            <Form.Control onChange={handleSearchField} className="w-75 mx-auto my-3" type="text" placeholder="Search Food" />
            <div className="container mt-3">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        searchMeal.map(setMeals => <Meal
                            key={setMeals.idMeal}
                            id={setMeals.idMeal}
                            name={setMeals.strMeal}
                            image={setMeals.strMealThumb}
                            description={setMeals.strInstructions}></Meal>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default SearchBox;