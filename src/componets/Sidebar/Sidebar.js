import React, {useContext} from 'react';
import "./Sidebar.css"
import SidebarRow from "../SidebarRow/SidebarRow";
import {SidebarRowContext} from "../../context";
import SidebarRowProfile from "../SidebarRowProfile/SidebarRowProfle";
import {useStateValue} from "../../StateProvider/StateProvider";


export const Sidebar = props => {
    const [{ user }, dispatch] = useStateValue();
    const sidebar = useContext(SidebarRowContext);
    return (
        <div className='sidebar'>
            <SidebarRowProfile
                src={user.photoURL}
                title={user.displayName}
            />
            {
                !!sidebar.length && sidebar.map( ({ id, title, Icon }) => <SidebarRow title={title} icon={Icon} key={id}/> )
            }
        </div>
    );
};




