import { useEffect, useState } from "react";
import logo from "../assets/img/logo.svg";

const Header = (props) => {
  const { setVisibleSignup, setVisibleLogin } = props;

  const [bodyClass, setBodyClass] = useState("");

  useEffect(() => {
    document.body.className = bodyClass;
  }, [bodyClass]);
  const handleClick = (func) => {
    func(true);
    setBodyClass("no-scroll");
  };

  return (
    <header>
      <div className="container">
        <img src={logo} alt="Logo Vinted" />
        <input type="text" placeholder="Recherche des articles" />
        <div className="buttons">
          <button
            onClick={() => {
              handleClick(setVisibleSignup);
            }}
          >
            S'inscrire
          </button>
          <button
            onClick={() => {
              handleClick(setVisibleLogin);
            }}
          >
            Se connecter
          </button>
          <button>Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
