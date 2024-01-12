"use client";
import { FieldType } from "@/interface";
import { signUpWithCredentials } from "@/lib/actions";
import { Button, Checkbox, Form, Input } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
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

            <Form.Item<FieldType> name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-500 w-full"
                shape="round"
              >
                Sign In
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                icon={<GoogleOutlined />}
                className="w-full"
              >
                Login with Google
              </Button>
            </Form.Item>
          </>
        ) : (
          <>
            <Form.Item<FieldType>
              label="Username"
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

            <Form.Item<FieldType> name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
                className="bg-blue-500 w-full"
              >
                Register
              </Button>
            </Form.Item>
          </>
        )}
      </Form>
    </>
  );
};

export default AuthForm;
