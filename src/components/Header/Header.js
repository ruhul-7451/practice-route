import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <Navbar bg="light px-3" expand="lg">
                <Navbar.Brand>Hungry Naki</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-between">
                    <Nav
                        className="mr-auto my-2 my-lg-0 me-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="btn btn-outline-primary" to="/home">Home</NavLink>
                        <NavLink className="btn btn-outline-primary mx-1" to="/meals">Meals</NavLink>
                        <NavLink className="btn btn-outline-primary" to="/order">Order</NavLink>
                        <NavLink className="btn btn-outline-primary mx-1" to="/search">SearchFood</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default Header;