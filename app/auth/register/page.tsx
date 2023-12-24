"use client";
import AuthForm from "@/app/ui/auth/AuthForm";
import BannerPage from "@/app/ui/bannerPage";
import { Typography } from "antd";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <main className="main-content">
      <BannerPage title="Register" />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 container py-[36px] sm:py-[40px] md:py-[45px] lg:py-24 xl:py-24">
        <div className="bg-blue-600 h-[350px] sm:h-[350px] md:h-[610px] lg:h-[610px] xl:h-[610px]">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Typography.Text
              strong
              className="text-[22px] tracking-tighter font-bold text-white"
            >
              Already have an account?
            </Typography.Text>
            <Typography.Paragraph className="max-w-[390px] text-[16px] tracking-tight text-white">
              There are advances being made in science and technology everyday,
              and a good example of this is the
            </Typography.Paragraph>

            <button className="rounded-full border border-slate-100 text-base px-[25px] md:px-[30px] lg:px-[42px] py-[8px] md:py-[12px] lg:py-[12px] bg-blue-600 text-white hover:text-blue-600 hover:bg-white duration-300 ease-in">
              <Link href={`/auth/signin`}>SignIn Now</Link>
            </button>
          </div>
        </div>
        <div className="relative mx-auto border-slate-200 shadow-lg flex w-full flex-col space-y-2.5 p-4">
          <div className="py-[48px]">
            <Typography.Text className="flex items-center justify-center font-bold text-[20px] tracking-tighter">
              SIGN IN TO ENTER
            </Typography.Text>
          </div>
          <div className="px-24">
            <AuthForm />
          </div>
        </div>
      </div>
    </main>
  );
};
export default RegisterPage;
