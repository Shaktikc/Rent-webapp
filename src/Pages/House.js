import React from "react";
import "./House.css";

import { Card } from "../Component/Card";

export const House = () => {
  return (
    <div className="house-card">
      {/* <Link to="/house">house</Link> */}
      <Card img="images/house.png" />
      <Card img="images/house.png" />
      <Card img="images/house.png" />
    </div>
  );
};
