import { Box, Grid, Link, Typography, useMediaQuery } from "@mui/material";
import "../App.css";
import { useState } from "react";
import { IProblem } from "../types";
import { backgroundColor, textColor } from "../config";
import React from "react";
import { Card as MuiCard, CardContent } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import problemsJson from "../data/problems.json";

export default function Problems() {
  const [content, setContent] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeIcon, setActiveIcon] = useState<any>(null);
  const [activeTiltle, setActiveTiltle] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);

  const problems: IProblem[] = problemsJson;

  const isMobile = useMediaQuery("(max-width:800px)");
  const justify = isMobile ? "row" : "column";
  const cardListHeight = isMobile ? "40%" : "80%";
  const cardListWidth = isMobile ? "80%" : "50%";

  const cardWidth = isMobile ? "100%" : "50%";
  const cardHeigth = isMobile ? "50%" : "80%";

  const titleVariant = isMobile ? "h4" : "h2";

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "column",
        alignItems: "flex-start",
        backgroundImage: "url(/images/problem_bg_img.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        sx={{ width: "100%" }}
        marginTop="50px"
      >
        <Typography
          variant={titleVariant}
          color={textColor}
          fontWeight="bold"
          marginBottom="20px"
          marginRight="20px"
        >
          Miért válasszon minket<span style={{ color: "#0000ff" }}>?</span>
        </Typography>
      </Box>
      <Grid
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-around"
        sx={{ height: "100%", width: "100%" }}
      >
        <Grid
          display="flex"
          flexDirection="column"
          flexWrap="wrap"
          sx={{
            height: cardListHeight,
            width: cardListWidth,
            borderRadius: "25px",
          }}
        >
          {problems.map((element: IProblem, index: number) => (
            <Card
              key={element.problem}
              problem={element}
              setContent={setContent}
              isLast={index === problems.length - 1}
              isActive={index === activeIndex}
              onClick={() => {
                setIsFading(true);
                setActiveIndex(index);
                setTimeout(() => {
                  setContent(element.solution);
                  setActiveIcon(element.icon || undefined);
                  setActiveTiltle(element.tiltle);
                  setIsFading(false);
                }, 500);
              }}
            />
          ))}
        </Grid>
        <Grid
          sx={{
            backgroundColor: backgroundColor,
            height: cardHeigth,
            width: cardWidth,
            borderRadius: "25px",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {activeIndex !== null && (
            <MuiCard
              id="active-card"
              elevation={3}
              sx={{
                display: "flex",
                backgroundColor: "white",
                borderRadius: "25px",
                border: "4px solid #0000FF",
                opacity: isFading ? 0 : 1,
                transition: "opacity 0.5s ease",
                height: "90%",
                width: "90%",
              }}
            >
              <CardContent
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  opacity: isFading ? 0 : 1,
                  transition: "opacity 0.3s ease",
                  maxHeight: "100%",
                }}
              >
                <img
                  src={`/images/${activeIcon}`}
                  height={activeIcon === "fourth.png" ? 50 : 70}
                  width={activeIcon === "fourth.png" ? 50 : 70}
                ></img>
                <Typography
                  variant="h4"
                  color={"blue"}
                  sx={{
                    fontWeight: "600",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  {activeTiltle}
                </Typography>
                <Typography
                  variant="h5"
                  color={backgroundColor}
                  sx={{ textAlign: "justify" }}
                >
                  {content}
                </Typography>
              </CardContent>
            </MuiCard>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

type Props = {
  problem: IProblem;
  setContent: React.Dispatch<React.SetStateAction<string | null>>;
  isLast: boolean;
  isActive: boolean;
  onClick: () => void;
};

function Card({ problem, setContent, isLast, isActive, onClick }: Props) {
  const isMobile = useMediaQuery("(max-width:800px)");
  const variant = isMobile ? "body1" : "h5";
  const padding = isMobile ? "2px" : "20px";

  return (
    <Box
      onClick={onClick}
      sx={{
        width: "calc(100% - 50px)",
        padding: padding,
        margin: "5px",
        marginBottom: isLast ? "0px" : "15px",
        height: "8%",
        maxHeight: "100%",
        borderRadius: "25px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant={variant}
        color={"#F5F5F5"}
        sx={{
          wordBreak: "break-word",
          flexGrow: 1,
        }}
      >
        {problem.problem}{" "}
        {isActive && <ArrowBackIosRoundedIcon sx={{ color: "#F5F5F5" }} />}
      </Typography>
    </Box>
  );
}
