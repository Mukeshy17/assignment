import React, { useState } from "react";
import "./RightSection.css";
import Card from "./Card";
import earning from "../assets/investment.png";
import orders from "../assets/order.png";
import balance from "../assets/balance.png";
import sales from "../assets/purchases.png";
import progress from "../assets/work-in-progress.png";
import nature from "../assets/lake-with-plants.jpg";
import nature1 from "../assets/natural-landscape.jpg";
import bar from "../assets/bar1.gif";

function RightSection() {
  const [search1, setSearch1] = useState("");
  const str =">";
  return (
    <>
      <div className="right-section">
        <div className="cards">
          <Card
            image={earning}
            title="Earning"
            cost="$198k"
            variable="37% this month"
          />
          <Card
            image={orders}
            title="Orders"
            cost="$2.4k"
            variable="2% this month"
          />
          <Card
            image={balance}
            title="Balance"
            cost="$2.4k"
            variable="2% this month"
          />
          <Card
            image={sales}
            title="Total Sales"
            cost="$89k"
            variable="11% this week"
          />
        </div>
        <div className="cards">
          <div className="card1">
            <div className="card13">
            <div className="card12">
              <h4>Overview</h4>
              <p>Monthly Earning</p>
            </div>
            <button>Quarterly ˅</button>
            </div>
            <img src={bar} alt="Card Image" />
          </div>
          
          <div className="card2">
            <h4>Customers</h4>
            <p>Customers that buy Products</p>
            <img src={progress} alt="Card Image" />
          </div>
        </div>
        <div className="card3">
          <div className="text1">
            <h4>Product Sell</h4>
            <input
              type="text"
              value={search1}
              onChange={(e) => setSearch1(e.target.value)}
              placeholder="Search"
            />
            <button>Last 30 days ˅</button>
          </div>
          <div className="text2">
            <p>Product Name</p>
            <div className="stock">
              <p>Stock</p>
              <p>Price</p>
              <p>Totals Sales</p>
            </div>
          </div>
        </div>
        <div className="card5">
          <div className="card4">
            <img src={nature} alt="Card Image" />
            <div className="title2">
              <h5>Abstract 3D</h5>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <p>32 in stock</p>
            <p>$ 45.99</p>
            <p>20</p>
          </div>
          <div className="card4">
            <img src={nature1} alt="Card Image" />
            <div className="title2">
              <h5>Abstract 3D</h5>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <p>32 in stock</p>
            <p>$ 45.99</p>
            <p>20</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
