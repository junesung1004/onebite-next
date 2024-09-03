<<<<<<< HEAD
"use client"

import styles from "./page.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {motion} from "framer-motion";

export default function App() {
  const router = useRouter();


  useEffect(()=> {
    setTimeout(()=> {
      router.push('/home');
        }, 3000)
  },[router])
  

  return (
    <motion.div
    className={styles.container}
    initial={{ opacity: 0 }} // 초기 상태
    animate={{ opacity: 1 }} // 애니메이션 상태
    exit={{ opacity: 0 }} // 페이지 나갈 때 애니메이션
    transition={{ duration: 1.5 }} // 애니메이션 지속 시간
  >
    <Image src="/images/logo.jpg" alt="logo" width={100} height={100} />
  </motion.div>
=======
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
>>>>>>> bbba67032a051d9dc382c3f3a33783bd61dd76ec
  );
}
