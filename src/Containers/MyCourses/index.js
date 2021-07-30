import '../../../src/App.css';
import Activities from '../../Components/Activities';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import CourseScreen from '../CourseScreen';

const MyCourses = (properties) => {
    const { url, path } = useRouteMatch();

    return (
        <div className="main-content">
            <Switch>
                <Route path={`${path}/:course`} >
                    <CourseScreen props={properties.props} />
                </Route>
                <Route path={`${path}/`} exact >
                    <h1 className={`title--up title--down up`}>Meus cursos</h1>
                    <div className="main-courses">
                        { properties?.props.map( (course) => {
                            return(
                                <div key={course.id} className="activities">
                                    <Activities props={course} urlProp={url} />
                                </div>
                            )
                        }) }
                            <div className="activities "></div>
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

export default MyCourses;