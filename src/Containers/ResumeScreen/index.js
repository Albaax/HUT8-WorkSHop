import Resume from '../../Components/Resume';

// receive user as parameter
const ResumeScreen = (proprieties) => {

    return (
        <div className="main-content">
            <h2>Resumo</h2>
            <Resume props={proprieties}/>
        </div>
    )
}

export default ResumeScreen;