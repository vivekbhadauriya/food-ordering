import { CDN_URL } from "../Utils/constant";

const RestroCard = ({ name, cuisines, avgRating, costForTwo, cloudinaryImageId, deliveryTime }) => {
    return (
        <div className="card">
            <div className="restro-image">
                <img src={`${CDN_URL}${cloudinaryImageId}`} alt={name} />
            </div>
            <div className="card-content">
                <h3>{name}</h3>
                <h5>{avgRating}⭐</h5>
                <h5>{deliveryTime} mins</h5>
                <h5>{Array.isArray(cuisines) ? cuisines.join(", ") : ""}</h5>
                <h5>{costForTwo}</h5>
            </div>
        </div>
    );
}
export default RestroCard;