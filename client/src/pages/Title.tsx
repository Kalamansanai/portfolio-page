// TitlePage.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
//@ts-ignore
import video from "../images/video2.mp4";
import { textColor } from "../config";

const Title: React.FC = () => (
  <Box
    sx={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundImage: "url(/images/tiltle_bg_img.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",

      zIndex: -3,
      padding: 2,
    }}
  >
    <div
      style={{
        position: "absolute",
        width: "calc(80% - 20px)",
        height: "calc(80% - 20px)",
        top: "80px",
        right: "0px",
        border: "10px solid rgba(0, 0, 0, 0.5)",
        zIndex: 2,
      }}
    ></div>
    <video
      autoPlay
      muted
      loop
      style={{
        position: "absolute",
        width: "80%",
        height: "80%",
        objectFit: "cover",
        right: "0px",
        top: "80px",
        zIndex: 1,
      }}
    >
      <source src={video} type="video/mp4" />
    </video>
    <Typography
      variant="h2"
      sx={{ fontWeight: "bold", mb: 4, color: textColor, zIndex: 3 }}
    >
      Smart Camera Systems
      <br />
      with Computer Vision & AI
    </Typography>

    <Typography
      variant="body1"
      sx={{ fontSize: 18, maxWidth: 600, mb: 4, color: textColor, zIndex: 3 }}
    >
      Welcome to BME-I4 Vision Systems, where we specialize in creating
      cutting-edge smart camera systems integrated with the power of AI and
      computer vision. Our mission is to deliver innovative solutions that
      enhance security, automate processes, and drive business efficiency.
    </Typography>
  </Box>
);

export default Title;
