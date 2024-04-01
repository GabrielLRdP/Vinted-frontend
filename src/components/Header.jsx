import { useEffect, useState } from "react";
import logo from "../assets/img/logo.svg";
import Signup from "./Signup";
import Login from "./Login";

const Header = ({ token, handleToken }) => {
  const [bodyClass, setBodyClass] = useState("");
  const [visibleSignup, setVisibleSignup] = useState(false);
  const [visibleLogin, setVisibleLogin] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);

  useEffect(() => {
    document.body.className = bodyClass;
  }, [bodyClass]);
  const handleClick = (func) => {
    func(true);
    setBodyClass("no-scroll");
  };

  return (
    <>
      <header>
        <div className="container">
          <img src={logo} alt="Logo Vinted" />
          <input type="text" placeholder="Recherche des articles" />
          <div className="buttons">
            {token ? (
              <button
                className="login-out-button"
                onClick={() => handleToken(null)}
              >
                Se Déconnecter
              </button>
            ) : (
              <>
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
              </>
            )}
            <button>Vends tes articles</button>
          </div>
        </div>
      </header>
      <Signup
        visible={visibleSignup}
        setVisibleSignup={setVisibleSignup}
        setBodyClass={setBodyClass}
        token={token}
        handleToken={handleToken}
      />
      <Login
        visible={visibleLogin}
        setVisibleLogin={setVisibleLogin}
        setBodyClass={setBodyClass}
        token={token}
        handleToken={handleToken}
      />
    </>
  );
};

export default Header;
