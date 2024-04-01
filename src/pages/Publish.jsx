const Publish = () => {
  return (
    <main className="publish-page">
      <div className="container">
        <h1>Vends ton article</h1>
        <form className="publish-form" action="">
          <div className="publish-section-container publish-photo">
            <input type="file" />
          </div>
          <div className="publish-section-container">
            <div className="publish-element">
              <label htmlFor="title">Titre</label>
              <input
                name="title"
                type="text"
                placeholder="ex: Chemise Sézane verte"
              />
            </div>
            <div className="publish-element">
              <label htmlFor="description">Décris ton article</label>
              <input
                name="description"
                className="publish-description"
                type="textarea"
                placeholder="ex: Porté quelquefois, taille correctement"
              />
            </div>
          </div>
          <div className="publish-section-container">
            <div className="publish-element">
              <label htmlFor="marque">Marque</label>
              <input name="marque" type="text" placeholder="ex: Zara" />
            </div>
            <div className="publish-element">
              <label htmlFor="taille">Taille</label>
              <input name="taille" type="text" placeholder="ex: L/40/12" />
            </div>
            <div className="publish-element">
              <label htmlFor="couleur">Couleur</label>
              <input name="couleur" type="text" placeholder="ex Fushia" />
            </div>
            <div className="publish-element">
              <label htmlFor="etat">Etat</label>
              <input
                name="etat"
                type="text"
                placeholder="ex: Neuf avec Etiquette"
              />
            </div>
            <div className="publish-element">
              <label htmlFor="lieu">Lieu</label>
              <input name="lieu" type="text" placeholder="ex: Paris" />
            </div>
          </div>
          <div className="publish-section-container">
            <div className="publish-element">
              <label htmlFor="price">Price</label>
              <input name="price" type="text" placeholder="0,00€" />
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
            <button className="publish-button">Ajouter</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Publish;
