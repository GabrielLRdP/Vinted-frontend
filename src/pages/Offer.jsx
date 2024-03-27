import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Offer = () => {
  const { id } = useParams();

  const [offer, setOffer] = useState();

  const fetchData = async () => {
    const newOffer = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offer/" + id
    );
    setOffer(newOffer.data);
    console.log(offer);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return offer ? (
    <main>
      <img src={offer.product_image.secure_url} alt="" />
      <div className="offer-details"></div>
    </main>
  ) : (
    <p>chargement</p>
  );
};

export default Offer;
