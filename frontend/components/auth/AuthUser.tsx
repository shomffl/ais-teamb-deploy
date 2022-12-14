import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userState } from "../../atom/user";

const AuthUser = (children: any) => {
  const user = useRecoilValue(userState);
  const router = useRouter();
  if (user.id && user.id !== 0) {
    return <div>{children}</div>;
  } else {
    router.replace("/company/signin");
    return null;
  }
};

export default AuthUser;
