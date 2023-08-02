// TitlePage.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
//@ts-ignore
import video from "../images/video2.mp4";

const Title: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        // backgroundImage: 'url("/path/to/your/background-image.jpg")', // Replace with your background image URL
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // color: "white",
        // textAlign: "center",
        padding: 2,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "calc(80% - 20px)", // Adjust the size of the border
          height: "calc(80% - 20px)", // Adjust the size of the border
          top: "80px", // Adjust the position of the border
          right: "0px", // Adjust the position of the border
          border: "10px solid rgba(0, 0, 0, 0.5)", // Adjust the border color and transparency
          zIndex: -1,
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
          zIndex: -2,
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", mb: 4, color: "#FFFFC0" }}
      >
        Smart Camera Systems
        <br />
        with Computer Vision & AI
      </Typography>

      <Typography
        variant="body1"
        sx={{ fontSize: 18, maxWidth: 600, mb: 4, color: "#FFFFC0" }}
      >
        Welcome to BME-I4 Vision Systems, where we specialize in creating
        cutting-edge smart camera systems integrated with the power of AI and
        computer vision. Our mission is to deliver innovative solutions that
        enhance security, automate processes, and drive business efficiency.
      </Typography>
    </Box>
  );
};

export default Title;
