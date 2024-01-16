"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { TypeProduct } from "@/interface";
import {
  clearAllWishList,
  deleteItemWishList,
} from "@/redux/slice/wishListSlice";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Divider, Statistic, Table, Typography } from "antd";
import Column from "antd/es/table/Column";
import { toast } from "react-toastify";
interface DataType {
  key: any;
  _id: any;
  name: string;
  image: string;
  price: number | string;
  status: string;
}

const WishList = () => {
  const wishListArr = useAppSelector((state) => state.wishList.wishListArr);

  const dispatcher = useAppDispatch();
  const dataSource: DataType[] = wishListArr.map((cart) => {
    return {
      key: cart._id,
      _id: cart._id,
      name: cart.name,
      image: cart.image,
      price: cart.price,
      status: cart.quantity > 0 ? "In stock" : "Out of Stock",
    };
  });
  return (
    <div className="container">
      <div className="py-[80px]">
        <Table dataSource={dataSource} pagination={false}>
          <Column
            title="Product name"
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
            title="Stock status"
            dataIndex="status"
            key="status"
            render={(status: string) => (
              <Typography.Text strong className="text-[16px]">
                {status}
              </Typography.Text>
            )}
          />
          <Column
            title="Action"
            render={(product: TypeProduct) => (
              <Button
                icon={<CloseOutlined />}
                onClick={() => {
                  dispatcher(deleteItemWishList(product));
                  toast.success("Delete WishList Successfully!");
                }}
              />
            )}
          />
        </Table>
        <div className="text-center mt-5">
          <Button
            onClick={() => {
              dispatcher(clearAllWishList());
              toast.success("Clear All WishList Successfully!");
            }}
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WishList;
