import { useParams } from 'react-router-dom';
import '../../App.css';
import React, { useEffect, useState } from 'react';
import Activities from '../../Components/Activities';
import Resume from '../../Components/Resume';
import firstIcon from '../../_images/firstIcon.png';
import secondIcon from '../../_images/secondIcon.png';
import thirdIcon from '../../_images/thirdIcon.png';
import { getCourses } from '../../services/requests';

const CourseScreen = (properties) => {
    let { course } = useParams();
    const [ theCourse, setTheCourse] = useState([]);

    useEffect(() => {
        
        const getCourseDatas = async () => {
            try {
                const { data } = await getCourses()
                setTheCourse(data)
            } catch(err) {
                console.log(err)
          }
        }
  
        getCourseDatas();
      }, [])
    
    let i = 0;
    if (course === 'A') {
        i = 1;
    }
  
    return (
        <div className="course-screen">
            <div className="class-info">
                <div className="class-info-1">
                    <h1 className="title--course">{ course }</h1>
                    <h3 className="title--class">Turma: {properties?.props[i]?.class }</h3>
                </div>
                <div className="class-info-2">
                    <div>
                        <img className="image--teacher" alt="teacher" src={properties?.props[i]?.teacher.avatar}   />
                    </div>
                    <div>
                        <h2 className="subtitle">{ properties?.props[i]?.teacher.name }</h2>
                        <h3 className="subinfo">Professor Responsável</h3>
                    </div>
                </div>
            </div>
            <div className="content-up">
                <Resume props={properties?.props[i]?.overview?.nextActivities} icon={secondIcon} title="Atividades Próximas"/>
                <Resume props={properties?.props[i]?.overview?.credits} icon={firstIcon} title="Créditos"/>
                <Resume props={properties?.props[i]?.overview?.enrolledStudents} icon={thirdIcon} title="Alunos matriculados"/>
            </div>
            <h1 className="title--course">Próximas Atividades</h1>
            <div className="content-down">
                { theCourse[i]?.nextActivities?.map( activity => <Activities key={theCourse[i].id} props={activity}/> )}
                <div className="activities"></div>
                <div className="activities"></div>
            </div>
        </div>
    )
}

export default CourseScreen;