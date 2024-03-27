import logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="Logo Vinted" />
        <input type="text" placeholder="Recherche des articles" />
        <div className="buttons">
          <button>S'inscrire</button>
          <button>Se connecter</button>
          <button>Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
