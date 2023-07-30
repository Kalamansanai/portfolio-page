// ScrollToTopButton.tsx
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Fab, Zoom, useScrollTrigger } from "@mui/material";
import React from "react";

const ScrollToTopButton: React.FC = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={scrollToTop}
        role="presentation"
        sx={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 1000,
          cursor: "pointer",
        }}
      >
        <Fab color="primary" size="medium">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollToTopButton;
