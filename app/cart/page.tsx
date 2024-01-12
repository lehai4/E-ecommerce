import BannerPage from "../ui/bannerPage";
import Cart from "../ui/cart";

const CartPage = async () => {
  return (
    <div className="main-content">
      <BannerPage title="Shopping Cart" />

      {/* Cart of Us */}
      <Cart />
    </div>
  );
};

export default CartPage;
