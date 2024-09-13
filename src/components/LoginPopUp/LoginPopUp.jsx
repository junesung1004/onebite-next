import { useState } from "react";
import styles from "./LoginPopUp.module.scss";

export default function LoginPopUp() {
  const [isVisible, setIsVisible] = useState(true);
  const closeBtn = () => {
    setIsVisible(false);
  };
  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <section className={styles.popUpContainer}>
        <article className={styles.loginPopUpContainer}>
          <div className={styles.title}>
            <h3>로그인 후</h3>
            <h3>
              <span className={styles.strong}>나만의 메뉴를 구성</span>해볼까요?
            </h3>
          </div>
        </article>

        <div className={styles.btnContainer}>
          <button className={styles.loginBtn}>로그인</button>
          <button
            onClick={() => {
              closeBtn();
            }}
            className={styles.closeBtn}
          >
            닫기
          </button>
        </div>
      </section>
    </div>
  );
}
