import BannerPage from "../ui/bannerPage";
import BlogUi from "../ui/blog";

export default async function BlogPage() {
  return (
    <main className="main-content">
      <BannerPage title="Our Blog" />
      {/* Blog of Us */}
      <BlogUi />
    </main>
  );
}
