import { useState } from "react";
import styles from "./TabMenu.module.css";
import type { Tab } from "../types/Tab";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabMenus: Tab[] = [
    { id: 1, title: "サイトの情報", content: "このサイトについての情報です。" },
    { id: 2, title: "商品情報", content: "商品の情報です。" },
    { id: 3, title: "お問い合わせ", content: "お問い合わせはこちらです。" },
  ];
  const activeContent = tabMenus.find((tab) => tab.id === activeTab);

  return (
    <>
      <section className={styles.container}>
        <ul className={styles.tabs}>
          {tabMenus.map((tab) => (
            <li
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        <div>
          <p>{activeContent?.content}</p>
        </div>
      </section>
    </>
  );
};

export default TabMenu;
