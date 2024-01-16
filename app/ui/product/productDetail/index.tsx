"use client";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { TypeCategory, TypeProduct, TypeReview } from "@/interface";
import { convertPathname } from "@/lib/utils/convertPathname";
import { getReviewMore } from "@/lib/utils/getSliceProduct";
import { commentTab } from "@/mockAPI";
import { AddToCart } from "@/redux/slice/cartSlice";
import { AddToWishList } from "@/redux/slice/wishListSlice";
import { SketchOutlined, HeartOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Divider,
  Form,
  Image,
  Input,
  InputNumber,
  List,
  Rate,
  Segmented,
  Space,
  Statistic,
  Typography,
} from "antd";
import { SegmentedValue } from "antd/es/segmented";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

type FieldType = {
  name?: string;
  email?: string;
  rating?: string;
  message?: string;
};
const ProductDetail = ({
  product,
  category,
  reviews,
}: {
  product: TypeProduct;
  category: TypeCategory[];
  reviews: TypeReview[];
}) => {
  const router = useRouter();
  const dispatcher = useAppDispatch();
  const wishListArrr = useAppSelector((state) => state.wishList.wishListArr);
  const { data: session } = useSession();

  const [form] = Form.useForm();
  const [current, setCurrent] = useState<SegmentedValue | string>(
    "Description"
  );
  const [toggle, setToggle] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number | null>(1);

  const handleReview = async (values: FieldType) => {
    let data = {
      ...values,
      rating: `${values.rating} Star`,
      image: session?.user?.image,
      productID: product._id,
    };
    const { productID, name, image, email, message, rating } = data;
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productID,
          name,
          image,
          email,
          message,
          rating,
        }),
      });
      if (res.ok) {
        toast.success("Create Review Done!");
        router.refresh();
      } else {
        throw new Error("Failed to create a review blog");
      }
    } catch (e) {
      console.log(e);
    }
    //reset Form after review successfully!
    form.resetFields();
  };
  const onChange = (value: number | null) => {
    setQuantity(value);
  };
  const handleAddToCart = () => {
    if (session?.user === undefined) {
      toast.info("Please login account");
      router.push("/auth/signin");
    } else {
      let customProduct = {
        ...product,
        quantity: quantity ?? 1,
        total: Number(quantity) * product.price,
      };
      dispatcher(AddToCart(customProduct));
      toast.success("Add To Cart Done!");
    }
  };
  // convert ObjectKey for Specification
  const objectKeys = Object.keys(product.specification);

  //limitedReiview
  const limitedRevieve = toggle ? getReviewMore(3, reviews) : reviews;

  // overallReview
  const overallReview = useCallback(() => {
    return reviews.reduce((acc, current) => {
      return (acc + Number(current.rating.split(" ")[0])) / reviews.length;
    }, 0);
  }, [reviews]);
  return (
    <div className="container">
      {/* details product */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 -mx-[15px]">
        <Image
          className="px-[15px]"
          src={product.image}
          alt={product.name}
          preview={false}
        />
        <div className="px-[15px] xl:ml-[95px] lg:ml-[90px]">
          <div className="mt-[65px] xl:-ml-[15px] lg:-ml-[15px]">
            <h3 className="text-[24px] font-[600] mb-[5px] tracking-tighter">
              {product.name}
            </h3>
            <Space className="flex flex-row items-center mb-[10px]">
              <span className="text-[24px] font-[700] text-blue-700">$</span>
              <Statistic
                value={product.price}
                precision={2}
                valueStyle={{ fontSize: 24, color: "#384aeb" }}
                className="font-[700]"
              />
            </Space>
            <Space direction="vertical" align="start">
              <Space>
                <Typography.Text className="text-base font-[400]">
                  Category:
                </Typography.Text>
                {category.map((cate, i) => {
                  if (cate._id === product.categoryID) {
                    return (
                      <Typography.Text
                        key={i}
                        className="text-base font-[400]  text-gray-500"
                      >
                        {cate.catelog}
                      </Typography.Text>
                    );
                  }
                })}
              </Space>
              <Space>
                <Typography.Text className="text-base font-[400]">
                  Availability:
                </Typography.Text>
                {product.quantity > 0 ? (
                  <Typography.Text className="text-base font-[400] text-gray-500">
                    In Stock
                  </Typography.Text>
                ) : (
                  <Typography.Text className="text-base font-[400] text-gray-500">
                    "Out of Stock"
                  </Typography.Text>
                )}
              </Space>
            </Space>
            <Divider />
            <Typography.Paragraph
              className="text-base font-[400] text-gray-500"
              ellipsis={{ rows: 4 }}
            >
              {product.des}
            </Typography.Paragraph>
            <Divider />
            <Space
              direction="horizontal"
              align="center"
              className="items-center w-full"
            >
              <Typography.Text>Quantity:</Typography.Text>
              <InputNumber
                size="middle"
                width="250"
                min={1}
                max={10}
                defaultValue={1}
                onChange={onChange}
              />
              <button
                className="rounded-full border border-blue-600 text-base px-[25px] md:px-[30px] lg:px-[42px] py-[8px] md:py-[12px] lg:py-[12px] bg-blue-600 text-white hover:text-blue-600 hover:bg-white duration-300 ease-in"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </Space>
            <Space direction="horizontal" align="start" className="mt-[35px]">
              <Button
                icon={<SketchOutlined />}
                className="flex items-center justify-center bg-gray-100"
                size="large"
              />
              <Button
                icon={<HeartOutlined />}
                className="flex items-center justify-center bg-gray-100"
                size="large"
                onClick={() => {
                  let flag = true;
                  wishListArrr.filter((item) => {
                    if (item._id === product._id) {
                      flag = false;
                    } else if (item._id !== product._id) {
                      flag = true;
                    }
                  });
                  flag === true
                    ? dispatcher(AddToWishList(product)) &&
                      toast.success("Add WishList successfully!")
                    : toast.error(
                        "Add WishList Failed!. The product already exists in the wishlist"
                      );
                }}
              />
            </Space>
          </div>
        </div>
      </div>
      {/* Page infomation product */}
      <Card
        title={
          <div className="text-center">
            <Segmented
              value={current}
              onChange={(value) => setCurrent(value)}
              options={commentTab.map((item) => item.title)}
              width={"100%"}
              className="text-[16px]"
            />
          </div>
        }
        className="mt-[60px]"
      >
        <div>
          {current === "Description" ? (
            <span>{product.des}</span>
          ) : current === "Specification" ? (
            <List>
              <List.Item style={{ display: "inherit" }}>
                <div className="flex flex-row items-center">
                  <span className="flex flex-1">{objectKeys[0]}</span>
                  <span>{product.specification?.Width}</span>
                </div>
              </List.Item>
              <List.Item style={{ display: "inherit" }}>
                <div className="flex flex-row items-center">
                  <span className="flex flex-1">{objectKeys[1]}</span>
                  <span>{product.specification?.Height}</span>
                </div>
              </List.Item>
              <List.Item style={{ display: "inherit" }}>
                <div className="flex flex-row items-center">
                  <span className="flex flex-1">{objectKeys[2]}</span>
                  <span>{product.specification?.Depth}</span>
                </div>
              </List.Item>
              <List.Item style={{ display: "inherit" }}>
                <div className="flex flex-row items-center">
                  <span className="flex flex-1">{objectKeys[3]}</span>
                  <span>{product.specification?.Weight}</span>
                </div>
              </List.Item>
            </List>
          ) : current === "Comments" ? (
            <span>There are no comments yet. Be the first to comment</span>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 -mx-[15px]">
              {/* Review Blog*/}
              <Space direction="vertical" className="px-[15px]">
                {reviews.length === 0 ? (
                  <>There are no reviews yet. Be the first to review</>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-x-4">
                      <div className="bg-gray-50 px-[15px] py-[20px] text-center">
                        <h3 className="text-[24px] font-[600] tracking-tighter">
                          Overall
                        </h3>
                        <Statistic
                          value={overallReview()}
                          precision={1}
                          valueStyle={{ fontSize: 36, color: "#384aeb" }}
                          className="font-[700]"
                        />
                        <Typography.Text>{`(${reviews.length} Reviews)`}</Typography.Text>
                      </div>
                      <div className="px-[15px]">
                        <h3 className="text-[18px] font-[600] tracking-tighter">
                          Base on {reviews.length} Reviews
                        </h3>
                        <div className="mt-[5px]">
                          {reviews.map((review, i) => (
                            <div className="flex flex-row items-center" key={i}>
                              <Typography.Text className="text-[15px]">
                                {review.rating}
                              </Typography.Text>
                              <Rate
                                allowHalf
                                disabled
                                className="flex flex-1 xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[14px]"
                                value={Number(review.rating.split(" ")[0])}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/*Limited show review */}
                    <div className="mt-[8px] md:mt-[12px] lg:mt-[18px] xl:mt-[20px]">
                      {reviews.length > 3 ? (
                        <>
                          {limitedRevieve.map((review, i) => (
                            <div className="flex flex-col gap-y-1" key={i}>
                              <Space style={{ columnGap: 12 }}>
                                <Image
                                  src={review.image}
                                  alt={review.name}
                                  preview={false}
                                  width={50}
                                  className="rounded-full"
                                />
                                <Space direction="vertical">
                                  <Typography.Text className="font-semibold text-base">
                                    {review.name}
                                  </Typography.Text>
                                  <Rate
                                    allowHalf
                                    disabled
                                    value={Number(review.rating.split(" ")[0])}
                                  />
                                </Space>
                              </Space>
                              <Typography.Paragraph className="text-gray-500 text-base">
                                {review.message}
                              </Typography.Paragraph>
                            </div>
                          ))}
                          {toggle ? (
                            <button
                              className="rounded-full border border-blue-600 text-base px-[25px] md:px-[30px] lg:px-[42px] py-[8px] md:py-[12px] lg:py-[12px] bg-blue-600 text-white hover:text-blue-600 hover:bg-white duration-300 ease-in"
                              onClick={() => setToggle(false)}
                            >
                              See More
                            </button>
                          ) : (
                            <button
                              className="rounded-full border border-blue-600 text-base px-[25px] md:px-[30px] lg:px-[42px] py-[8px] md:py-[12px] lg:py-[12px] bg-blue-600 text-white hover:text-blue-600 hover:bg-white duration-300 ease-in"
                              onClick={() => setToggle(true)}
                            >
                              Collapse
                            </button>
                          )}
                        </>
                      ) : (
                        reviews.map((review, i) => (
                          <div className="flex flex-col gap-y-1" key={i}>
                            <Space style={{ columnGap: 12 }}>
                              <Image
                                src={review.image}
                                alt={review.name}
                                preview={false}
                                width={50}
                                className="rounded-full"
                              />
                              <Space direction="vertical">
                                <Typography.Text className="font-semibold text-base">
                                  {review.name}
                                </Typography.Text>
                                <Rate
                                  allowHalf
                                  disabled
                                  value={Number(review.rating.split(" ")[0])}
                                />
                              </Space>
                            </Space>
                            <Typography.Paragraph className="text-gray-500 text-base">
                              {review.message}
                            </Typography.Paragraph>
                          </div>
                        ))
                      )}
                    </div>
                  </>
                )}
              </Space>
              {/* form review */}
              <div className="px-[15px]">
                <h3 className="text-[20px] font-[600] tracking-tighter">
                  Add a Review
                </h3>
                <Form
                  form={form}
                  onFinish={handleReview}
                  initialValues={{ remember: true }}
                  autoComplete="off"
                >
                  <Form.Item<FieldType>
                    name="rating"
                    label="Your rating:"
                    rules={[{ required: true, message: "Please vote rating!" }]}
                  >
                    <Rate allowHalf />
                  </Form.Item>

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
                    name="message"
                    rules={[
                      {
                        required: true,
                        message: "Please enter input your email address",
                      },
                    ]}
                  >
                    <Input.TextArea placeholder="Enter message" size="large" />
                  </Form.Item>
                  <button className="rounded-full border border-blue-600 text-base px-[25px] md:px-[30px] lg:px-[42px] py-[8px] md:py-[12px] lg:py-[12px] bg-blue-600 text-white hover:text-blue-600 hover:bg-white duration-300 ease-in">
                    Review Now
                  </button>
                </Form>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ProductDetail;
