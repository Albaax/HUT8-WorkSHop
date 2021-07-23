import { useParams } from 'react-router-dom';
import '../../App.css';
import Activities from '../../Components/Activities';
import Resume from '../../Components/Resume';
import firstIcon from '../../_images/firstIcon.png';
import secondIcon from '../../_images/secondIcon.png';
import thirdIcon from '../../_images/thirdIcon.png';

const CourseScreen = (proprieties) => {
    let { course } = useParams();
    let i = 0;
    if (course.charAt(0) == 'A') {
        i = 1;
    }

    return (
        <div className="course-screen">
            <div className="class-info">
                <div className="class-info-1">
                    <h1 className="title--course">{ course }</h1>
                    <h3 className="title--class">Turma: {proprieties?.props[i]?.class }</h3>
                </div>
                <div className="class-info-2">
                    <div>
                        <img className="image--teacher" alt="teacher" src={proprieties?.props[i]?.teacher.avatar}   />
                    </div>
                    <div>
                        <h2 className="subtitle">{ proprieties?.props[i]?.teacher.name }</h2>
                        <h3 className="subinfo">Professor Responsável</h3>
                    </div>
                </div>
            </div>
            <div className="content-up">
                <Resume props={proprieties?.props[i]?.overview?.nextActivities} icon={secondIcon} title="Atividades Próximas"/>
                <Resume props={proprieties?.props[i]?.overview?.credits} icon={firstIcon} title="Créditos"/>
                <Resume props={proprieties?.props[i]?.overview?.enrolledStudents} icon={thirdIcon} title="Alunos matriculados"/>
            </div>
            <div className="conten-down">
                <h1 className="title--course">Próximas Atividades</h1>
                {/* <Activities props={proprieties?.props[i]?.nextActivities}/> */}
            </div>
        </div>
    )
}

export default CourseScreen;