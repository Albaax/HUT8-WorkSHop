import { NavLink } from 'react-router-dom';
import '../../App.css';

const Activities = (properties) => {
    const handleClick = (e) => {
        if(properties.props.hasOwnProperty('deadline') || properties?.props[0]?.hasOwnProperty('deadline')){
            e.preventDefault();
        } 
    }

    return (
        <div className="activities">
            <NavLink onClick={handleClick} to={`${properties.urlProp}/${properties.props.course}`}>
                <div className="image-course">
                    <img alt={properties.props.course} src={properties.props.image || 
                                                            properties?.props[0]?.image} />
                </div>
                <div className="text-course">
                    <p className="text-course--1">{ properties.props.type ||
                                                    properties.props.course ||
                                                    properties?.props[0].course }
                    </p>
                    <h3 className="text-course--2">{ properties.props.title ||
                                                     properties.props.course ||
                                                     properties?.props[0]?.title}
                    </h3>
                    <p className="text-course--3">{  properties.props.class ||
                                                    properties.props.deadline ||
                                                    properties?.props[0]?.deadline }    
                    </p>
                </div>
            </NavLink>
        </div>
    )
}
export default Activities;