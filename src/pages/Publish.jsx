import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState({});
  const [inputUser, setInputUser] = useState({
    title: "",
    description: "",
    price: "",
    condition: "",
    city: "",
    brand: "",
    size: "",
    color: "",
  });

  const handleChange = (event) => {
    const newInputUser = { ...inputUser };
    newInputUser[event.target.name] = event.target.value;
    setInputUser(newInputUser);
  };

  const handleSubmit = async (event) => {
    console.log(token);
    event.preventDefault();
    const formData = new FormData();
    const keys = Object.keys(inputUser);
    keys.forEach((element) => {
      formData.append(element, inputUser[element]);
    });
    // formData.append();
    formData.append("picture", file);

    const reponse = await axios.post(
      "https://site--backend--n5fkvp4ymxn4.code.run/offer/publish",
      formData,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    navigate("/");
  };
  return (
    <main className="publish-page">
      <div className="container">
        <h1>Vends ton article</h1>
        <form className="publish-form" action="" onSubmit={handleSubmit}>
          <div className="publish-section-container publish-photo">
            <input
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
          </div>
          <div className="publish-section-container">
            <div className="publish-element">
              <label htmlFor="title">Titre</label>
              <input
                name="title"
                type="text"
                placeholder="ex: Chemise Sézane verte"
                value={inputUser.title}
                onChange={handleChange}
              />
            </div>
            <div className="publish-element">
              <label htmlFor="description">Décris ton article</label>
              <textarea
                name="description"
                className="publish-description"
                placeholder="ex: Porté quelquefois, taille correctement"
                value={inputUser.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="publish-section-container">
            <div className="publish-element">
              <label htmlFor="brand">Marque</label>
              <input
                name="brand"
                type="text"
                placeholder="ex: Zara"
                value={inputUser.brand}
                onChange={handleChange}
              />
            </div>
            <div className="publish-element">
              <label htmlFor="size">Taille</label>
              <input
                name="size"
                type="text"
                placeholder="ex: L/40/12"
                value={inputUser.size}
                onChange={handleChange}
              />
            </div>
            <div className="publish-element">
              <label htmlFor="color">Couleur</label>
              <input
                name="color"
                type="text"
                placeholder="ex Fushia"
                value={inputUser.color}
                onChange={handleChange}
              />
            </div>
            <div className="publish-element">
              <label htmlFor="condition">Etat</label>
              <input
                name="condition"
                type="text"
                placeholder="ex: Neuf avec Etiquette"
                value={inputUser.condition}
                onChange={handleChange}
              />
            </div>
            <div className="publish-element">
              <label htmlFor="city">Lieu</label>
              <input
                name="city"
                type="text"
                placeholder="ex: Paris"
                value={inputUser.city}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="publish-section-container">
            <div className="publish-element">
              <label htmlFor="price">Price</label>
              <input
                name="price"
                type="text"
                placeholder="0,00€"
                value={inputUser.price}
                onChange={handleChange}
              />
            </div>
            <div className="publish-element">
              <div></div>
              <div className="want-exchanges">
                <input name="want-exchanges" type="checkbox" />
                <label htmlFor="want-exchanges">
                  Je suis intéressé par les échanges
                </label>
              </div>
            </div>
          </div>
          <div className="publish-button-container">
            <button type="submit" className="publish-button">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Publish;
