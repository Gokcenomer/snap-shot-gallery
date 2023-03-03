import React from "react";

const Image = (props) => {
  const data = props;

  return (
    <img
      className="h-full p-2  w-full justify-center md:w-full cursor-pointer scale-100 hover:scale-105 overflow-hidden ease-in-out duration-300"
      src={data.picture.urls.small}
    ></img>
  );
};

export default Image;
