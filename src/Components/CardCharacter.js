import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CardCharacter({ name, specie, image, url }) {
  return (
    <Link to="/Character" className="border h-auto border-black">
      <div className="">
        <h2>{name}</h2>
        <p>Specie: {specie}</p>
        <img src={image}></img>
      </div>
    </Link>
  );
}

export default CardCharacter;
