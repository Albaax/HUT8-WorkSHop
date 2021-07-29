import { useState } from 'react';
import Avatar from "../Avatar";
import Options from "../Options";
import { AiOutlineMenu } from "react-icons/ai";
import '../../App.css';

// properties receive an object of userData

const Sidebar = (properties) => {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="icon"><AiOutlineMenu onClick={showSidebar} /></div>
            <div className={sidebar ? 'sidebar' : 'sidebar-opened'}>
                <Avatar props={properties.props}/>
                <Options />
            </div>
        </> 
    )
}

export default Sidebar;