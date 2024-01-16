"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { coupon } from "@/mockAPI";
import {
  AddAllItemCart,
  clearAllCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/slice/cartSlice";
import {
  Button,
  Divider,
  Image,
  Input,
  InputNumber,
  Radio,
  RadioChangeEvent,
  Space,
  Statistic,
  Table,
  Typography,
} from "antd";
import Column from "antd/es/table/Column";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
interface DataType {
  key: any;
  name: string;
  image: string;
  price: number | string;
  quantity: number;
  total: number | string;
}

const Cart = () => {
  const { data: session } = useSession();
  const cartArr = useAppSelector((state) => state.cart.cartArr);
  const router = useRouter();
  const dispatcher = useAppDispatch();

  const [value, setValue] = useState<string>("Free Shipping");
  const [couponCode, setCouPonCode] = useState<string>("");
  const [overCartArr, setOverCartArr] = useState(cartArr);
  const [flagCode, setFlagCode] = useState<boolean>(false);

  const dataSource: DataType[] = overCartArr.map((cart) => {
    return {
      key: cart._id,
      image: cart.image,
      name: cart.name,
      price: cart.price,
      quantity: cart.quantity,
      total: `${cart.total || cart.price}`,
    };
  });

  const onChange = (
    value: number | null,
    quantity: number | null,
    _: DataType
  ) => {
    if (Number(value) > Number(quantity)) {
      console.log("increase...");
      let data = {
        _id: _.key,
        quantity: Number(value),
      };
      dispatcher(increaseQuantity(data));
    } else {
      console.log("decrease...");
      let data = {
        _id: _.key,
        quantity: Number(value),
      };
      dispatcher(decreaseQuantity(data));
    }
  };

  const handleApplyCouPon = () => {
    const result = coupon.find((c) => c.code === couponCode);
    if (result !== undefined) {
      setOverCartArr(
        overCartArr.map((item: any) => {
          return {
            ...item,
            price: item.price - (item.price * Number(result?.info[0])) / 100,
            total: item.price - (item.price * Number(result?.info[0])) / 100,
          };
        })
      );
      setFlagCode(true);
      toast.success("Apply coupon done!");
    } else {
      toast.error("Invalid coupon");
    }
  };
  const handleUpdateCart = () => {
    dispatcher(AddAllItemCart(overCartArr));
    toast.success("Update cart done!");
  };
  const handleShipping = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  const handlePayment = () => {
    if (session?.user === undefined) {
      toast.info("Please login for purchase");
      router.push("/auth/signin");
    } else {
      toast.success("Successful purchase.");
      dispatcher(clearAllCart());
    }
  };
  const subTotal = useMemo(() => {
    return cartArr.reduce((acc, arr) => {
      return acc + arr.quantity * arr.price;
    }, 0);
  }, [cartArr]);

  useEffect(() => {
    setOverCartArr(cartArr);
  }, [cartArr]);
  return (
    <div className="container">
      <div className="py-[80px]">
        {cartArr.length === 0 ? (
          <Space
            align="center"
            className="flex justify-center items-center"
            direction="vertical"
          >
            <Image
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9bdd8040b334d31946f49e36beaf32db.png"
              width={100}
              preview={false}
            />
            <Typography.Text strong className="text-[16px]">
              Your shopping cart is empty
            </Typography.Text>
            <button
              className="rounded-full border border-blue-600 text-base px-[25px] md:px-[30px] lg:px-[42px] py-[8px] md:py-[12px] lg:py-[12px] bg-blue-600 text-white hover:text-blue-600 hover:bg-white duration-300 ease-in"
              onClick={() => {
                router.push("/product");
              }}
            >
              Continue Shopping
            </button>
          </Space>
        ) : (
          <>
            <Table dataSource={dataSource} pagination={false}>
              <Column
                title="Product"
                dataIndex="image"
                key="image"
                render={(image: string) => (
                  <Image src={image} alt={image} width={100} />
                )}
              />
              <Column
                dataIndex="name"
                key="name"
                render={(name: string) => (
                  <Typography.Text strong className="text-[16px]">
                    {name}
                  </Typography.Text>
                )}
              />
              <Column
                title="Price"
                dataIndex="price"
                key="price"
                render={(price: string) => (
                  <div className="flex flex-row items-center text-[16px] font-medium">
                    $
                    <Statistic
                      value={price}
                      precision={2}
                      valueStyle={{ fontSize: 16 }}
                    />
                  </div>
                )}
              />
              <Column
                title="Quantity"
                dataIndex="quantity"
                key="quantity"
                render={(quantity: number, _: DataType) => (
                  <InputNumber
                    size="middle"
                    width="250"
                    min={1}
                    max={10}
                    defaultValue={1}
                    value={quantity}
                    onChange={(e) => onChange(e, quantity, _)}
                  />
                )}
              />
              <Column
                title="Total"
                dataIndex="total"
                key="total"
                render={(total: number | string) => (
                  <div className="flex flex-row items-center text-[16px] font-medium">
                    $
                    <Statistic
                      value={total}
                      precision={2}
                      valueStyle={{ fontSize: 16 }}
                    />
                  </div>
                )}
              />
            </Table>

            <Space
              direction="horizontal"
              className="flex items-center justify-between pt-[22px]"
            >
              <Button
                shape="round"
                size="large"
                className="leading-normal font-semibold bg-gray-50"
                onClick={handleUpdateCart}
              >
                Update
              </Button>
              {!flagCode ? (
                <Space direction="horizontal">
                  <Input
                    placeholder="Coupon Code"
                    size="large"
                    className="rounded-full"
                    value={couponCode}
                    onChange={(e) => setCouPonCode(e.target.value)}
                  />
                  <Button
                    shape="round"
                    size="large"
                    className="leading-normal font-semibold bg-blue-600"
                    type="primary"
                    onClick={handleApplyCouPon}
                  >
                    Apply
                  </Button>
                  <Button
                    size="large"
                    shape="round"
                    className="leading-normal font-semibold"
                    onClick={() => {
                      toast.info("Giving you a 3% discount code");
                      toast.info("Code: aws-100");
                    }}
                  >
                    Have a Coupon?
                  </Button>
                </Space>
              ) : (
                <div className="text-right">
                  <Typography.Text className="text-[16px]">
                    You have applied the discount code is&nbsp;
                    <span className="italic font-semibold">{couponCode}</span>
                  </Typography.Text>
                </div>
              )}
            </Space>

            <Divider />
            <Space direction="horizontal" className="flex justify-between">
              <div></div>
              <Space>
                <Typography.Text strong className="text-[16px]">
                  SubTotal
                </Typography.Text>
                <div className="flex flex-row items-center text-[16px] font-medium">
                  $
                  <Statistic
                    value={subTotal}
                    precision={2}
                    valueStyle={{ fontSize: 16 }}
                  />
                </div>
              </Space>
            </Space>
            <Divider />
            <Space direction="horizontal" className="flex justify-between">
              <div></div>
              <Space>
                <Typography.Text strong className="text-[16px]">
                  Shipping
                </Typography.Text>
                <Radio.Group onChange={handleShipping} value={value}>
                  <Space direction="vertical">
                    <Radio value="Free Shipping">Free Shipping</Radio>
                    <Radio value="Fast Delivery">Fast Delivery: $10.00</Radio>
                    <Radio value="Local Delivery">Local Delivery: $2.00</Radio>
                  </Space>
                </Radio.Group>
              </Space>
            </Space>
            <Divider />
            <Space direction="horizontal" className="flex justify-between">
              <div></div>
              <Space>
                <Button
                  shape="round"
                  size="large"
                  className="leading-normal font-semibold bg-gray-50"
                  onClick={() => {
                    router.push("/product");
                  }}
                >
                  Continue Shopping
                </Button>
                <Button
                  shape="round"
                  size="large"
                  className="leading-normal font-semibold bg-blue-600"
                  type="primary"
                  onClick={handlePayment}
                >
                  Payment
                </Button>
              </Space>
            </Space>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
