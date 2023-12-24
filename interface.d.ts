import { MongoClient, ObjectId } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

interface TypeSenderMail {
  to: string;
  url: string;
  text: string;
}
interface FieldType {
  name?: string;
  password?: string;
  email?: string;
  remember?: boolean;
}
interface TypeUser {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
  provider: string;
}
interface TypeBannerLink {
  title: string;
  path: string;
}
interface TypeProduct {
  _id: ObjectId;
  name: string;
  categoryID: ObjectId;
  des: string;
  image: string;
  price: number;
  quantity: number;
  total?: number | string;
  specification: Specification;
}
interface Specification {
  Width: string;
  Height: string;
  Depth: string;
  Weight: string;
}
interface TypeCategory {
  _id: ObjectId;
  catelog: string;
  image: string;
}
interface TypeReview {
  _id: ObjectId;
  productID: ObjectId;
  name: string;
  email: string;
  image: string;
  rating: string;
  message: string;
}
