"use client";
import { Form, Input, Space, Typography } from "antd";
import { contact } from "@/mockAPI";
import { toast } from "react-toastify";

type FieldType = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};
const ContactInfo = () => {
  const [form] = Form.useForm();
  const handleSendMessage = () => {
    toast.info("Function send message not run!!");
    form.resetFields();
  };
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-4 md:gap-0 lg:gap-0 xl:gap-0">
        {/* Contact Info */}
        <div className="col-span-1">
          <Space direction="vertical">
            {contact.map((contact) => (
              <Space
                direction="horizontal"
                style={{ columnGap: 18 }}
                key={contact.id}
              >
                <span className="text-sky-600 text-[20px]">{contact.icon}</span>
                <div className="flex flex-col">
                  <Typography.Text className="font-bold text-[17px] tracking-tighter">
                    {contact.title}
                  </Typography.Text>
                  <Typography.Paragraph className="mb-[0px] font-normal tracking-tighter">
                    {contact.info}
                  </Typography.Paragraph>
                </div>
              </Space>
            ))}
          </Space>
        </div>
        {/* Contact Form */}
        <div className="xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1">
          <Form
            initialValues={{ remember: true }}
            onFinish={handleSendMessage}
            form={form}
          >
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 xl:gap-8 lg:gap-8">
              <div>
                <Form.Item<FieldType>
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input placeholder="Enter your name" size="large" />
                </Form.Item>

                <Form.Item<FieldType>
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please enter input your email address",
                    },
                  ]}
                >
                  <Input placeholder="Enter email address" size="large" />
                </Form.Item>

                <Form.Item<FieldType>
                  name="subject"
                  rules={[
                    { required: true, message: "Please input your subject!" },
                  ]}
                >
                  <Input placeholder="Enter subject" size="large" />
                </Form.Item>
              </div>
              <div>
                <Form.Item<FieldType>
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <Input.TextArea
                    placeholder="Enter message"
                    size="large"
                    rows={6}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="xl:text-right lg:text-right md:text-right sm:text-right text-center">
              <button
                className="border border-blue-600 text-base px-[25px] md:px-[28px] lg:px-[30px] py-[8px] md:py-[8px] lg:py-[10px] bg-blue-600 text-white hover:text-blue-600 hover:bg-white duration-300 ease-in"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
