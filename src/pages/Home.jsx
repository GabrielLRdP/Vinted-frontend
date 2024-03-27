import mainImg from "../assets/img/home-image.jpg";
import rippedEffect from "../assets/img/effet-dechire.svg";

const Home = () => {
  return (
    <main className="home">
      <section className="presentation">
        <img className="main-image" src={mainImg} alt="image de présentation" />
        <img className="effet" src={rippedEffect} alt="" />
        <div className="container">
          <div className="call-to-action">
            <h1>Prêt à faire du tri dans vos placards ?</h1>
            <button>commencer à vendre</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
