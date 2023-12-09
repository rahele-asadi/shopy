import { ReactNode } from "react";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
}

const AdminPanelLayout = ({ children }: Props) => {
  const router = useRouter();
  const { user, error, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    router.push("/auth/login");
    return <></>;
  }

  if (!user?.is_admin) {
    router.push("/auth/login");
    return <></>;
  }

  return <div className='text-2xl'>{children}</div>;
};

export default AdminPanelLayout;
