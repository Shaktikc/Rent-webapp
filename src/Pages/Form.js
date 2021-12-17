import React from "react";
import "./Form.css";
export const Login = () => {
  return (
    <div className="login-card">
      <form>
        <h3 className="Login">User Form</h3>
        <p className="formInfo">Please fill the form.</p>

        <div className="form-group">
          <div className="title">Property Title</div>
          <input
            className="titleInput"
            type="email"
            placeholder="Please Enter Property Title"
          />
        </div>

        <div className="form-group">
          <div className="Address">Property Address</div>
          <input
            type="text"
            className="AddressInput"
            placeholder="Please Enter Property Address"
          />
        </div>
        <div className="bed-bath">
          <div className="form-group">
            <div className="Address">Number of bed</div>
            <input type="Number" className="NumberInput" defaultValue="0" />
          </div>
          <div className="form-group">
            <div className="Address">Number of bath</div>
            <input type="Number" className="NumberInput" defaultValue="0" />
          </div>
        </div>
        <div className="property">
          <div className="form-group">
            <div className="Address">Area of Property</div>
            <input type="Number" className="NumberInput" defaultValue="0" />
          </div>
          <div className="form-group">
            <div className="Address">price of Property</div>
            <input type="Number" className="NumberInput" defaultValue="0" />
          </div>
        </div>

        <button className="submit" type="submit">
          submit form
        </button>
      </form>
    </div>
  );
};
