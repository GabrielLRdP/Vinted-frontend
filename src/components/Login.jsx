import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const {
    setVisibleLogin,
    setVisibleSignup,
    setBodyClass,
    token,
    handleToken,
  } = props;
  const [serverResponse, setServerResponse] = useState("");
  const [inputUser, setInputUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let newInputUser = { ...inputUser };
    newInputUser[event.target.className] = event.target.value;
    setInputUser(newInputUser);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response;

    try {
      response = await axios.post(
        "https://site--backend--n5fkvp4ymxn4.code.run/user/login",
        inputUser
      );

      handleToken(response.data.token);
    } catch (error) {
      setServerResponse(error.response.data.message);
    }

    if (response && response.status === 200) {
      setVisibleLogin(false);
      setBodyClass("");
    }
  };

  return props.visible ? (
    <div className="modal">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div
          className="go-back-button"
          onClick={() => {
            setVisibleLogin(false);
            setBodyClass("");
            navigate("/");
          }}
        >
          Retour
        </div>
        <h2>Connectez-vous</h2>
        <input
          className="email"
          type="text"
          placeholder="Votre adresse mail"
          value={inputUser.email}
          onChange={handleChange}
        />
        <input
          className="password"
          type="Password"
          placeholder="Votre mot de passe"
          value={inputUser.password}
          onChange={handleChange}
        />
        <button>Connectez-vous</button>
        <p
          onClick={() => {
            setVisibleLogin(false);
            setVisibleSignup(true);
          }}
        >
          Pas de compte ? Cliquez ici pour vous inscrire
        </p>
        {serverResponse ? <p>{serverResponse}</p> : true}
      </form>
    </div>
  ) : (
    true
  );
};

export default Login;
