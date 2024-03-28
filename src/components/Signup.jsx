import { useState } from "react";
import axios from "axios";

const Signup = (props) => {
  const [inputUser, setInputUser] = useState({
    username: "",
    email: "",
    password: "",
    newsletter: "off",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("");
  };

  const handleChange = (event) => {
    let newInputUser = { ...inputUser };
    console.log(event.target.value);
    event.target.className === "newsletter-check"
      ? (newInputUser.newsletter = event.target.value)
      : (newInputUser[event.target.className] = event.target.value);

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
            checked={inputUser.newsletter ? "on" : "off"}
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
