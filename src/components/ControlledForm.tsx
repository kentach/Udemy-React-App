import { useState } from "react";
import styles from "./ControlledForm.module.css";

const ControlledForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    contact: "",
    age: "",
  });

  const handleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const ages = [
    { id: 0, generation: "選択してください" },
    { id: 1, generation: "10代" },
    { id: 2, generation: "20代" },
    { id: 3, generation: "30代" },
    { id: 4, generation: "40代" },
    { id: 5, generation: "50代" },
    { id: 6, generation: "60代〜" },
  ];

  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="name">
          名前
        </label>

        <input
          className={styles.input}
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleInput}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          Eメール
        </label>

        <input
          className={styles.input}
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleInput}
        />
      </div>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>性別</legend>

        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              className={styles.radio}
              type="radio"
              name="gender"
              value="male"
              checked={form.gender === "male"}
              onChange={handleInput}
            />
            男性
          </label>

          <label className={styles.radioLabel}>
            <input
              className={styles.radio}
              type="radio"
              name="gender"
              value="female"
              checked={form.gender === "female"}
              onChange={handleInput}
            />
            女性
          </label>

          <label className={styles.radioLabel}>
            <input
              className={styles.radio}
              type="radio"
              name="gender"
              value="other"
              checked={form.gender === "other"}
              onChange={handleInput}
            />
            その他
          </label>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>年齢</legend>
        <select
          className={styles.select}
          name="age"
          value={form.age}
          onChange={handleInput}
        >
          {ages.map((age) => (
            <option key={age.id} value={age.id}>
              {age.generation}
            </option>
          ))}
        </select>
      </fieldset>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="contact">
          お問い合わせ
        </label>

        <textarea
          className={styles.textarea}
          id="contact"
          name="contact"
          value={form.contact}
          onChange={handleInput}
        />
      </div>

      <button className={styles.submitBtn} type="submit">
        送信
      </button>
    </form>
  );
};

export default ControlledForm;
