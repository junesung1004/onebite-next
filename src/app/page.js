import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <p>매번 뭐 먹을지 고민하지마!👀</p>
      <p>↓ 버튼을 눌러서 메뉴 고민 해결해버려!</p>
      <div className={styles.btn}>
        <Link href={"/category"}>시작하기</Link>
      </div>
    </div>
  );
}
