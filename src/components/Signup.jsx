import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const navigate = useNavigate();
  const { setVisibleSignup, setBodyClass, token, handleToken } = props;
  const [inputUser, setInputUser] = useState({
    username: "",
    email: "",
    password: "",
    newsletter: false,
  });
  const [serverResponse, setServerResponse] = useState();
  const [file, setFile] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response;
    const formData = new FormData();
    const keys = Object.keys(inputUser);
    keys.forEach((element) => {
      formData.append(element, inputUser[element]);
    });
    // formData.append();
    formData.append("picture", file);

    try {
      response = await axios.post(
        "https://site--backend--n5fkvp4ymxn4.code.run/user/signup",
        formData
      );
      handleToken(response.data.token);
    } catch (error) {
      setServerResponse(error.response.data.message);
    }

    if (response && response.status === 200) {
      setVisibleSignup(false);
      setBodyClass("");
    }
  };

  const handleChange = (event) => {
    let newInputUser = { ...inputUser };
    if (event.target.type === "checkbox") {
      newInputUser.newsletter = !newInputUser.newsletter;
      event.target.value = !event.target.value;
    } else {
      newInputUser[event.target.className] = event.target.value;
    }
    setInputUser(newInputUser);
  };
  return props.visible ? (
    <div className="modal">
      <form className="signup-form" action="" onSubmit={handleSubmit}>
        <h2>S'inscrire</h2>
        <div
          className="go-back-button"
          onClick={() => {
            setVisibleSignup(false);
            setBodyClass("");
            navigate("/");
          }}
        >
          Retour
        </div>
        <div className="user-inputs">
          <input
            className="username"
            type="text"
            placeholder="Nom d'utilisateur"
            value={inputUser.username}
            onChange={handleChange}
          />
          <input
            className="email"
            type="email"
            placeholder="Email"
            value={inputUser.email}
            onChange={handleChange}
          />
          <input
            className="password"
            type="password"
            placeholder="Mot de passe"
            value={inputUser.password}
            onChange={handleChange}
          />
          <input
            type="file"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />
        </div>
        <div className="newsletter-check">
          <input
            type="checkbox"
            checked={inputUser.newsletter}
            onChange={handleChange}
          />
          <p>s'inscrire à notre newsletter</p>
        </div>
        <p className="terms">
          En m'inscrivant, je confirme avoir lu et accepté les Termes &
          Conditions ...
        </p>
        <button type="submit" className="submit">
          Sinscrire
        </button>
        {serverResponse ? <p>{serverResponse}</p> : true}
      </form>
    </div>
  ) : (
    true
  );
};

export default Signup;
