"use client";

import VerifyForm from "@/app/forms/auth/verifyForm";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectPhoneVerifyToken, updatePhoneVerifyToken } from "@/app/store/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const VerifyLogin = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const clearPhoneVerifyToken = () => {
    dispatch(updatePhoneVerifyToken(undefined));
  };

  const token = useAppSelector(selectPhoneVerifyToken);
  console.log(token);

  useEffect(() => {
    // in Next.js 13 this method not exist, these lines are for when back in page, token remove
    // and by next and back page, remove token for better security
    // router.beforePopState(() => {
    //   clearPhoneVerifyToken();
    //   return true;
    // });

    if (token === undefined) {
      router.push("/auth/login");
    }

    // in strictMode for react this line run in mount and unmount page too, while we need run this code in unmount only
    return () => {
      clearPhoneVerifyToken();
    };
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

export default VerifyLogin;
