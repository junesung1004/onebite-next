import Card from "@/components/Card";

export default function Page({ params }) {
  const decodedId = decodeURIComponent(params.id);
  return (
    <>
      <div>카테고리 {decodedId} 페이지 입니다.</div>
      <Card />
    </>
  );
}
