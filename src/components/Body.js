import RestroCard from "./RestroCard";
import ResList from "../Utils/ResList";
import { HERO_URL } from "../Utils/constant";
import { useState } from "react";

const Body = () => {
    const[list,setlist] = useState(ResList)
    console.log(list);
    

    return (
        <>
        <section className="hero-section">
            <div className="hero-content">
                <h1>Order Food Online from the Best Restaurants Near You</h1>
                <p>Delicious meals delivered to your doorstep, fast and fresh. Explore top restaurants and exclusive offers now!</p>
                <button className="hero-btn">Order Now</button>
            </div>
            <div className="hero-image">
                <img src= {HERO_URL} alt="Delicious Food" />
            </div>
        </section>
        <div className="filter-btn">
            <button className="filter" onClick={() => setlist(list.filter((res) => res.info.avgRating > 4.2))}>
                   
              Top Rated Restro </button>
        </div>

        <div className="restro-block">
            {list.map(({info}) => (
                <RestroCard key={info.id} {...info} deliveryTime={info.sla?.deliveryTime} />
            ))}
        </div>
        </>
    );
}
export default Body;