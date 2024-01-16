import { Suspense } from "react";
import { getAllCategory } from "../api/product/route";
import Section from "../components/section";
import BannerPage from "../ui/bannerPage";
import ProductIndex from "../ui/product";
import { ProductViewsSkeleton } from "../ui/skeleton";
import ProductView from "./product-view/page";
import Intro from "../ui/intro";
import Subscribe from "../ui/subscribe";
import { TypeCategory } from "@/interface";

async function Product({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const category: TypeCategory[] = await JSON.parse(
    JSON.stringify(await getAllCategory())
  );

  return (
    <div className="main-content">
      <BannerPage title="Product Category" />
      <Section className="xl:my-[98px] my-[35px]">
        <ProductIndex
          category={category}
          query={query}
          currentPage={currentPage}
        />
      </Section>
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
      <Section className="section-subscribe mb-[20px] lg:relative lg:top-[100px] lg:mb-[0px]">
        <Subscribe />
      </Section>
    </div>
  );
}

export default Product;
