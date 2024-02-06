import { FieldType } from "@/interface";
import jwt, { JwtPayload } from "jsonwebtoken";

export const generateToken = (payload: { user: FieldType }) => {
  return jwt.sign(payload, `${process.env.TOKEN_SECRET}`, {
    expiresIn: "1d",
  }) as string;
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, `${process.env.TOKEN_SECRET}`) as JwtPayload;
};
