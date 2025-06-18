import React, { useState, useEffect } from 'react';
import './MultiCarousel.css';

const MultiCarousel = ({ items }) => {
  const [itemWidth, setItemWidth] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const dataItems = [1, 3, 4, 4]; // Configuração para XS, SM, MD, LG

  const calculateItemWidth = () => {
    const bodyWidth = window.innerWidth;
    let incno;

    if (bodyWidth >= 1200) incno = dataItems[3];
    else if (bodyWidth >= 992) incno = dataItems[2];
    else if (bodyWidth >= 768) incno = dataItems[1];
    else incno = dataItems[0];

    setItemWidth(window.innerWidth / incno);
  };

  const handleSlide = (direction) => {
    const maxTranslate = (items.length * itemWidth) - window.innerWidth;
    let newTranslateX = translateX;

    if (direction === "left") {
      newTranslateX = Math.max(translateX - itemWidth, 0);
    } else {
      newTranslateX = Math.min(translateX + itemWidth, maxTranslate);
    }

    setTranslateX(newTranslateX);
  };

  useEffect(() => {
    calculateItemWidth();
    window.addEventListener("resize", calculateItemWidth);

    return () => {
      window.removeEventListener("resize", calculateItemWidth);
    };
  }, [itemWidth]);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      handleSlide("right");
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay, translateX, itemWidth]);

  return (
    <div onMouseEnter={() => setAutoPlay(true)}
    >
      <div className="row">
        <div className="MultiCarousel">
          <div
            className="MultiCarousel-inner"
            style={{
              transform: `translateX(-${translateX}px)`,
              width: `${itemWidth * items.length}px`,
            }}
          >
            {items.map((item, index) => (
              <div key={index} className="item" style={{ width: `${itemWidth}px` }}>
                <div className="pad15">
                  <p className="lead fs-bold">{item.title}</p>
                  <p>Duração: {item.duration}</p>
                  <p>Area:{item.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCarousel;
