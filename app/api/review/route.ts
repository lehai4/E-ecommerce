import { connect } from "@/lib/utils/database";
import Review from "@/models/Review";

export async function POST(req: Request, res: Response) {
  const { productID, name, image, email, message, rating } = await req.json();

  await connect();

  await Review.create({ productID, name, image, email, message, rating });

  return Response.json({ message: "Create Done!" }, { status: 201 });
}

export async function GET() {
  await connect();

  const reviews = await Review.find();

  return Response.json({ reviews });
}
