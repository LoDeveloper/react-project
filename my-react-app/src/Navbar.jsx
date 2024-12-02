import {Link} from 'react-router-dom';
import './navbar.css';

function Navbar () {
    return <div>
            <nav class="navbar">
                <ul class="nav-links">
                    <li class="li"><Link to="/">Home</Link></li>
                    <li class="li"><Link to="/store">Store</Link></li>
                    <li class="li"><Link to="/about">About</Link></li>
                    <li class="li"><Link to="/color-picker">Color Picker</Link></li>
                    <li class="li"><Link to="/todo-list">To do List</Link></li>
                </ul>
            </nav>
        </div>
}

export default Navbar;