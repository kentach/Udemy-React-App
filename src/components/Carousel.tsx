import styles from "./Carousel.module.css";
import { thumbnailsImage } from "../data/carousel";
import { useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickNextImage = () => {
    if (activeIndex >= thumbnailsImage.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleClickPrevImage = () => {
    if (activeIndex === 0) {
      setActiveIndex(thumbnailsImage.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section className={styles.container}>
      <div>
        <div className={styles.main}>
          <img
            className={styles.mainImage}
            src={thumbnailsImage[activeIndex].img}
            alt={thumbnailsImage[activeIndex].img}
          />
          <button onClick={handleClickNextImage} className={styles.nextBtn}>
            ▶︎
          </button>
          <button onClick={handleClickPrevImage} className={styles.prevBtn}>
            ◀︎
          </button>
        </div>

        <div className={styles.thumbnails}>
          {thumbnailsImage.map((thumbnail, index) => (
            <img
              key={thumbnail.id}
              className={
                activeIndex === thumbnail.id ?
                  `${styles.thumbnailsImage} ${styles.active}`
                : `${styles.thumbnailsImage}`
              }
              src={thumbnail.img}
              alt={thumbnail.img}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
