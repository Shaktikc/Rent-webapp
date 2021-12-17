import React from "react";
import { Card } from "../Component/Card";
import "./Office.css";

export const Office = () => {
  return (
    <div className="office-card">
      <Card img="images/office.png" />
      <Card img="images/office.png" />
      <Card img="images/office.png" />
    </div>
  );
};
