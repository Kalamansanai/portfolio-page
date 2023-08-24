import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { LegacyRef, forwardRef } from "react";
import { WrapperProps } from "../types";

function Wrapper({ reference, child }: WrapperProps) {
  const isMobile = useMediaQuery("(max-width:600px)");

  return <div ref={reference}>{child}</div>;
}

export default Wrapper;
