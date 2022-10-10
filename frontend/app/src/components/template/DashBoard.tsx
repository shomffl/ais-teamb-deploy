import Card from "../parts/Card";
import NewButton from "../parts/NewButton";

const DashBoard = () => {
  return (
    <div className="container mx-auto py-20 h-full">
      <div className="grid grid-cols-5 text-left h-full">
        <div className="h-full">
          <div className="my-36 w-44 justify-self-start absolute">
            <input className="m-3 w-32 py-1/2 px-2 bg-white2 rounded"></input>
            <p className="text-md p-3">
              <a href="#recuruite">募集中</a>
            </p>
            <p className="text-md p-3">募集済み</p>
          </div>
        </div>

        <div className="col-span-4 scroll-smooth">
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
