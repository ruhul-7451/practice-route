import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from './components/Meals/Meals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Order from './components/Order/Order';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import MealDetails from './components/MealDetails/MealDetails';
import SearchBox from './components/SearchBox/SearchBox';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/search">
            <SearchBox />
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/meals">
            <Meals></Meals>
          </Route>
          <Route path="/meal/:mealId">
            <MealDetails></MealDetails>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
