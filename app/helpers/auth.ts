import Cookies from "universal-cookie";

const saveLoginToken = (token: string, days: number = 1) => {
  const cookies = new Cookies();
  cookies.set("shopy-login-token", token, {
    path: "/",
    maxAge: days * 24 * 3600,
  });
};

export { saveLoginToken };
