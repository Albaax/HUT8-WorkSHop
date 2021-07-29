import '../../../src/App.css';

// props receive an object of Sidebar component

const Avatar = (properties) => {
    return (
        <>
            <img className="image-avatar" alt={properties.props.name} src={properties.props.avatar}/>
            <h2 className="subtitle">{properties.props.name}</h2>
            <p className="subinfo">{properties.props.course}</p>
        </>
    )
}

export default Avatar;