import {Link} from "react-router-dom";
import './navigation.css';

function Navigation() {
    return (
        <ul>
            <li >
                <Link to="/newtask" className='menuLabel'> New task </Link>
            </li>
            <li>
                <Link to="/todo" className='menuLabel' >To Do</Link>
            </li>
            <li>
                <Link to="/done" className='menuLabel' >Done </Link>
            </li>
        </ul>
        
    )
}

export default Navigation;