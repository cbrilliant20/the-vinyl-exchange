import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="product-card">
      <Link className="card" to={`/products/${props._id}`}>
        <img className="product-card-image" src={props.imgURL} />
      </Link>
      <div className="product-card-text">
        <p className="product-card-artist">{props.artist}</p>
        <div className="product-card-album">{props.album}</div>
        <div className="product-card-tracks">{props.tracks}</div>
        <div className="product-card-genre">{props.genre}</div>
      </div>
    </div>
  );
};
export default Product;
