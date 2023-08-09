import { Box, Button, useMediaQuery } from "@mui/material";
import { IPage } from "../types";
import { useState } from "react";
//@ts-ignore
// import backgroundImage from "../images/navbar4.png";

type Props = {
  pages: IPage[];
  targetIndex: number | undefined;
  setTargetIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  scroll: boolean;
  setScroll: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({
  pages,
  targetIndex,
  setTargetIndex,
  scroll,
  setScroll,
}: Props) {
  const [color, setColor] = useState("#2a282a");
  const text_color = "#e5e5e5";

  const isMobile = useMediaQuery("(max-width:800px)");
  const width = isMobile ? "100%" : "50%";

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        position: "fixed",
        height: "3vh",
        minHeight: "40px",
        width: width,
        backgroundColor: "#2a282a",
        borderRadius: 30,
        fontFamily: "sans-serif",
      }}
    >
      {" "}
      {pages &&
        pages.map((page, index) => {
          return (
            <Box
              key={index}
              onClick={() => {
                setTargetIndex(index);
                setScroll(!scroll);
                // setColor("white");
              }}
              sx={{
                backgroundColor: targetIndex === index ? "grey" : "#2a282a",
                borderRadius: "30px",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "grey",
                },
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ color: text_color }}>{page.title}</p>
            </Box>
          );
        })}
    </Box>
  );
}
