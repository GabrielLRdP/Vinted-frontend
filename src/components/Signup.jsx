import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = (props) => {
  const [inputUser, setInputUser] = useState({
    username: "",
    email: "",
    password: "",
    newsletter: false,
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://site--backend--n5fkvp4ymxn4.code.run/user/signup",
      inputUser
    );

    const token = response.data.infoLogded.token;
    console.log(token);
    Cookies.set("token", token, { expires: 10 });
    Cookies.get("token");
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
    console.log(newInputUser);
  };
  return props.visible ? (
    <div className="modal">
      <form className="signup-form" action="" onSubmit={handleSubmit}>
        <h2>S'inscrire</h2>
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
        <button className="submit">Sinscrire</button>
      </form>
    </div>
  ) : (
    true
  );
};

export default Signup;
