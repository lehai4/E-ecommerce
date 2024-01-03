import { Suspense } from "react";
import Loading from "../(overview)/loading";
import BannerPage from "../ui/bannerPage";
import WishList from "../ui/wishlist";

const WishListPage = async () => {
  return (
    <div className="main-content">
      <BannerPage title="WishList Us" />
      <Suspense fallback={<Loading />}>
        <WishList />
      </Suspense>
    </div>
  );
};

export default WishListPage;
