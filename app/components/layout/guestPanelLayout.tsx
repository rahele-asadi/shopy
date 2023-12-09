import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GuestLayout = ({ children }: Props) => {
  const router = useRouter();
  const { user } = useAuth();

  if (user) {
    router.push("/panel");
    return <></>;
  }

  return <div>{children}</div>;
};

export default GuestLayout;
