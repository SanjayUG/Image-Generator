import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="nav mt-3">
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("nature");
            navigate("/");
          }}
        >
          Nature
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("travel");
            navigate("/");
          }}
        >
          Travel
        </div>
        <div
          className="button btn btn-outline-light mx-3"
          onClick={() => {
            setSearch("investment");
            navigate("/");
          }}
        >
          Investment
        </div>
        <div
          className="button btn btn-outline-light mx-3"
          onClick={() => {
            setSearch("culture");
            navigate("/");
          }}
        >
          Culture
        </div>
        <div
          className="button btn btn-outline-light mx-3"
          onClick={() => {
            setSearch("fashion");
            navigate("/");
          }}
        >
          Fashion
        </div>
        <div
          className="button btn btn-outline-light mx-3"
          onClick={() => {
            setSearch("computer");
            navigate("/");
          }}
        >
          Computer
        </div>
        <div
          className="button btn btn-outline-light mx-3"
          onClick={() => {
            setSearch("technology");
            navigate("/");
          }}
        >
          Technology
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("microsoft");
            navigate("/");
          }}
        >
          Microsoft
        </div>
        <div
          className="button btn btn-outline-danger mx-3"
          onClick={() => {
            setSearch("tokyo");
            navigate("/");
          }}
        >
          Tokyo
        </div>
        

        {location.pathname == "/saved" ? (
          <div
            className="button btn btn-warning mx-3"
            onClick={() => navigate("/")}
          >
            Home
          </div>
        ) : (
          <div
            className="button btn btn-warning my-3"
            onClick={() => navigate("/saved")}
          >
            Go to Saved pic
          </div>
        )}
      </div>

      <div
        className="container my-4"
        style={{
          width: "780px",
        }}
      >
        {location.pathname === "/" && (
          <div className="mb-3">
            Search below:
            <input
              type="email"
              className="form-control bg-dark text-light"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
