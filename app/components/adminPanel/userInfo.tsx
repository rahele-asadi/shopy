import { removeLoginToken } from "@/app/helpers/auth";
import { useAppSelector } from "@/app/hooks";
// import useAuth from "@/app/hooks/useAuth";
import { selectUser } from "@/app/store/auth";
import { useRouter } from "next/router";

const UserInfo = () => {
  // using of useAuth is simpler way to access user data
  // const { user } = useAuth();

  const router = useRouter();

  // another way is using redux
  const user = useAppSelector(selectUser);

  const handleLogout = async () => {
    await removeLoginToken();
    await router.push("/");
  };

  return (
    <h2>
      <span>UserName:</span>
      {user?.name}
      <button onClick={handleLogout}>Logout</button>
    </h2>
  );
};

export default UserInfo;
