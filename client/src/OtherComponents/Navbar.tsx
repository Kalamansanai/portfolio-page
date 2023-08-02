import { Box, Button } from "@mui/material";
import { Page } from "../types";
import { useState } from "react";
//@ts-ignore
// import backgroundImage from "../images/navbar4.png";

type Props = {
  pages: Page[];
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

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        position: "fixed",
        height: "7vh",
        width: "50%",
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
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p style={{ color: "white" }}>{page.title}</p>
            </Box>
          );
        })}
    </Box>
  );
}
