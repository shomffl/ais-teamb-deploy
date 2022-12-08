import Link from "next/link";
import { useForm } from "react-hook-form";
import { signUp } from "../../../api/auth";
import DefaultButton from "../../../components/atoms/button/Default";
import Input from "../../../components/atoms/input/DefaultInput";

const index = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data: any) => {
    const createFormData = () => {
      const formData = new FormData();
      formData.append("user[email]", data.email);
      formData.append("user[name]", data.name);
      formData.append("user[password]", data.password);
      formData.append(
        "user[password_confirmation]",
        data.password_confirmation
      );
      return formData;
    };
    const authBody = createFormData();
    signUp(authBody);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-screen w-screen bg-navy2 grid place-content-center">
        <div className="w-fit  mx-auto text-center space-y-4">
          <p className="text-blue2-light text-6xl font-bold mb-10">Sign Up</p>

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
              register={register("password")}
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <Input
              register={register("password_confirmation")}
              type="password"
              placeholder="Password Confirmation"
            />
          </div>
          <div>
            <DefaultButton>Sign In</DefaultButton>
          </div>
          <Link href="/company/signin">
            <a className="text-white2 font-semibold underline mt-2">
              サインイン
            </a>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default index;
