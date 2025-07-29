import React from "react";
import ReactDOM from "react-dom/client";
import "/index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
// const heading= React.createElement("h1",{},"Hello User Welcome to Namaste React")



const Header = () =>{
    return (

        <>
        <div id="nav-items">
            <div id="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk50Ut-wJKwbca3BTPssDUl_fqnsEE_D2tcw&s"></img>
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

const Body = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Order Food Online from the Best Restaurants Near You</h1>
                <p>Delicious meals delivered to your doorstep, fast and fresh. Explore top restaurants and exclusive offers now!</p>
                <button className="hero-btn">Order Now</button>
            </div>
            <div className="hero-image">
                <img src="https://c4.wallpaperflare.com/wallpaper/984/944/941/burger-french-fries-hamburger-wallpaper-preview.jpg" alt="Delicious Food" />
            </div>
        </section>
    );
}

const Applayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    );
}
root.render(<Applayout />)