import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const signout = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        })
    }
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://images.hindustantimes.com/tech/img/2020/10/07/960x540/image_-_2020-10-07T080243.891_1602037981637_1602037988452.jpg" alt="" />
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon className="header__input__Caret" />
            </div>

            <div className="header__right">
                <IconButton>
                <AppsIcon />

                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signout} src={user?.photoUrl}/>
                
            </div>
            
        </div>
    )
}

export default Header
