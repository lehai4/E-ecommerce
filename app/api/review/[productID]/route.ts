import { connect } from "@/lib/utils/database";
import Review from "@/models/Review";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: any;
  }
) {
  const { productID } = params;
  await connect();
  const reviews = await Review.find({ productID });

  return Response.json(reviews, { status: 200 });
}
