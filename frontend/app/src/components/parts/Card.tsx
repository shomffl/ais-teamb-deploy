import image from "../../assets/railroad-163518__480.jpg";
import Badge from "./Badge";

const Card = () => {
  return (
    <div className="w-96 rounded-lg overflow-hidden shadow-lg">
      <img className="w-full h-48" src={image} alt="Sunset in the mountains" />
      <div className="px-6 pt-4">
        <div className=" text-2xl mb-2 text-left">The Coldest Sunset</div>
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
          <p>Company</p>
        </div>
        <div className="justify-self-end">
          <p>10/4~</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
