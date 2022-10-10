import Card from "../parts/Card";
import NewButton from "../parts/NewButton";

const DashBoard = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-2 justify-between">
        <p className="text-5xl text-left font-bold">My Events</p>
        <div className="justify-self-end">
          <NewButton />
        </div>
      </div>
      <p className="text-4xl text-left my-6 mb-8">募集中</p>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-8 gap-x-1 ">
        {[...Array(5)].map((_) => (
          <div className="">
            <Card />
          </div>
        ))}
      </div>
      <p className="text-4xl text-left my-6 mt-14">募集済み</p>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-8 ">
        {[...Array(5)].map((_) => (
          <div className="">
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
