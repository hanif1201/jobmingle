import { useState, useEffect } from "react";

const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselContent = [
    <div>Item 1 Content</div>,
    <div>Item 2 Content</div>,
    <div>Item 3 Content</div>,
  ];

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
  };

  const goToPrevious = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselContent.length) % carouselContent.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <button onClick={goToPrevious}>Previous</button>
      {carouselContent[activeIndex]}
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

export default MyCarousel;
