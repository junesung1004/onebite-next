"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import CheckIcon from "@/components/CheckIcon";
import { useRouter } from "next/navigation";


export default function Page() {

  const router = useRouter()

  const clickMoveChange = () => {
    router.push(`/category/1`)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href={"/home"}>뒤로가기</Link>
        </nav>
        <h1>맞춤설정</h1>
      </header>

      <main className={styles.mainContainer}>
        <section>
          <article className={styles.categoryContainer}>
            <h3>카테고리</h3>
            <div className={styles.categoryWrap}>
              <div className={styles.iconBox}>
                <CheckIcon />
                <p>전체</p>
              </div>
              {/* 아이템 박스 */}

              <div className={styles.iconBox}>
                <CheckIcon />
                <p>1인분</p>
              </div>
              {/* 아이템 박스 */}

              <div className={styles.iconBox}>
                <CheckIcon />
                <p>한식</p>
              </div>
              {/* 1개의 아이템 박스 */}

              <div className={styles.iconBox}>
                <CheckIcon />
                <p>중식</p>
              </div>
              {/* 1개의 아이템 박스 */}

              <div className={styles.iconBox}>
                <CheckIcon />
                <p>일식</p>
              </div>
              {/* 1개의 아이템 박스 */}

              <div className={styles.iconBox}>
                <CheckIcon />
                <p>양식</p>
              </div>
              {/* 1개의 아이템 박스. */}

              <div className={styles.iconBox}>
                <CheckIcon />
                <p>아시안</p>
              </div>
              {/* 1개의 아이템 박스 */}

              <div className={styles.iconBox}>
                <CheckIcon />
                <p>찜, 탕, 찌개</p>
              </div>
              {/* 1개의 아이템 박스 */}
            </div>
          </article>

          <article className={styles.priceCategoryContainer}>
            <h3>카테고리</h3>
            <div className={styles.categoryWrap}>
              <div className={styles.iconBox}>
                <CheckIcon />
                <p>전체</p>
              </div>
              {/* 아이템 박스 */}

              <div className={styles.iconBox}>
                <CheckIcon />
                <p>8000원 이하</p>
              </div>
              {/* 아이템 박스 */}

              <div className={styles.iconBox}>
                <CheckIcon />
                <p>10000원 이하</p>
              </div>
              {/* 아이템 박스 */}

              <div className={styles.iconBox}>
                <CheckIcon />
                <p>15000원 이하</p>
              </div>
              {/* 아이템 박스 */}
            </div>
          </article>

          <article className={styles.distanceCategoryContainer}>
            <h3>거리순으로 매장추천 받기</h3>
            <div>스틱바 어떻게 구현하징...</div>
          </article>
        </section>
      </main>
      <button type="button" onClick={()=>clickMoveChange()}>메뉴 보기</button>
    </div>
  );
}
