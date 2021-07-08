import React from 'react';
import "./SidebarRow.css"

const SidebarRow = ({ title, icon }) => {
    return (
        <div className="sidebarRow">
            {
                icon
            }
            <h4>
                { title }
            </h4>
        </div>
    )
};

export default SidebarRow;
