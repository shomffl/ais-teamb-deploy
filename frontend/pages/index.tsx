import Link from "next/link";

const index = () => {
  return (
    <div className="grid place-content-center h-screen">
      <Link href="/company">企業ページへ</Link>
    </div>
  );
};

export default index;
