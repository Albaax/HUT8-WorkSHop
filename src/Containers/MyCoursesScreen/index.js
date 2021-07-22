import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import '../../../src/App.css';
import Activities from '../../Components/Activities';

const MyCourseScreen = (proprieties) => {
    return(
        <div className="main-content">
            <h2 className="title--up title--down">Meus cursos</h2>
            <div className="main-courses">
                { proprieties.props.map( (course) => {
                    return(
                        <Activities key={course.id} props={course} />
                    )
                }) }
                 <div className="activities"></div>
            </div>
        </div>
    )
}

export default MyCourseScreen;