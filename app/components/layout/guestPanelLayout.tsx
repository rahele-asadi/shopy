"use client";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GuestLayout = ({ children }: Props) => {
  const router = useRouter();
  const { user } = useAuth();

  if (user) {
    router.push("/admin");
    return <>loading....</>;
  }

  return <div>{children}</div>;
};

export default GuestLayout;
