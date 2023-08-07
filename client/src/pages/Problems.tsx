import { Box, Grid, Link, Typography } from "@mui/material";
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

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
          variant="h2"
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
        justifyContent="space-around"
        sx={{ height: "100%", width: "100%" }}
      >
        <Grid
          display="flex"
          flexDirection="column"
          sx={{
            height: "80%",
            width: "40%",
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
            height: "80%",
            width: "40%",
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
                height: "450px",
                width: "500px",
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
                  overflow: "auto",
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
  return (
    <Box
      onClick={onClick}
      sx={{
        flex: "1",
        width: "calc(100% - 50px)",
        padding: "20px",
        margin: "5px",
        marginBottom: isLast ? "0px" : "15px",
        maxHeight: "100%",
        overflow: "auto",
        borderRadius: "25px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
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
