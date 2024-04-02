import mainImg from "../assets/img/home-image.jpg";
import rippedEffect from "../assets/img/effet-dechire.svg";
import axios from "axios";
import { unseState, useEffect, useState } from "react";
import OfferDetails from "../components/OfferHomePage";
import { useNavigate } from "react-router-dom";

const Home = ({ search, token }) => {
  const navigate = useNavigate();
  // Récupère les données des offres depuis l'API Vinted et les stocke dans la variable "datas"
  let datas;
  let [offerList, setOfferList] = useState([]);

  const fetchData = async (search) => {
    datas = await axios.get(
      `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`
    );
    setOfferList(datas.data.offers);
    console.log(search);
  };

  // Appelle la fonction fetchData() pour récupérer les données des offres lorsque le composant est monté
  useEffect(() => {
    fetchData(search);
  }, [search]);

  const displayOffer = offerList.map((element) => {
    return (
      <OfferDetails
        title={element.product_name}
        description={element.product_description}
        price={element.product_price}
        details={element.product_details}
        pictures={element.product_image}
        date={element.product_date}
        owner={element.owner}
        image={element.product_image}
        key={element._id}
        _id={element._id}
      />
    );
  });

  return (
    <main className="home">
      <section className="presentation">
        <img className="main-image" src={mainImg} alt="image de présentation" />
        <img className="effet" src={rippedEffect} alt="" />
        <div className="container">
          <div className="call-to-action">
            <h1>Prêt à faire du tri dans vos placards ?</h1>
            <button
              onClick={() => {
                navigate("/publish");
              }}
            >
              commencer à vendre
            </button>
          </div>
        </div>
      </section>
      {offerList.length > 0 ? (
        <section className="offers">
          <div className="container">{displayOffer}</div>
        </section>
      ) : (
        <p>Chargement</p>
      )}
    </main>
  );
};

export default Home;
