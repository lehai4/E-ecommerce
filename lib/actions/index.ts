"use server";
import User from "@/models/User";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { connect } from "../utils/database";
import { generateToken, verifyToken } from "../utils/token";
import { FieldType } from "@/interface";
import sendEmail from "../utils/sendEmail";

const BASE_URL = process.env.NEXTAUTH_URL;
export async function signUpWithCredentials(data: FieldType) {
  try {
    await connect();
    const user = await User.findOne({ email: data.email });
    if (user) throw new Error("Email already exist!");
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 12);
    }

    const token = generateToken({ user: data });
    await sendEmail({
      to: data.email,
      url: `${BASE_URL}/verify?token=${token}`,
      text: "Verify Email",
    });

    return {
      msg: "Sign Up Success!.Check your email address to complete the registration",
    };
  } catch (err) {
    redirect(`/errors?error=${err}`);
  }
}

export async function verifyEmailWithCredentials(token: any) {
  try {
    const checkToken: any = await verifyToken(token);
    const { user } = checkToken;
    const useExist = await User.findOne({ email: user.email });

    if (useExist) {
      return {
        msg: "Verify Success!",
      };
    }
    await new User(user).save();
    return {
      msg: "Verify Success",
    };
  } catch (err) {
    redirect(`/errors?error=${err}`);
  }
}
