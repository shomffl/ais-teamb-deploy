import { SyntheticEvent } from "react";
import Card from "../parts/Card";
import NewButton from "../parts/NewButton";

const DashBoard = () => {
  const scroll = (tag: string) => {
    const targetContent = document.getElementById(tag);
    if (targetContent) {
      const position =
        targetContent.getBoundingClientRect().top + window.pageYOffset - 20;
      console.log(position);
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="container mx-auto py-20">
      <div className="grid grid-cols-5 text-left">
        <div className="relative">
          <div className="my-36 w-44 justify-self-start fixed">
            <input className="m-3 w-32 py-1/2 px-2 bg-white2 rounded"></input>
            <p className="text-md p-3">
              <a
                onClick={(e: SyntheticEvent) => {
                  e.preventDefault();
                  scroll("recuruite");
                }}
                href="#recuruite"
              >
                募集中
              </a>
            </p>
            <p className="text-md p-3">
              <a
                onClick={(e: SyntheticEvent) => {
                  e.preventDefault();
                  scroll("notrecuruite");
                }}
                href="#notrecuruite"
              >
                募集済み
              </a>
            </p>
          </div>
        </div>

        <div className="col-span-4">
          <div className="grid grid-cols-2 justify-between">
            <p className="text-5xl text-left font-bold">My Events</p>
            <div className="justify-self-end">
              <NewButton />
            </div>
          </div>
          <p id="recuruite" className="text-4xl text-left my-6 mb-8">
            募集中
          </p>
          <div className="grid  md:grid-cols-2 sm:grid-cols-1 gap-y-8 gap-x-1 ">
            {[...Array(5)].map((_) => (
              <div className="">
                <Card />
              </div>
            ))}
          </div>
          <p id="notrecuruite" className="text-4xl text-left my-6 mt-14">
            募集済み
          </p>
          <div className="grid  md:grid-cols-2 grid-cols-1 gap-y-8 ">
            {[...Array(5)].map((_) => (
              <div className="">
                <Card />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
