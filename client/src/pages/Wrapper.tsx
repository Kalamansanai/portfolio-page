import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { LegacyRef, forwardRef } from "react";

type Props = {
  reference: React.RefObject<HTMLDivElement> | null;
  child: JSX.Element;
};

function Wrapper({ reference, child }: Props) {
  const isMobile = useMediaQuery("(max-width:600px)");

  return <div ref={reference}>{child}</div>;
}

export default Wrapper;
