import { ReactNode } from "react";
import UserPanelLayout from "../components/layout/userPanelLayout";

// This is a Server Component
export default function Layout({ children }: { children: ReactNode }) {
  return <UserPanelLayout>{children}</UserPanelLayout>;
}
