import { useState } from "react";
import {LOGO_URL } from "../Utils/constant";

const Header = () =>{

    const [btn, setBtn] = useState("Login");
    return (

        <>
        <div id="nav-items">
            <div id="logo">
            <img src={LOGO_URL}></img>
            </div>
                <ul>
                    <li>Home</li>
                    <li>Restro</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            <div className="login-btn">
                <button className="login" onClick={() =>
                    setBtn(btn === "Login" ? "Logout" : "Login")
                }>{btn}</button>
            </div>

        </div>
        
        </>

    );
};
export default Header;