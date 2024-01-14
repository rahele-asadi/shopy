"use client";
import { ReactNode } from "react";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
}

const UserPanelLayout = ({ children }: Props) => {
  const router = useRouter();
  const { user, error, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    router.push("/auth/login");
    return <></>;
  }

  return <div className='text-2xl'>{children}</div>;
};

export default UserPanelLayout;
