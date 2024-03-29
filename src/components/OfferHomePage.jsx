import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const OfferDetails = (props) => {
  const {
    title,
    description,
    price,
    details,
    owner,
    pictures,
    image,
    date,
    _id,
  } = props;

  return (
    <Link to={"/offers/" + _id} className="offer-home">
      <div className="user-info">
        <img
          className="user-avatar"
          src={owner.account.avatar?.secure_url}
          alt="User avatar"
        ></img>
        <p className="username">{owner.account.username}</p>
      </div>
      <img
        className="product-image"
        src={image.secure_url}
        alt="Product image"
      />
      <p className="price">{price + " €"}</p>
      {details[1].TAILLE ? <p className="size">{details[1].TAILLE}</p> : true}
      {details[0].MARQUE ? <p className="brand">{details[0].MARQUE}</p> : true}
    </Link>
  );
};

export default OfferDetails;
