import { useState } from "react";
import { LOGO_URL } from "../utilis/constants";
import { Link } from "react-router-dom";


const Header = ( )=> {

const [LoginBtn, SetLogoutBtn] = useState("Login");

    return (
            <div className="header">
                    <div className="logoContainer">
                            <img src={LOGO_URL} />
                    </div>
                    <div className="nav-items">
                            <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li>Cart</li>
                                    <div className="lgn_btn">
                                        <button className="checkIN_btn"
                                        onClick={() => { 
                                            SetLogoutBtn("Logout");
                                        }}
                                        >{LoginBtn}</button>
                                    </div>
                            </ul>
                    </div>
            </div>
    )
};

export default Header;