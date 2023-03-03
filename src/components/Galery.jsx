import React from "react";
import Image from "./Image";

const Galery = (props) => {
  const { pictures } = props;
  return (
    <div className="grid  grid-cols-2 md:grid-cols-4 md:w-6/12 ">
      {pictures.map((picture) => {
        return <Image key={picture.id} picture={picture} />;
      })}
    </div>
  );
};

export default Galery;
