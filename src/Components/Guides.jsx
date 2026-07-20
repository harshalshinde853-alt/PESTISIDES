import React from "react";
import "./Guides.css";
import CustomNavbar from "./Navbar";

const guides = [
  {
    id: 1,
    title: "How to Control Fruit Borers",
    date: "May 18, 2025",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600",
  },
  {
    id: 2,
    title: "Best Practices for Pest Management",
    date: "May 15, 2025",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600",
  },
  {
    id: 3,
    title: "Organic Solutions for Healthy Crops",
    date: "May 15, 2025",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600",
  },
  {
    id: 4,
    title: "Seasonal Pest Prevention Tips",
    date: "May 05, 2025",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=600",
  },
];

  function Guides() {
  return (
    <>
      <CustomNavbar />

      <div className="guide-section">
        <h1>Crop Protection Guides</h1>
        <div className="underline"></div>

        <div className="card-container">
          {guides.map((guide) => (
            <div className="card" key={guide.id}>
              <img src={guide.image} alt={guide.title} />
              <div className="card-body">
                <h3>{guide.title}</h3>
                <p>{guide.date}</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>

        <button className="view-btn">View All Guides</button>
      </div>
    </>
  );
}

export default Guides;