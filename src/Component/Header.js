import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useLocation } from "react-router-dom";
export const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const navigate = useNavigate();

  const linkPath = (path) => {
    navigate(path);
  };

  return (
    <div className="header">
      <h3>Recent Properties on Gharmart</h3>
      <div className="header-button">
        <button
          className={
            splitLocation[1] === "house"
              ? "button-house active"
              : "button-house"
          }
          onClick={() => linkPath("/house")}
        >
          House & Bungalow
        </button>
        <button
          className={
            splitLocation[1] === "land" ? "button-land active" : "button-land"
          }
          onClick={() => linkPath("/land")}
        >
          Land
        </button>
        <button
          className={
            splitLocation[1] === "flat" ? "button-flats active" : "button-flats"
          }
          onClick={() => linkPath("/flat")}
        >
          Flats & Rooms
        </button>
        <button
          className={
            splitLocation[1] === "office"
              ? "button-office active"
              : "button-office"
          }
          onClick={() => linkPath("/office")}
        >
          Office Space
        </button>
      </div>
    </div>
  );
};
