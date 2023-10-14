import React from "react";
import "./LeftSection.css";
import dashboard from "../assets/dashboard.png";
import product from "../assets/product.png";
import customers from "../assets/customer.png";
import income from "../assets/income.png";
import promote from "../assets/promotion.png";
import help from "../assets/help.png";
import dashboards from "../assets/dashboard1.png";

const LeftSection = () => {
  const str = ">";
  return (
    <div className="left-section">
      <div className="dashboard2">
        <img className="dashboard2" src={dashboards} alt="dashboard-logo" />
        <h3>Dashboard</h3>
      </div>
      <div className="dashboard">
        <img className="dashboard-logo" src={dashboard} alt="dashboard-logo" />
        <h3>Dashboard</h3>
        <p>{str}</p>
      </div>
      <div className="dashboard">
        <img className="dashboard-logo" src={product} alt="dashboard-logo" />
        <h3>Product</h3>
        <p>{str}</p>
      </div>
      <div className="dashboard">
        <img className="dashboard-logo" src={customers} alt="dashboard-logo" />
        <h3>Customers</h3>
        <p>{str}</p>
      </div>
      <div className="dashboard">
        <img className="dashboard-logo" src={income} alt="dashboard-logo" />
        <h3>Income</h3>
        <p>{str}</p>
      </div>
      <div className="dashboard">
        <img className="dashboard-logo" src={promote} alt="dashboard-logo" />
        <h3>Promote</h3>
        <p>{str}</p>
      </div>
      <div className="dashboard">
        <img className="dashboard-logo" src={help} alt="dashboard-logo" />
        <h3>Help</h3>
        <p>{str}</p>
      </div>
      <div className="dash">
      <div className="dashboard">
        <img className="dashboard-logo" src={customers} alt="dashboard-logo" />
        <div>
        <h3 className="name">Evano</h3>
        <p className="position">Project Manager</p>
        </div>
        <p className="rotate-90-degrees">{str}</p>
      </div>
      </div>
    </div>
  );
};

export default LeftSection;
