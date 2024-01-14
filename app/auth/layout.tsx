import { ReactNode } from "react";
import GuestLayout from "../components/layout/guestPanelLayout";

// This is a Server Component
export default function Layout({ children }: { children: ReactNode }) {
  return <GuestLayout>{children}</GuestLayout>;
}
