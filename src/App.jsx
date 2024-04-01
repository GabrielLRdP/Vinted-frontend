import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Cookies from "js-cookie";
import Publish from "./pages/Publish";

function App() {
  const [token, setToken] = useState(Cookies.get("vinted-token") || null);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("vinted-token", token);
      setToken(token);
    } else {
      Cookies.remove("vinted-token");
      setToken(null);
    }
  };
  return (
    <>
      <Router>
        <Header token={token} handleToken={handleToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:id" element={<Offer />} />
          <Route path="/publish" element={<Publish token={token} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
