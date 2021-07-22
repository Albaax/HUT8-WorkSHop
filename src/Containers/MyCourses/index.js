import '../../../src/App.css';
import Activities from '../../Components/Activities';
import { Link } from 'react-router-dom';

const MyCourses = (proprieties) => {
    return(
        <div className="main-content">
            <h2 className="title--up title--down">Meus cursos</h2>
            <div className="main-courses">
                { proprieties.props.map( (course) => {
                    return(
                        <Link key={course.id} to={`/mycourses/${course.course.substr(0, course.course.indexOf(' '))}}`}>
                            <Activities props={course} />
                        </Link>
                    )
                }) }
                 <div className="activities"></div>
            </div>
        </div>
    )
}

export default MyCourses;