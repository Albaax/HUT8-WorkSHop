import Resume from '../../Components/Resume';
import firstIcon from '../../_images/firstIcon.png';
import secondIcon from '../../_images/secondIcon.png';
import thirdIcon from '../../_images/thirdIcon.png';

// receive user as parameter
const Dashboard = (proprieties) => {

    return (
        <div className="main-content">
            <h2 className="title--up">Resumo</h2>
            <div className="content-up">
                <Resume props={proprieties?.props?.overview?.enrolledCourses} icon={firstIcon} title="Cursos Matriculados"/>
                <Resume props={proprieties?.props?.overview?.nextActivities} icon={secondIcon} title="Próximas Atividades"/>
                <Resume props={proprieties?.props?.overview?.onlineStudents} icon={thirdIcon} title="Alunos Online"/>
            </div>
            <h2> Próximas Atividades</h2>
            <div className="content-down">

            </div>
        </div>
    )
}

export default Dashboard;