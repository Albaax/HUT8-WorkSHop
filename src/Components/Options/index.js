import '../../../src/App.css';
import { NavLink } from "react-router-dom";

const Options = () => {

    return (
            <ul className="options">
                <li><NavLink exact className="link" activeClassName="link-active" to="/">Dashboard</NavLink></li>
                <li><NavLink className="link" activeClassName="link-active" to="/mycourses">Meus cursos</NavLink></li>
            </ul>
    )
}

export default Options;