import { HERO_URL, LOGO_URL } from "../Utils/constant";

const Header = () =>{
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
                    <li>Help</li>
                </ul>

        </div>
        </>

    );
};
export default Header;