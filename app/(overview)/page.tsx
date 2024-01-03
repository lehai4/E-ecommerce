import Section from "@/app/components/section";
import Intro from "@/app/ui/intro";
import News from "@/app/ui/news";
import Subscribe from "@/app/ui/subscribe";
import { TypeCategory } from "@/interface";
import { Suspense } from "react";
import { getAllCategory } from "../api/product/route";
import ProductView from "../product/product-view/page";
import BannerContent from "../ui/bannerContent";
import BannerOffer from "../ui/bannerOffer";
import { CatelogView } from "../ui/catelog";
import Policy from "../ui/policy";
import { ProductViewsSkeleton } from "../ui/skeleton";

export default async function Page() {
  const category: TypeCategory[] = await JSON.parse(
    JSON.stringify(await getAllCategory())
  );
  return (
    <main className="site-main">
      <Section className="section-banner section-bannerContent">
        <BannerContent />
      </Section>
      <Section className="section-banner mb-[60px]">
        <Policy />
      </Section>
      <Section className="section-catelog mt-[0px] xl:mb-[120px] lg:mb-[70px]">
        <CatelogView category={category} />
      </Section>
      <Section className="section-title mt-[120px]">
        <Intro
          intro="Trending"
          introItalic="Product"
          des="Popular Item in the market"
        />
      </Section>
      <Section className="section-product mb-[70px]">
        <Suspense fallback={<ProductViewsSkeleton />}>
          <ProductView countShowProduct={8} />
        </Suspense>
      </Section>
      <Section className="section-banner section-parallax">
        <BannerOffer />
      </Section>
      <Section className="section-title mt-[120px]">
        <Intro
          intro="Best"
          introItalic="Sellers"
          des="Popular Item in the market"
        />
      </Section>
      <Section className="section-product__seller mb-[70px]">
        <Suspense fallback={<ProductViewsSkeleton />}>
          <ProductView countShowProduct={4} />
        </Suspense>
      </Section>
      <Section className="section-title mt-[120px]">
        <Intro
          intro="Latest"
          introItalic="News"
          des="Popular Item in the market"
        />
      </Section>
      <Section className="section-news">
        <News />
      </Section>
      <Section className="section-subscribe mb-[20px] lg:relative lg:top-[100px] lg:mb-[0px]">
        <Subscribe />
      </Section>
    </main>
  );
}
