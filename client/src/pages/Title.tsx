import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function Title() {
  const slideImages = ["/images/ipartk-fejlesztok-processed.jpeg"];

  const [imageIndex, setImageIndex] = useState(0);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: "url(/images/tiltle_bg_img.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        pt: "5rem",
      }}
    >
      <Typography
        variant="h1"
        color="white"
        width="20%"
        position="absolute"
        top="150px"
        sx={{ width: "100%" }}
      >
        Okos kamerás monitorzó rendszerek
      </Typography>
      <img
        src={slideImages[imageIndex]}
        height={"80%"}
        width={"80%"}
        style={{ marginTop: "80px" }}
      />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "80%" }}
      >
        {slideImages.map((slide, index) => (
          <Button key={index} onClick={() => setImageIndex(index)}>
            {imageIndex === index ? "X" : "O"}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
