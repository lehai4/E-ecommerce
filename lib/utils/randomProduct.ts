import { TypeProduct } from "@/interface";

export const randomProduct = (array: TypeProduct[]) => {
  return array.sort(() => Math.random() - 0.5);
};
