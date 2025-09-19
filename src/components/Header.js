import { useState } from "react";
import {LOGO_URL } from "../Utils/constant";
import { Link } from "react-router";

const Header = () =>{

    const [btn, setBtn] = useState("Login");
    return (

        <>
        <div id="nav-items">
            <div id="logo">
            <img src={LOGO_URL}></img>
            </div>
                <ul>
                    <li> <Link to={"/"}>Home</Link></li>
                    <li> <Link to={"/Restro"}>Restro</Link></li>
                    <li><Link to={"/aboutus"}>About</Link></li>
                    <li> <Link to={"/contactus"}>Contact Us</Link></li>
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