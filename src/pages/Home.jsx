import mainImg from "../assets/img/home-image.jpg";
import rippedEffect from "../assets/img/effet-dechire.svg";
import axios from "axios";
import { unseState, useEffect, useState } from "react";
import OfferDetails from "../components/OfferHomePage";
import { useNavigate } from "react-router-dom";

const Home = ({ search, values, priceAscending }) => {
  const navigate = useNavigate();
  // Récupère les données des offres depuis l'API Vinted et les stocke dans la variable "datas"
  let datas;
  let [offerList, setOfferList] = useState([]);
  let sort = "";

  const fetchData = async (search) => {
    priceAscending ? (sort = "price-desc") : (sort = "price-asc");

    datas = await axios.get(
      `https://site--backend--n5fkvp4ymxn4.code.run/offers?title=${search}&priceMin=${values[0]}&priceMax=${values[1]}&sort=${sort}`
    );
    setOfferList(datas.data);
    console.log(search);
  };

  // Appelle la fonction fetchData() pour récupérer les données des offres lorsque le composant est monté
  useEffect(() => {
    setTimeout(() => {
      fetchData(search);
    }, 500);
  }, [search, values, priceAscending]);

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
        <div className="effet" />
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
