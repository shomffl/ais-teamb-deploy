import { getMyEvent } from "../../api/event";
import Card from "../organisms/Card";

const AllEvent = () => {
  const { data, isLoading, error, mutate } = getMyEvent();
  return (
    <div className="md:container mx-auto py-16">
      <div className="grid grid-cols-6 text-left">
        <div className="relative">
          <div className="mt-24 w-44 justify-self-start fixed">
            <input className="mx-3 w-32 py-1/2 px-2 bg-white2 rounded"></input>
          </div>
        </div>

        <div className="col-span-5">
          <div className="mb-12">
            <p className="text-5xl text-left font-bold">All Events</p>
          </div>
          <div className="grid  lg:grid-cols-2 grid-cols-1 gap-y-8 gap-x-6 ">
            {data &&
              data.data.map((value: any, i: number) => (
                <div key={i}>
                  <Card mutate={mutate} data={value} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEvent;
