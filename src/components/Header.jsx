import { useEffect, useState } from "react";
import logo from "../assets/img/logo.svg";

const Header = (props) => {
  const { setVisibleSignup } = props;

  const [bodyClass, setBodyClass] = useState("");

  useEffect(() => {
    document.body.className = bodyClass;
  }, [bodyClass]);
  const handleSignupClick = () => {
    setVisibleSignup(true);
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
              handleSignupClick();
            }}
          >
            S'inscrire
          </button>
          <button>Se connecter</button>
          <button>Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
