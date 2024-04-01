import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Offer = () => {
  const { id } = useParams();

  const [offer, setOffer] = useState();
  const [detailsDisplay, setDetailsDisplay] = useState();

  const fetchData = async () => {
    const newOffer = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offer/" + id
    );
    setOffer(newOffer.data);
    console.log(newOffer);
    const productDetails = newOffer.data.product_details;
    const newDetailsDisplay = productDetails.map((element, index) => {
      return (
        <div className="element-description" key={index}>
          <p className="key">{Object.keys(element)[0]}</p>
          <p className="element">{element[Object.keys(element)[0]]}</p>
        </div>
      );
    });
    setDetailsDisplay(newDetailsDisplay);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return offer ? (
    <main className="main-offer-page">
      <img src={offer.product_image.secure_url} alt="" />
      <div className="offer-details">
        <div className="top-details">
          <p className="offer-price">{`${offer.product_price} €`}</p>
          {/*  */}
          <p className="offer-condition">{detailsDisplay}</p>
        </div>
        <div className="bottom-details">
          <p className="offer-name">{offer.product_name}</p>
          <p className="offer-description">{offer.product_description}</p>
          <div className="owner-details">
            <img
              className="user-avatar"
              src={offer.owner.account.avatar?.secure_url}
              alt=""
            />
            <p className="Offer-username">{offer.owner.account.username}</p>
          </div>
        </div>
        <button className="button-acheter">Acheter</button>
      </div>
    </main>
  ) : (
    <p>chargement</p>
  );
};

export default Offer;
