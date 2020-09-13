import React from "react";
import FeaturedItem from "./FeaturedItem";
import { NavBar, Navbar } from "react-bootstrap";

function FeaturedList({ Menu }) {
  return (
    <>
      <div className=" featured-list">
        {Menu.map((item) => {
          return <FeaturedItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}

export default FeaturedList;
