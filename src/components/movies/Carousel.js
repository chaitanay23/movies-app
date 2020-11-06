import React from "react";
import BasicFilm from "react-film";
import img1 from "../../images/Capture.PNG";
import img2 from "../../images/Capture1.PNG";
import img3 from "../../images/Capture2.PNG";

const Carousel = () => {
  return (
    <BasicFilm height={316} showDots={false} showScrollBar={false}>
      <img alt="Cat 01" src={img1} />
      <img alt="Cat 02" src={img2} />
      <img alt="Cat 03" src={img3} />
    </BasicFilm>
  );
};

export default Carousel;
