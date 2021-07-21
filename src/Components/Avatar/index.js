import '../../../src/App.css';

// props receive an object of Sidebar component

const Avatar = (proprieties) => {
    return (
        <>
            <img className="image-avatar" alt={proprieties.props.name} src={proprieties.props.avatar}/>
            <h2 className="subtitle">{proprieties.props.name}</h2>
            <p className="subinfo">{proprieties.props.course}</p>
        </>
    )
}

export default Avatar;