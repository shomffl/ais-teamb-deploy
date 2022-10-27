import Image from "next/image";
import Link from "next/link";
import { AiFillDelete, AiFillEdit, AiOutlineClose } from "react-icons/ai";
import { deleteEvent } from "../../api/event";
import image from "../../public/railroad-163518__480.jpg";
const EventModal = ({
  markdown,
  open,
  setOpen,
  data,
  mutate,
}: {
  markdown?: any;
  open: boolean;
  setOpen: (arg: boolean) => void;
  data: any;
  mutate: any;
}) => {
  function createElementFromHTML(html: string) {
    const tempEl = document.createElement("div");
    tempEl.innerHTML = html;
    return tempEl.firstElementChild;
  }
  return (
    <div
      className={`overflow-auto fixed top-0 left-0 w-screen h-screen z-10 bg-black bg-opacity-80 ${
        open || "hidden"
      }`}
    >
      <div
        className="top-12 right-8 fixed z-10 bg-white p-2 rounded-full"
        onClick={() => {
          setOpen(false);
        }}
      >
        <AiOutlineClose />
      </div>

      <div className="w-3/5 mx-auto  pt-32 ">
        <div className="w-full aspect-[2/1] relative">
          <div className="absolute top-8 right-8 z-10 inline-flex space-x-2">
            <Link
              as={`/event/${data.id}`}
              href={{ pathname: `/event/[event]`, query: data }}
            >
              <div className="bg-navy2 p-2 rounded-full">
                <AiFillEdit size={20} color="white" />
              </div>
            </Link>
            <div
              className="bg-navy2 p-2 rounded-full"
              onClick={() => {
                mutate(deleteEvent(data.id));
                setOpen(false);
              }}
            >
              <AiFillDelete size={20} color="white" />
            </div>
          </div>

          <Image
            layout="responsive"
            height={120}
            width={240}
            src={data.image_path || image.src}
            className="overflow-hidden"
          />
        </div>

        <div className="p-10 bg-white">
          <p className="font-bold text-6xl mb-12">{data.name}</p>
          <article className="prose lg:prose-xl">
            <span
              dangerouslySetInnerHTML={{ __html: data.detail || markdown }}
            ></span>
          </article>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
