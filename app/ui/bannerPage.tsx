const BannerPage = ({
  title,
  breacrumb,
}: {
  title: string;
  breacrumb?: string;
}) => {
  return (
    <div
      id="product-view"
      className="product-banner-area h-[280px] xl:h-[410px] z-10 relative before:absolute before:bg-gray-100 before:w-full before:h-full before:top-0 before:left-0 before:block before:-z-10"
    >
      <div className="container h-[100px]">
        <div className="product-banner text-center absolute top-[50%] left-[50%] w-full -translate-x-[50%] -translate-y-[50%]">
          <h1 className="lg:text-[36px] text-[30px] mb-[10px] text-black font-[500] tracking-tighter">
            {title}
          </h1>
          {/* Breacrumb */}
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
