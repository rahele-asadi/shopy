import AdminPanelLayout from "@/app/components/layout/adminPanelLayout";
import { ReactNode } from "react";

// This is a Server Component
export default function Layout({ children }: { children: ReactNode }) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
