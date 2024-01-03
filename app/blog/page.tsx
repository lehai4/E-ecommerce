import { Suspense } from "react";
import Loading from "../(overview)/loading";
import BannerPage from "../ui/bannerPage";
import Blog from "../ui/blog";

export async function BlogPage() {
  return (
    <main className="main-content">
      <BannerPage title="Our Blog" />
      {/* Blog of Us */}
      <Suspense fallback={<Loading />}>
        <Blog />
      </Suspense>
    </main>
  );
}
