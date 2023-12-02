import { getAllCategory } from "@/app/api/product/route";
import { TypeCategory } from "@/interface";
import { CatelogView } from "./CatelogView";

const CatelogBanner = async () => {
  const category: TypeCategory[] = await JSON.parse(
    JSON.stringify(await getAllCategory())
  );

  return <CatelogView category={category} />;
};

export default CatelogBanner;
