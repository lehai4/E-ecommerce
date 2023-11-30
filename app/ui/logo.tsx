import { StarOutlined } from "@ant-design/icons";
import { lusitana } from "./fonts";
export default function AndyLogo({ css }: { css?: string }) {
  return (
    <div
      className={`${
        lusitana.className
      } flex flex-row items-center leading-none ${
        css ? `${css}` : "text-white"
      }`}
    >
      <StarOutlined className="text-3xl h-12 w-12 rotate-[15deg]" />
      <p className="text-3xl">Andy</p>
    </div>
  );
}
