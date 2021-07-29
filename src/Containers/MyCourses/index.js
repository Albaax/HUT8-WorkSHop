import '../../../src/App.css';
import { useState } from 'react';
import Activities from '../../Components/Activities';
import { Route, useRouteMatch, Switch, useParams } from 'react-router-dom';
import CourseScreen from '../CourseScreen';

const MyCourses = (properties) => {
    const { url, path } = useRouteMatch();
    let { course } = useParams();
    const [routeCourse, setRouteCourse] = useState(true);
    const showCourse = () => setRouteCourse(!routeCourse);

    return (
        <div className="main-content">
            { routeCourse ? 
            <>
                <h1 className={`title--up title--down up`}>Meus cursos</h1>
                <div className="main-courses">
                    { properties.props.map( (course) => {
                        return(
                            <div onClick={showCourse} key={course.id} className="activities ">
                                <Activities props={course} urlProp={url} />
                            </div>
                        )
                    }) }
                        <div className="activities "></div>
                </div>
            </> : 
            <Switch>
                <Route path={`${path}/:course`} >
                    <CourseScreen props={properties.props} />
                </Route>
            </Switch>
            }
        </div>
    )
}

export default MyCourses;