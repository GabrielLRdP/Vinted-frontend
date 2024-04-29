import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";
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
import Slider from "./Slider.jsx";
import { useNavigate } from "react-router-dom";

const Header = ({
  token,
  handleToken,
  search,
  setSearch,
  values,
  setValues,
  priceAscending,
  setPriceAscending,
}) => {
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
          <div className="research">
            <div className="searchbar-container">
              <FontAwesomeIcon icon={faSearch} size="1x" color="#979797" />
              <input
                type="text"
                placeholder="Recherche des articles"
                value={search}
                onChange={handleSearchChange}
              />
            </div>
            <div className="filters">
              <label className="price-filter">
                <span>Trier par prix:</span>
                <Switch
                  onChange={() => {
                    setPriceAscending(!priceAscending);
                  }}
                  checked={priceAscending}
                  onColor="#2CB1BA"
                  offColor="#2CB1BA"
                  onHandleColor="#ebedee"
                  offHandleColor="#ebedee"
                  height={20}
                  width={40}
                  handleDiameter={22}
                  checkedIcon={null}
                  uncheckedIcon={null}
                  checkedHandleIcon={
                    <div className="switchIconContainer">
                      <FontAwesomeIcon
                        icon={faSortDown}
                        size="1x"
                        color="black"
                      />
                    </div>
                  }
                  uncheckedHandleIcon={
                    <div className="switchIconContainer up">
                      <FontAwesomeIcon
                        icon={faSortUp}
                        size="1x"
                        color="black"
                      />
                    </div>
                  }
                />
              </label>
              <div className="slider-container">
                <Slider values={values} setValues={setValues} />
              </div>
            </div>
          </div>
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
