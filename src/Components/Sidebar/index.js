import Avatar from "../Avatar";
import Options from "../Options";
import '../../App.css';

// proprieties receive an object of userData

const Sidebar = (proprieties) => {
    return (
        <div className="sidebar">
            <Avatar props={proprieties.props}/>
            <Options />
        </div>
    )
}

export default Sidebar;