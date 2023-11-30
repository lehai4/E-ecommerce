import mongoose from "mongoose";
const mongoURL: any = process.env.DB_URL;

export async function connect() {
  // connect
  let client;
  try {
    client = await mongoose.connect(mongoURL);
    console.log("conect db successfully!");
    Response.json({ message: "Connect successfully" }, { status: 200 });
  } catch (err) {
    console.log(err);
    Response.json({ message: "Connect failed" }, { status: 500 });
  }
}
