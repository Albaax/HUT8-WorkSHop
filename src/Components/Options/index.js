import '../../../src/App.css';
import { Link } from "react-router-dom";

const Options = () => {
    return (
        <>
            <ul>
                <li className="opt1"><Link to="/">Dashboard</Link></li>
                <li><Link to="/containers/mycoursesscreen">Meus cursos</Link></li>
            </ul>
        </>
    )
}

export default Options;