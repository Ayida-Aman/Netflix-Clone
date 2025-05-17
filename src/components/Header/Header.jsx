import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { MdArrowDropDownCircle } from "react-icons/md";
import NetflixLogo from '../../assets/NetflixLogoTransparent.png'
import './Header.css';
const Header = () => {
  return (
    <>
        <div className="header-outer-container">
            <div className="header-container">
                <div className="left-container">
                    <ul>
                        <li><img src={NetflixLogo} alt="" /></li>
                        <li>Home</li>
                        <li>Tv Shows</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>My List</li>
                        <li>Browse My Languages</li>
                    </ul>
                </div>
                <div className="right-container">
                    <ul>
                        <li><IoIosSearch /></li>
                        <li><IoIosNotifications /></li>
                        <li><RiAccountPinBoxFill /></li>
                        <li><MdArrowDropDownCircle /></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header