import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
const Home = () => {
  const navigate = useNavigate();
  const handlePage = (event) => {
    if (event.key === "Enter") {
      console.log(event.key);
      navigate("/dashboard");
    }
  };

  return (
    <div className="app-container">
      <div>LANDING PAGE</div>
      <input
        type="text"
        placeholder="Enter Your Name?"
        onKeyPress={handlePage}
      />
    </div>
  );
};

export default Home;
