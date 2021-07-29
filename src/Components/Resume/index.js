import '../../../src/App.css';

const Resume = (properties) => {
    let property = properties.props;
    if(properties.props < 10){
        property = `0${properties.props}`;
    }
    
    return (
        <div className="resume-box">
            <div className="text-content">
                <h2 className="title--number">{property}</h2>
                <p className="title--text">{properties.title}</p>        
            </div>
            <div className="icon-content">
                <div className="icon-space">
                    <img alt="icon" src={properties.icon}/>
                </div>
            </div>
        </div>
    );
}

export default Resume;

