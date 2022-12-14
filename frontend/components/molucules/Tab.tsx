import Link from "next/link";

const Tab = ({ tab, genre }: { tab?: number; genre?: string }) => {
  return (
    <>
      <div className="ml-16 flex lg:space-x-6 space-x-4">
        {genre === "company" && (
          <Link href={`/${genre}`}>
            <div
              className={`py-7 hover:border-b hover:text-blue2-light hover:border-blue2-light border-blue2 text-gray2 cursor-pointer ${
                tab === 0 && "border-b text-blue2"
              }`}
            >
              <p>My Events</p>
            </div>
          </Link>
        )}

        <Link href={`/${genre}/allevent`}>
          <div
            className={`py-7 hover:border-b hover:text-blue2-light hover:border-blue2-light border-blue2 text-gray2 cursor-pointer ${
              tab === 1 && "border-b text-blue2"
            }`}
          >
            <p>All Events</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Tab;
