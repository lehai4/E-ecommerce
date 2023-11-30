import { TypeProduct } from "@/interface";

export const getProducts = (count: number, data: TypeProduct[]) => {
  const max = data.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return data.slice(start, start + count);
};
