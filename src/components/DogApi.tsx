"use client";

import { useEffect, useState } from "react";
import styles from "./DogApi.module.css";

const DogApi = () => {
  const [dogImage, setDogImage] = useState("");

  const getDogImage = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json(); // APIから返ってきたレスポンスを、JavaScriptで使えるデータに変換している
    setDogImage(data.message);
  };

  useEffect(() => {
    getDogImage();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Dog Image</h2>

      {dogImage && (
        <img src={dogImage} alt="犬の画像" className={styles.image} />
      )}

      <button onClick={getDogImage} className={styles.button}>
        画像を取得
      </button>
    </div>
  );
};

export default DogApi;
