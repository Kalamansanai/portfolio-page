import { Box, Button, Typography } from "@mui/material";
import { useRef, useState } from "react";

export default function Title() {
  const slideImages = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

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
      }}
    >
      <Typography
        variant="h1"
        color="white"
        width="20%"
        position="absolute"
        top="300px"
        sx={{ width: "100%" }}
      >
        Okos kamerás monitorzó rendszerek
      </Typography>
      <img src={slideImages[imageIndex]} height={"80%"} width={"80%"} style={{ marginTop: "80px" }} />
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
