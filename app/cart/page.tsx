import { Suspense } from "react";
import BannerPage from "../ui/bannerPage";
import Cart from "../ui/cart";
import Loading from "../(overview)/loading";

const CartPage = async () => {
  return (
    <div className="main-content">
      <BannerPage title="Shopping Cart" />

      {/* Cart of Us */}
      <Suspense fallback={<Loading />}>
        <Cart />
      </Suspense>
    </div>
  );
};

export default CartPage;
