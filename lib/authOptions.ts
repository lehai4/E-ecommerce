import { connect } from "@/lib/utils/database";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { CLIENT_ID, CLIENT_SECRET } from "@/config";
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: CLIENT_ID as string,
      clientSecret: CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@gmail.com",
          required: true,
          match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g],
        },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        const { email, password } = credentials as any;
        const user = await signInWithCredentials({ email, password });
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/errors",
  },
  secret: process.env.SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.type === "oauth") {
        return await signInWithOAuth({ account, profile });
      } else {
        return true;
      }
    },
    async jwt({ token }) {
      const user = await getUserByEmail({ email: token.email });
      token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user || "";
      return session;
    },
  },
};
export async function signInWithOAuth({
  account,
  profile,
}: {
  account: any;
  profile: any;
}) {
  await connect();
  const user = await User?.findOne({ email: profile.email });
  // login
  if (user) return true;

  // !user =>register =>login
  const newUser = new User({
    name: profile.name,
    email: profile.email,
    provider: account.provider,
    image: profile.picture,
  });
  await newUser.save();
  return true;
}
export async function getUserByEmail({ email }: { email: any }) {
  const user = await User?.findOne({ email }).select("-password");

  if (!user) throw new Error(`Email does not exist!`);
  return { ...user._doc, _id: user._id.toString() };
}
export async function signInWithCredentials({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  await connect();
  const user = await User?.findOne({ email });
  if (!user) throw new Error(`Email does not exist!`);

  const compare = await bcrypt.compare(password, user.password);
  if (!compare) {
    throw new Error(`Password does not match!`);
  }
  return { ...user._doc, _id: user._id.toString() };
}
