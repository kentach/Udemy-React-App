import { useState } from "react";
import styles from "./ModalWindow.module.css";

const ModalWindow = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className={styles.container}>
      <button className={styles.openBtn} onClick={() => setOpenModal(true)}>画像を表示</button>

      {openModal && (
        <div>
          <div className={styles.modalInner}>
            <div
              className={styles.closeBtn}
              onClick={() => setOpenModal(false)}
            >
              <i className="fa-solid fa-circle-xmark"></i>
            </div>
            <img
              className={styles.image}
              src="/image001.jpg"
              alt="モダール画像"
            />
          </div>

          <div className={styles.modalBackground}></div>
        </div>
      )}
    </section>
  );
};

export default ModalWindow;
