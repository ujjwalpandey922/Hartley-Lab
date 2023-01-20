import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Home.css";
const Home = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const nav = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      nav("/login");
    }
  }, []);
  return (
    <div className="Home">
      <Navbar />
      <div className="homeContainer">
        {userInfo ? (
          <>
            <h1>Hi {userInfo.firstName + " " + userInfo.lastName}</h1>
            <p>Welcome to your Account....</p>
          </>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
