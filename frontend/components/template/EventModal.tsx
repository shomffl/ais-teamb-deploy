import { TypographyStylesProvider } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import image from "../../public/railroad-163518__480.jpg";
const EventModal = ({ markdown }: { markdown?: any }) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div
      className={`overflow-auto absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-40 ${
        open || "hidden"
      }`}
    >
      <div
        className="top-12 right-8 fixed"
        onClick={() => {
          setOpen(false);
        }}
      >
        <AiOutlineClose />
      </div>

      <div className="w-3/5 mx-auto  pt-32">
        <div className="w-full aspect-[2/1]">
          <Image
            layout="responsive"
            height={120}
            width={240}
            src={image.src}
            className="overflow-hidden"
          />
        </div>

        <div className="p-10 bg-white">
          <p className="font-bold text-4xl">Title</p>
          <TypographyStylesProvider>
            <div dangerouslySetInnerHTML={{ __html: markdown }} />
          </TypographyStylesProvider>
          <p className="font-bold text-4xl">Title</p>
          <p className="font-bold text-4xl">Title</p>
          <p className="font-bold text-4xl">Title</p>
          <p className="font-bold text-4xl">Title</p>
          <p className="font-bold text-4xl">Title</p>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
