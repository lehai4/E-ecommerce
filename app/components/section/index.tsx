import { CSSProperties } from "react";

const Section = ({
  children,
  style,
  className,
  ref,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
  className: string;
  ref?: any;
}) => {
  return (
    <section style={style} className={className} ref={ref}>
      {children}
    </section>
  );
};

export default Section;
