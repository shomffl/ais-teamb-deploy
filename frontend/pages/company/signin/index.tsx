import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "../../../api/auth";
import DefaultButton from "../../../components/atoms/button/Default";
import Input from "../../../components/atoms/input/DefaultInput";

const index = () => {
  const { control, register, handleSubmit, watch } = useForm();
  const onSubmit = (data: any) => {
    const createFormData = () => {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      return formData;
    };
    const authBody = createFormData();
    signIn(authBody);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-screen w-screen bg-navy2 grid place-content-center">
        <div className="w-fit  mx-auto text-center space-y-4">
          <p className="text-blue2-light text-6xl font-bold mb-10">Sign In</p>
          <div>
            <Input
              register={register("email")}
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <Input
              register={register("password")}
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <DefaultButton>Sign In</DefaultButton>
          </div>
          <Link href="/company/signup">
            <a className="text-white2 font-semibold underline mt-2">
              アカウント作成
            </a>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default index;
