import { getAllCategory, getProductByName } from "@/app/api/product/route";
import Section from "@/app/components/section";
import BannerPage from "@/app/ui/bannerPage";
import Intro from "@/app/ui/intro";
import ProductDetail from "@/app/ui/product/productDetail";
import ProductView from "../page";
import { ProductViewsSkeleton } from "@/app/ui/skeleton";
import { Suspense } from "react";
import { TypeCategory, TypeProduct, TypeReview } from "@/interface";

const getReviewsByIdProduct = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/review/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch review");
    }
    return res.json();
  } catch (e) {
    console.log(e);
  }
};

export default async function Page({ params }: { params: { slug: string } }) {
  const product: TypeProduct = await JSON.parse(
    JSON.stringify(await getProductByName(params.slug))
  );

  const category: TypeCategory[] = await JSON.parse(
    JSON.stringify(await getAllCategory())
  );

  const reviews: TypeReview[] = await getReviewsByIdProduct(
    product._id.toString()
  );
  return (
    <div className="main-content">
      <BannerPage title=" Product Detail" breacrumb="" />
      <div className="product-image_area xl:pt-[100px] lg:pt-[100px] pt-[50px]">
        <ProductDetail
          product={product}
          category={category}
          reviews={reviews}
        />
      </div>
      <Section className="section-title mt-[120px]">
        <Intro
          intro="Top"
          introItalic="Product"
          des="Popular Item in the market"
        />
      </Section>
      <Section className="section-product__seller mb-[70px]">
        <Suspense fallback={<ProductViewsSkeleton />}>
          <ProductView countShowProduct={4} />
        </Suspense>
      </Section>
    </div>
  );
}
