"use client";

import styles from "./Card.module.css";

const imgs = [
  { img: `1.jpg`, name: "Korean Fried", price: "2000", kallory: "2" },
  { img: `2.jpg`, name: "Grilled", price: "2300", kallory: "5" },
  { img: `3.jpg`, name: "Fried", price: "200", kallory: "11" },
  { img: `4.jpg`, name: "Deep Fried", price: "2300", kallory: "60" },
];

export default function Card() {
  return <div className={styles.frame}></div>;
}
