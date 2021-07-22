import '../../../src/App.css';

const Resume = (proprieties) => {
    let property = proprieties.props;
    if(proprieties.props < 10){
        property = `0${proprieties.props}`;
    }
    return (
        <div className="resume-box">
            <div className="text-content">
                <h2 className="title--number">{property}</h2>
                <p className="title--text">{proprieties.title}</p>        
            </div>
            <div className="icon-content">
                <div className="icon-space">
                    <img alt="icon" src={proprieties.icon}/>
                </div>
            </div>
        </div>
    );
}

export default Resume;

