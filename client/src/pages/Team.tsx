import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { textColor } from "../config";
import teamJson from "../data/team.json";
import { ITeamMember } from "../types";

function Team() {
  const teamMembers: ITeamMember[] = teamJson;
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndex =
    (currentIndex - 1 + teamMembers.length) % teamMembers.length;
  const nextIndex = (currentIndex + 1) % teamMembers.length;
  const [autoPlayActive, setAutoPlayActive] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (
    nextIndex: number | undefined,
    previousIndex: number | undefined
  ) => {
    if (nextIndex !== undefined) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setTimeout(() => {
          setIsVisible(true);
        }, 1000);
      }, 500);
    }
  };

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsVisible(true);
    }, 1000);
    setAutoPlayActive(false);
  };

  const handlePrev = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(prevIndex);
      setIsVisible(true);
    }, 1000);
    setAutoPlayActive(false);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s ease",
      }}
    >
      <Typography variant="h4" sx={{ color: textColor, paddingBottom: "5px" }}>
        Rólunk
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            backgroundColor: "#282828",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <ArrowBackIosNewRoundedIcon sx={{ color: textColor }} />
        </IconButton>
        <Box sx={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <img
            src={teamMembers[prevIndex].image}
            alt={teamMembers[prevIndex].name}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={handlePrev}
          />
        </Box>
        <Carousel
          index={currentIndex}
          next={(next) => {
            if (next !== undefined) setCurrentIndex(next);
          }}
          prev={(prev) => {
            if (prev !== undefined) setCurrentIndex(prev);
          }}
          indicators={false}
          onChange={handleChange}
          animation="fade"
          duration={10}
          swipe={true}
          autoPlay={false}
          navButtonsAlwaysInvisible={true}
          fullHeightHover={true}
          sx={{
            minWidth: "300px",
            justifyContent: "center",
            alignItems: "center",
            overflow: "visible",
          }}
        >
          {teamMembers.map((member, i) => (
            <div key={i}>
              <Paper>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "5px",
                    backgroundColor: "#0c0c0c",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      borderRadius: "50%",
                      width: "300px",
                      height: "300px",
                      overflow: "hidden",
                      backgroundColor: "transparent",
                      border: "4px solid blue",
                    }}
                  />
                </div>
              </Paper>
            </div>
          ))}
        </Carousel>

        <img
          src={teamMembers[nextIndex].image}
          alt={teamMembers[nextIndex].name}
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            paddingLeft: "10px",
            paddingRight: "10px",
            cursor: "pointer",
          }}
          onClick={handleNext}
        />
        <IconButton
          onClick={handleNext}
          sx={{
            backgroundColor: "#282828",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <ArrowForwardIosIcon sx={{ color: textColor }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        {teamMembers.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsVisible(true);
              }, 1000);
            }}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "#fff" : "#aaa",
              margin: "0 5px",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </Box>
      <Typography
        sx={{
          marginTop: "10px",
          fontSize: "20px",
          fontWeight: "700",
          color: textColor,
        }}
      >
        {teamMembers[currentIndex].name}{" "}
      </Typography>
      <Typography
        sx={{
          maxWidth: "250px",
          margin: "0px",
          whiteSpace: "pre-wrap",
          textAlign: "center",
          color: textColor,
        }}
      >
        {teamMembers[currentIndex].description}
      </Typography>
    </Box>
  );
}

export default Team;
