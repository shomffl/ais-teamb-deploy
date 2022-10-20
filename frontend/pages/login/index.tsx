import DefaultButton from "../../components/atoms/button/Default";
import Input from "../../components/atoms/input/DefaultInput";

const index = () => {
  return (
    <div className="h-screen w-screen bg-navy2 grid place-content-center">
      <div className="w-fit  mx-auto text-center space-y-4">
        <p className="text-blue2-light text-6xl font-bold mb-10">Sign In</p>
        <div>
          <Input type="text" placeholder="Email" />
        </div>
        <div>
          <Input type="password" placeholder="Password" />
        </div>
        <div>
          <DefaultButton>Sign In</DefaultButton>
        </div>
      </div>
    </div>
  );
};

export default index;
