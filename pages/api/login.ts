import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

type ResponseData = {
  message: string;
};

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    token: string;
  };
}

export default function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("shopy_login_token", req?.body.token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
      // for real server
      // domain:'',
      // secure : true,
    }),
  );
  console.log(req.body);
  res.status(200).json({ message: "success" });
}
