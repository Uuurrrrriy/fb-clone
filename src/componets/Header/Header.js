import React, {useContext} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css"
import {HeaderIconsContext, HeaderProfileIconsContext} from "../../context";
import { Avatar, IconButton } from '@material-ui/core'
import {useStateValue} from "../../StateProvider/StateProvider";

export const Header = (props) => {
    const [{ user }, dispatch] = useStateValue();
    const context = useContext(HeaderIconsContext);
    const profileIcons = useContext(HeaderProfileIconsContext);
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
                     alt="logo"
                />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder='Search Facebook' type="text"/>
                </div>
            </div>
            <div className="header__middle">
                    {
                        !!context.length  && context.map( ({ id, icon }) => (
                            <div className={`header__option ${ id === 1 && 'header__option--active'}`} key={id}>
                                {
                                    icon
                                }
                            </div>
                        ) )
                    }
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4> {user.displayName} </h4>
                </div>
                {
                    !!profileIcons.length && profileIcons.map( ({ id, icon }) => (
                        <IconButton key={id}>
                            {
                                icon
                            }
                        </IconButton>
                    ) )
                }
            </div>
        </div>
    );
}

