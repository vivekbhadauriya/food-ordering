import RestroCard from "./RestroCard";
// import ResList from "../Utils/ResList";
import { HERO_URL } from "../Utils/constant";
import { useEffect, useState } from "react";

const Body = () => {
    const [list, setList] = useState([]);
    const [search,setsearch] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57590&lng=77.33450&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGkf"
        );
        const data = await response.json();
        console.log("data fetched", data);
        let restaurants;
        for (const card of data?.data?.cards || []) {
            if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                restaurants = card.card.card.gridElements.infoWithStyle.restaurants;
                break;
            }
        }
        setList(restaurants || []);
    };
    return (
        <>
        <section className="hero-section">
            <div className="hero-content">
                <h1>Order Food Online from the Best Restaurants Near You</h1>
                <p>Delicious meals delivered to your doorstep, fast and fresh. Explore top restaurants and exclusive offers now!</p>
                <button className="hero-btn">Order Now</button>
            </div>
            <div className="hero-image">
                <img src={HERO_URL} alt="Delicious Food" />
            </div>
        </section>
        <div className="filter-btn">
            <div className="search">
                <input type="text" className="search-box" value={search} onChange={(e)=>{
                    setsearch(e.target.value);
                }}
                
                // On search it should update restro list and render the uI
                >
                
                </input>

                <button className="search-btn" onClick={() => {
                    setList(list.filter((res) =>
                        res.info.name.toLowerCase().includes(search.toLowerCase())
                    ));
                }}>
                    Search
                </button>
            </div>
            <button className="filter" onClick={() => setList(list.filter((res) => res.info.avgRating > 4.2))}>
                Top Rated Restro
            </button>
        </div>

        <div className="restro-block">
            {Array.isArray(list) && list.length > 0 ? (
                list.map(({ info }) => (
                    <RestroCard key={info.id} {...info} deliveryTime={info.sla?.deliveryTime} />
                ))
            ) : (
                <p>No restaurants found.</p>
            )}
        </div>
        </>
    );
}
export default Body;