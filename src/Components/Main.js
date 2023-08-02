


import React, { useState } from "react";

const Main = () => {
  const [imgUrl, setUrl] = useState("https://cdn2.thecatapi.com/images/DZba-eH_4.jpg");

  const callImg = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => {
        // Assuming data is an array of images with URLs
        const image = data[0];
        setUrl(image.url);
      })
      .catch((error) => {
        console.log("Error fetching cat image:", error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Enjoy the kitty</h1> <br />
          <img src={imgUrl} alt="A cute kitty" /><br />
          <button onClick={callImg}>Click me</button>
        </div>
      </div>
    </>
  );
};

export default Main;

