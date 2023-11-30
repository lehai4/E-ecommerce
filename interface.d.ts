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
  categoryID: string;
  des: string;
  image: string;
  price: number;
  quantity: number;
}
interface TypeCategory {
  _id: string;
  catelog: string;
}
