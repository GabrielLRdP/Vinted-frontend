import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import logo from "../assets/img/logo.svg";
import Signup from "./Signup";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Header = ({ token, handleToken, search, setSearch }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [bodyClass, setBodyClass] = useState("");
  const [visibleSignup, setVisibleSignup] = useState(false);
  const [visibleLogin, setVisibleLogin] = useState(false);

  useEffect(() => {
    document.body.className = bodyClass;
  }, [bodyClass]);
  const handleClick = (func) => {
    func(true);
    setBodyClass("no-scroll");
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    if (location.pathname === "/publish" && !token) {
      handleClick(setVisibleLogin);
    }
  }, [location.pathname]);

  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <img src={logo} alt="Logo Vinted" />
          </Link>
          <input
            type="text"
            placeholder="Recherche des articles"
            value={search}
            onChange={handleSearchChange}
          />
          <div className="buttons">
            {token ? (
              <button
                className="login-out-button"
                onClick={() => {
                  handleToken(null);
                  navigate("/");
                }}
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
            <Link to="/publish">
              <button>Vends tes articles</button>
            </Link>
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
        setVisibleSignup={setVisibleSignup}
      />
    </>
  );
};

export default Header;
