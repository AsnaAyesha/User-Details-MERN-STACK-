import {Link , NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">User Details</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li>
                            <NavLink className="nav-link" to="/">All Users</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/add">Add Users</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>  
    );
};

export default NavBar;