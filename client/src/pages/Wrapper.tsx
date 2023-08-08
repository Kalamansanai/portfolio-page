import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { LegacyRef, forwardRef } from "react";

type Props = {
  reference: React.RefObject<HTMLDivElement> | null;
  child: JSX.Element;
};

function Wrapper({ reference, child }: Props) {
  const isMobile = useMediaQuery("(max-width:600px)");

  const size = isMobile ? "200vh" : "100vh";

  return (
    <div ref={reference} style={{ height: "100vh", width: "100vw" }}>
      {child}
    </div>
  );
}

export default Wrapper;
