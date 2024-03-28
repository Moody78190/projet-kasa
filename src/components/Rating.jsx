import starRed from "../Assets/images/Star_active.png";
import starEmpty from "../Assets/images/Star_inactive.png";

const Rating = ({ rating }) => (
  <div className="stars">
    {[...Array(5)].map((item, index) => (
      <img
        className="star"
        key={`star-${index}`}
        src={index <= rating - 1 ? starRed : starEmpty}
        alt={`étoile n°${index + 1}`}
      />
    ))}
  </div>
);

export default Rating;
