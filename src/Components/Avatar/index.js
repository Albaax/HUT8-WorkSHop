import '../../../src/App.css';

// props receive an object of Sidebar component

const Avatar = (props) => {
    return (
        <>
            <img className="image-avatar" alt={props.props.name} src={props.props.avatar}/>
            <h2 className="subtitle">{props.props.name}</h2>
            <p className="subinfo">{props.props.course}</p>
        </>
    )
}

export default Avatar;