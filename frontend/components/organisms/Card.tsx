import Image from "next/image";
import { useState } from "react";
import { BsBrightnessHigh, BsMoonStarsFill } from "react-icons/bs";

import Badge from "../atoms/Badge";
import EventModal from "../template/EventModal";

type eventType = {
  id: number;
  name: string;
  detail: string;
  image_path: any;
};
const image = "https://source.unsplash.com/DJ7bWa-Gwks";
const Card = ({ data, mutate }: { data: eventType; mutate?: any }) => {
  const [dark, setDark] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <EventModal
        data={data}
        markdown={"<h1>title2</h1>"}
        open={open}
        setOpen={setOpen}
        mutate={mutate}
      />
      <div
        className={`w-full rounded-lg overflow-hidden shadow-lg relative cursor-pointer ${
          dark ? "bg-navy2" : "bg-white2"
        }`}
        onClick={() => setOpen(true)}
      >
        <div
          className={`absolute top-2 right-4 p-1 rounded-full `}
          onClick={() => {
            setDark(!dark);
          }}
        >
          {dark ? <BsBrightnessHigh /> : <BsMoonStarsFill />}
        </div>
        <div className="w-full aspect-[2/1]">
          <Image
            layout="responsive"
            width={372}
            height={186}
            src={data.image_path.url || image}
            alt=""
          />
        </div>

        <div className="px-6 pt-4">
          <div
            className={`font-semibold text-2xl mb-2 text-left ${
              dark && "text-white2"
            }`}
          >
            {data?.name}
          </div>
        </div>
        <div className="px-6 pt-2 pb-2 text-left">
          <Badge>badge</Badge>
        </div>
        <div className="mx-6 mb-6 grid grid-cols-2">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8">
              <img
                className="w-full h-full rounded-full"
                alt=""
                src={image}
              ></img>
            </div>
            <p className={dark ? "text-white2" : ""}>Company</p>
          </div>
          <div className={`justify-self-end ${dark && "text-white2"}`}>
            <p>10/4~</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
