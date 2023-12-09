import { useAppSelector } from "@/app/hooks";
// import useAuth from "@/app/hooks/useAuth";
import { selectUser } from "@/app/store/auth";

const UserInfo = () => {
  // using of useAuth is simpler way to access user data
  // const { user } = useAuth();

  // another way is using redux
  const user = useAppSelector(selectUser);

  return (
    <h2>
      <span>UserName:</span>
      {user?.name}
    </h2>
  );
};

export default UserInfo;
