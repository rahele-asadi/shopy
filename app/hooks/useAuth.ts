"use client";

import useSWR from "swr";
import callApi from "../helpers/callApi";
import Cookies from "universal-cookie";
import { useAppDispatch } from ".";
import { updateUser } from "../store/auth";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const cookie = new Cookies();

  const { data, error } = useSWR("my-user", () => {
    return callApi().get("/user", {
      headers: { authorization: cookie.get("shopy-login-token") },
    });
  });

  dispatch(updateUser(data?.data.user));

  return { user: data?.data?.user, error, loading: !data && !error };
};

export default useAuth;
