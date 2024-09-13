"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";
import { getSession, signOut } from "next-auth/react";
import LoginPopUp from "@/components/LoginPopUp/LoginPopUp";
import Link from "next/link";

export default function Page() {
  const mock1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const mock2 = [1, 2, 3, 4, 5];
  const router = useRouter();

  const [isLikeChecked, setIsLikeChecked] = useState(true);
  const [isDisLikeChecked, setIsDisLikeChecked] = useState(false);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setUser(session?.user || null);
    };
    fetchSession();
  }, []);

  //console.log(user?.name);

  const clickHomeMove = async () => {
    try {
      await signOut({ redirect: false });
      router.push("/start");
    } catch (error) {
      console.error("로그아웃 에러 발생 :", error);
      throw new Error("로그아웃 과정에서 오류가 발생했습니다.");
    }
  };

  const clickLikeBtn = () => {
    setIsLikeChecked((prev) => !prev);
    if (isDisLikeChecked) {
      setIsDisLikeChecked(false);
    }
  };

  const clickDisLikeBtn = () => {
    setIsDisLikeChecked((prev) => !prev);
    if (isLikeChecked) {
      setIsLikeChecked(false);
    }
  };

  const togglePopUp = () => {
    setIsPopUpVisible((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      {isPopUpVisible && <LoginPopUp />}

      <div className={styles.userInfoContainer}>
        <h2>
          <span className={styles.userName}>{user?.name}</span>님
        </h2>
        <h2>맛있는 식사하셨나요?</h2>
      </div>

      <div className={styles.btnContainer}>
        <button onClick={() => clickHomeMove()} className={styles.logOutBtn}>
          로그아웃
        </button>
        <button className={styles.editBtn}>편집</button>
      </div>

      <article className={styles.likeDisLikeContainer}>
        <div onClick={() => clickLikeBtn()} className={`${styles.likeWrap} ${isLikeChecked ? styles.likeChecked : ""}`}>
          좋아요<span className={styles.like}>13</span>
        </div>
        <div onClick={() => clickDisLikeBtn()} className={`${styles.disLikeWrap} ${isDisLikeChecked ? styles.disLikeChecked : ""}`}>
          안볼래요<span className={styles.disLike}>5</span>
        </div>
      </article>

      <section className={styles.foodsImgContainer}>
        {isLikeChecked &&
          mock1.map((el, idx) => {
            return (
              <article className={styles.imgWrap} key={idx}>
                <div>이미지</div>
                <p>음식이름</p>
              </article>
            );
          })}

        {isDisLikeChecked &&
          mock2.map((el, idx) => {
            return (
              <article className={styles.imgWrap} key={idx}>
                <div>이미지</div>
                <p>음식이름</p>
              </article>
            );
          })}
      </section>

      <footer className={styles.footerContainer}>
        <Link href={"/"}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icon}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>

        <button onClick={togglePopUp}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icon}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      </footer>
    </div>
  );
}
