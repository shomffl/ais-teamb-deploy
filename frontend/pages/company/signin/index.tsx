import { useForm } from "react-hook-form";
import DefaultButton from "../../../components/atoms/button/Default";
import Input from "../../../components/atoms/input/DefaultInput";

const index = () => {
  const { control, register, handleSubmit, watch } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="h-screen w-screen bg-navy2 grid place-content-center">
      <div className="w-fit  mx-auto text-center space-y-4">
        <p className="text-blue2-light text-6xl font-bold mb-10">Sign In</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input register={register("name")} type="text" placeholder="Name" />
          </div>
          <div>
            <Input
              register={register("email")}
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <Input
              register={register("email")}
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <DefaultButton>Sign In</DefaultButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
