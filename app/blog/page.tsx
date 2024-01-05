import { Suspense } from "react";
import Loading from "../(overview)/loading";
import BannerPage from "../ui/bannerPage";
import BlogUi from "../ui/blog";

export default async function BlogPage() {
  return (
    <main className="main-content">
      <BannerPage title="Our Blog" />
      {/* Blog of Us */}
      <Suspense fallback={<Loading />}>
        <BlogUi />
      </Suspense>
    </main>
  );
}
