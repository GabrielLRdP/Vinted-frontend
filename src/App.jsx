import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [visibleSignup, setVisibleSignup] = useState(false);
  const [visibleLogin, setVisibleLogin] = useState(false);

  return (
    <>
      <Router>
        <Header
          setVisibleSignup={setVisibleSignup}
          setVisibleLogin={setVisibleLogin}
        />
        <Signup visible={visibleSignup} setVisibleSignup={setVisibleSignup} />
        <Login visible={visibleLogin} setVisibleLogin={setVisibleLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:id" element={<Offer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
