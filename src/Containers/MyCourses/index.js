import '../../../src/App.css';
import Activities from '../../Components/Activities';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import CourseScreen from '../CourseScreen';

const MyCourses = (proprieties) => {
    const { url, path } = useRouteMatch();
    let displayGone = "display--gone"
    return(
        <div className="main-content">
            <h1 className={`title--up title--down ${displayGone} `}>Meus cursos</h1>
            <div className="main-courses">
                { proprieties.props.map( (course) => {
                    return(
                        <Activities key={course.id} props={course} urlProp={url} />
                    )
                }) }
                 <div className="activities "></div>
            </div>
            <Switch>
                <Route path={`${path}/:course`} >
                    <CourseScreen props={proprieties.props} />
                </Route>
            </Switch>
        </div>
    )
}

export default MyCourses;