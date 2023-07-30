import { LegacyRef, forwardRef } from "react";

type Props = {
  reference: React.RefObject<HTMLDivElement> | null;
  child: JSX.Element;
};

function Wrapper({ reference, child }: Props) {
  return (
    <div ref={reference} style={{ border: "2px solid blue", height: "100vh" }}>
      {child}
    </div>
  );
}

export default Wrapper;
