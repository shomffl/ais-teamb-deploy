import Link from "next/link";

const index = () => {
  return (
    <div className="grid place-content-center h-screen bg-navy2 text-center gap-y-2">
      <p className="text-blue2-light text-6xl font-bold mb-4">Young Career</p>
      <Link href="/company/signin">
        <a className="text-white2 font-semibold underline">企業ページへ</a>
      </Link>
      <Link href="/student/allevent">
        <a className="text-white2 font-semibold underline">学生ページへ</a>
      </Link>
    </div>
  );
};

export default index;
