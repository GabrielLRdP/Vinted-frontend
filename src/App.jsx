import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Cookies from "js-cookie";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(Cookies.get("vinted-token") || null);
  const [search, setSearch] = useState("");
  const [values, setValues] = useState([0, 50]);
  const [priceAscending, setPriceAscending] = useState(false);

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
        <Header
          values={values}
          setValues={setValues}
          token={token}
          handleToken={handleToken}
          search={search}
          setSearch={setSearch}
          priceAscending={priceAscending}
          setPriceAscending={setPriceAscending}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                token={token}
                values={values}
                priceAscending={priceAscending}
              />
            }
          />
          <Route path="/offers/:id" element={<Offer />} />
          <Route path="/publish" element={<Publish token={token} />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
