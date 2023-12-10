import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

type ResponseData = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("shopy_login_token", "", {
      httpOnly: true,
      maxAge: 0,
      sameSite: "lax",
      // for real server
      // domain:'',
      // secure : true,
    }),
  );

  res.status(200).json({ message: "success" });
}
