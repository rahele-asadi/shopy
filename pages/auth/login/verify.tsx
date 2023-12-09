import VerifyForm from "@/app/forms/auth/verifyForm";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectPhoneVerifyToken, updatePhoneVerifyToken } from "@/app/store/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import GuestLayout from "@/app/components/layout/guestPanelLayout";

const VerifyLogin: NextPageWithLayout = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const clearPhoneVerifyToken = () => {
    dispatch(updatePhoneVerifyToken(undefined));
  };

  const token = useAppSelector(selectPhoneVerifyToken);
  console.log(token);

  useEffect(() => {
    router.beforePopState(() => {
      clearPhoneVerifyToken();
      return true;
    });

    if (token === undefined) {
      router.push("/auth/login");
    }
  }, [token]);

  return (
    <div className='min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <img
          className='mx-auto h-12 w-auto'
          src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
          alt='Workflow'
        />
        <h2 className='mt-6 text-center text-3xl tracking-tight font-bold text-gray-900'>
          Verify Phone Number
        </h2>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <VerifyForm token={token} router={router} clearToken={clearPhoneVerifyToken} />
        </div>
      </div>
    </div>
  );
};

VerifyLogin.getLayout = (page) => <GuestLayout>{page}</GuestLayout>;

export default VerifyLogin;
