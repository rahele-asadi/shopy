"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

import useAuth from "@/app/hooks/useAuth";
import AdminSidebar from "../adminPanel/layout/sidebar";
import AdminHeader from "../adminPanel/layout/header";

interface Props {
  children: ReactNode;
}

const AdminPanelLayout = ({ children }: Props) => {
  const router = useRouter();
  const { user, error, loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (loading) return <h1>Loading ...</h1>;

  if (error) {
    // show error
    router.push("/auth/login");
    return <></>;
  }

  // if(! user?.is_admin ) {
  //     router.push('/')
  //     return <></>;
  // }

  return (
    <>
      <div>
        {/* Static sidebar for desktop */}
        <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className='flex flex-col md:pr-64'>
          <AdminHeader setSidebarOpen={setSidebarOpen} />

          <main className='flex-1'>
            <div className='py-5'>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
                <div className='py-4'>
                  <div className='max-h-full rounded-lg border-4 border-dashed border-gray-200'>
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminPanelLayout;
