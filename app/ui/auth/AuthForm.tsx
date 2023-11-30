"use client";
import { FieldType } from "@/interface";
import { signUpWithCredentials } from "@/lib/actions";
import { Button, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
const AuthForm = () => {
  const pathname = usePathname();

  const handleLogin = async (values: FieldType) => {
    const { email, password } = values;
    await signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: "/",
    });
  };

  const handleSignUp = async (values: FieldType) => {
    const { name, password, email } = values;
    const res = await signUpWithCredentials({
      name,
      password,
      email,
    });
    if (res?.msg) {
      toast.success(res.msg);
    } else {
      toast.error(res.msg);
    }
  };

  const handleFinished = (values: FieldType) => {
    pathname === "/auth/signin" ? handleLogin(values) : handleSignUp(values);
  };

  return (
    <>
      <Form
        name="login"
        layout="vertical"
        initialValues={{ remember: true }}
        className="mt-24"
        onFinish={handleFinished}
      >
        {pathname === "/auth/signin" ? (
          <>
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[
                { required: true },
                { whitespace: true },
                { message: "Please input your email!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true },
                {
                  message: "Please input your password",
                },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>
            <Form.Item className="flex justify-end ">
              <Link href={`/auth/register`} style={{ fontStyle: "italic" }}>
                Do you have account?
              </Link>
            </Form.Item>

            <Form.Item className="flex justify-end">
              <Button type="primary" htmlType="submit" className="bg-blue-500">
                Login
              </Button>
            </Form.Item>
          </>
        ) : (
          <>
            <Form.Item<FieldType>
              label="username"
              name="name"
              rules={[
                { required: true },
                { whitespace: true },
                { message: "Please input your username!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true },
                {
                  message: "Please input your password",
                },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[
                { required: true },
                {
                  message: "Please input your email",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item className="flex  justify-end">
              <div className="flex justify-between gap-4 items-center">
                <Button type="primary" className="bg-blue-500">
                  <Link href="/auth/signin">Back</Link>
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-blue-500"
                >
                  Register
                </Button>
              </div>
            </Form.Item>
          </>
        )}
      </Form>
      {pathname === "/auth/signin" && (
        <Button onClick={() => signIn("google", { callbackUrl: "/" })}>
          Login with Google
        </Button>
      )}
    </>
  );
};

export default AuthForm;
