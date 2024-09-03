import Link from "next/link";
import style from "./page.module.scss";

// 쿼리 스트링이나, url parameter 를 props로 전달할 수 있다.
export default function Page({ searchParams }) {
  return (
    <div className={style.container}>
      <Link href={`/category/한식`}>한식</Link>
      <Link href={`/category/양식`}>양식</Link>
      <Link href={`/category/일식`}>일식</Link>
      <Link href={`/category/중식`}>중식</Link>
    </div>
  );
}
