import React, { Component } from "react";

const Player = ({ currentVideo: { id, title, description } }) => {
  const embedUrl = `https://www.youtube.com/embed/${id}`;

  const style = {
    border: "1px solid purple",
    padding: "1rem",
    margin: "1rem"
  };

  return (
    <div style={style}>
      <iframe src={embedUrl} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Player;
