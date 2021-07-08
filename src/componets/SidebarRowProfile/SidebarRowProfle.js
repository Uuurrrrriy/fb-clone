import React from 'react';
import {Avatar} from "@material-ui/core";
import "./SidebarRowProfile.css"

const SidebarRowProfile = ({ title, src }) => {
    return (
        <div className='sidebarRowProfile'>
            <Avatar src={src} />
            <h4>
                { title }
            </h4>
        </div>
    );
};

export default SidebarRowProfile;
