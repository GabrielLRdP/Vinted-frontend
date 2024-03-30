import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const Login = (props) => {
  const { setVisibleLogin } = props;
  const [serverResponse, setServerResponse] = useState();
  const [inputUser, setInputUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let newInputUser = { ...inputUser };
    newInputUser[event.target.className] = event.target.value;
    setInputUser(newInputUser);
    console.log(newInputUser);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response;

    try {
      response = await axios.post(
        "https://site--backend--n5fkvp4ymxn4.code.run/user/login",
        inputUser
      );
      const token = response.data.infoLogded.token;
      Cookies.set("token", token, { expires: 10 });
      Cookies.get("token");
    } catch (error) {
      setServerResponse(
        error.response ? error.response.data.message : error.message
      );
    }

    if (response && response.status === 200) {
      setVisibleLogin(false);
    }
  };

  return props.visible ? (
    <div className="modal">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div
          className="go-back-button"
          onClick={() => {
            setVisibleLogin(false);
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
        <button>Connetez-vous</button>
        {serverResponse ? <p>{serverResponse}</p> : true}
      </form>
    </div>
  ) : (
    true
  );
};

export default Login;
