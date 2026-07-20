import React from "react";
import "./About.css";
import farmer from "./assets/farmer.jpg";
import CustomNavbar from "./Components/Navbar";

function About() {
  return (
    <>
      <CustomNavbar />

      <section className="about-section">
        <div className="about-container">

          <div className="about-text">
            <h1>About PestiShop</h1>

            <p>
              PestiShop is your trusted partner in modern farming.
            </p>

            <p>
              We provide genuine crop protection products and expert guidance
              to help farmers grow better and healthier crops.
            </p>

            <div className="line"></div>

            <div className="stats">
              <div>
                <h2>0K+</h2>
                <span>Happy Farmers</span>
              </div>

              <div>
                <h2>0+</h2>
                <span>Products</span>
              </div>

              <div>
                <h2>0%</h2>
                <span>Genuine</span>
              </div>

              <div>
                <h2>24/7</h2>
                <span>Support</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img src={farmer} alt="Farmer" />
          </div>

        </div>
      </section>
    </>
  );
}

export default About;