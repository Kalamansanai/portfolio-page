import { Box, Button } from "@mui/material";
import { Page } from "../types";
//@ts-ignore
// import backgroundImage from "../images/navbar4.png";

type Props = {
  pages: Page[];
  setTargetIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  scroll: boolean;
  setScroll: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({
  pages,
  setTargetIndex,
  scroll,
  setScroll,
}: Props) {
  return (
    <Box sx={{ height: "100%", backgroundColor: "#FFFFC0", borderRadius: 30 }}>
      {" "}
      {pages &&
        pages.map((page, index) => (
          <Button
            key={index}
            onClick={() => {
              setTargetIndex(index);
              setScroll(!scroll);
            }}
            sx={{ color: "black" }}
          >
            {page.title}
          </Button>
        ))}
    </Box>
  );
}
