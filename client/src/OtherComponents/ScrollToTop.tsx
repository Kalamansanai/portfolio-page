// ScrollToTopButton.tsx
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Fab, Zoom, useScrollTrigger } from "@mui/material";
import React from "react";

type Props = {
  setTargetIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const ScrollToTopButton = ({ setTargetIndex }: Props) => {
  const trigger = useScrollTrigger({ disableHysteresis: true });

  const scrollToTop = () => {
    setTargetIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={scrollToTop}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1000,
          cursor: "pointer",
        }}
      >
        <Fab
          color="primary"
          size="medium"
          sx={{
            backgroundColor: "grey",
            "&:hover": {
              backgroundColor: "#2a282a",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollToTopButton;
