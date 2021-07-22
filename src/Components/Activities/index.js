import '../../App.css';

const Activities = (properties) => {
    return (
        <div className="activities">
            <div className="image-course">
                <img alt={properties.props.course} src={properties.props.image} />
            </div>
            <div className="text-course">
                <p className="text-course--1">{  properties.props.type ||
                                                 properties.props.course }
                </p>
                <h3 className="text-course--2">{ properties.props.course ||
                                                 properties.props.title }
                </h3>
                <p className="text-course--3">{  properties.props.class ||
                                                 properties.props.deadline }    
                </p>
            </div>
        </div>
    )
}
export default Activities;