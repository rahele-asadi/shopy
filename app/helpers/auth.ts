import Cookies from "universal-cookie";

const saveLoginToken = async (token: string, days: number = 1) => {
  // this way is for without httponly flag
  // const cookies = new Cookies();
  // cookies.set("shopy_login_token", token, {
  //   path: "/",
  //   maxAge: days * 24 * 3600,
  // });

  // with httponly flag
  // in here browser send a request to next server with token in body
  await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
};

const removeLoginToken = async () => {
  // this way is for when cookies are without httponly flag
  // const cookies = new Cookies();
  // await cookies.remove("shoy_login_token");

  await fetch("/api/logout", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  });
};

export { saveLoginToken, removeLoginToken };
