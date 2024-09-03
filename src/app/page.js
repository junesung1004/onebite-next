"use client"

import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function App() {
  const router = useRouter();


  useEffect(()=> {
    setTimeout(()=> {
      router.push('/home');
        }, 2000)
  },)
  

  return (
    <div className={styles.container}>
      <Image src="/images/logo.jpg" alt="logo" width={100} height={100}/>
    </div>
  );
}
