import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { Image } from "./Image";
import { ArrowButton } from "./ArrowButton";
import { CarouselHeader } from "./CarouselHeader";

export default function ImageCarousel() {
  const images = [
    "https://images.pexels.com/photos/5624777/pexels-photo-5624777.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/6326936/pexels-photo-6326936.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/13073667/pexels-photo-13073667.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/14087726/pexels-photo-14087726.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/14615835/pexels-photo-14615835.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];

  const [currentPic, setCurrentPic] = useState(0);

  function handleNextPic() {
    if (currentPic === images.length - 1) {
      setCurrentPic(0);
      return;
    }
    setCurrentPic(() => currentPic + 1);
  }

  function handlePreviousPic() {
    if (currentPic === 0) {
      setCurrentPic(() => images.length - 1);
      console.log(images.length);
      return;
    }
    setCurrentPic(() => currentPic - 1);
  }
  return (
    <div>
      <CarouselHeader />
      <div className="carousel-container">
        <ArrowButton
          onHandlePic={handlePreviousPic}
          fAIcon={faArrowLeft}
          extraClass="previous-button"
        />
        <Image images={images} currentPic={currentPic} />
        <ArrowButton
          onHandlePic={handleNextPic}
          fAIcon={faArrowRight}
          extraClass="next-button"
        />
      </div>
    </div>
  );
}
