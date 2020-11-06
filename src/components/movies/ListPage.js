import React from "react";
import Carousel from "./Carousel";
import "./listPage.css";

const ListPage = () => {
  return (
    <div className="list_page_bg">
      <div className="container">
        <div className="list-row">
          <h1 className="heading">Movies</h1>
          <select className="select-type">
            <option>Action</option>
          </select>
        </div>
        <div className="list-row">
          <h3 className="heading">Trending Now</h3>
        </div>
        <Carousel />
        <div className="list-row">
          <h3 className="heading">Supernatural Horror Movies</h3>
        </div>
        <Carousel />
        <div className="list-row">
          <h3 className="heading">Romantic Movies</h3>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default ListPage;
