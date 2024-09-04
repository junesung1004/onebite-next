"use client";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./Card.module.scss";
import Image from "next/image";

import img1 from "../../public/images/1.jpg";
import img2 from "../../public/images/2.jpg";
import img3 from "../../public/images/3.jpg";
import img4 from "../../public/images/4.jpg";
import img5 from "../../public/images/5.jpg";

const imgs = [
  { img: img1, name: "Korean Fried", price: "2000", kallory: "2" },
  { img: img2, name: "Grilled", price: "2300", kallory: "5" },
  { img: img3, name: "Fried", price: "200", kallory: "11" },
  { img: img4, name: "Deep Fried", price: "2300", kallory: "60" },
  { img: img5, name: "Deep Fried", price: "2300", kallory: "60" },
];

export default function Card() {
  return (
    <Swiper className={styles.frame} slidesPerView={1} navigation pagination={{ clickable: true }} scrollbar={{ draggable: true }}>
      {imgs.map((el, idx) => (
        <SwiperSlide key={idx} className={styles.imgSlide}>
          <Image src={el.img} alt={el.name} layout="fill" objectFit="cover" className={styles.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
