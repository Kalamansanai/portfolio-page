import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { textColor } from "../config";
import { ISolution, SolutionProps } from "../types";
import contentsJson from "../data/solution_content.json";
import { getImageByName } from "../static";
import BackgroundSVG from "../OtherComponents/BackgroundSVG";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Solution() {
  const contentList: ISolution[] = contentsJson;

  return (
    <Grid container justifyContent="center" alignItems="center">
      <div style={{ position: "absolute", right: 0, zIndex: -1 }}>
        <BackgroundSVG direction="right" />
      </div>
      <div style={{ position: "absolute", left: 0, zIndex: -1 }}>
        <BackgroundSVG direction="left" />
      </div>
      {contentList.map((solution: ISolution, index: number) => (
        <SolutionBox
          key={solution.title + index}
          solution={solution}
          index={index}
        />
      ))}
    </Grid>
  );
}

function SolutionBox({ solution, index }: SolutionProps) {
  const theme = useTheme();
  const contentList: ISolution[] = contentsJson;
  const isXSmall = useMediaQuery("(max-width:768px)");
  const isMiddle = index === Math.floor(contentList.length / 2);
  const isLast = index === contentList.length - 1;
  const controls = useAnimation();

  const controlsImg = useAnimation();
  const controlsText = useAnimation();
  const controlsTitle = useAnimation();

  useEffect(() => {
    const scrollHandler = () => {
      const element = document.getElementById(`my-element-id-${index}`);

      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          controlsImg.start({
            y: 0,
            opacity: 1,
            transition: { duration: 1.2 },
          });

          setTimeout(() => {
            controlsTitle.start({
              y: 0,
              opacity: 1,
              transition: { duration: 1 },
            });
          }, 200);

          setTimeout(() => {
            controlsText.start({
              y: 0,
              opacity: 1,
              transition: { duration: 1 },
            });
          }, 400);
        }
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [controlsImg, controlsText, index]);

  return (
    <div id={`my-element-id-${index}`}>
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        style={{ display: "flex" }}
      >
        {isXSmall && (
          <>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: "20px" }}
                animate={controlsImg}
              >
                <Box textAlign="center" p={2} style={{ height: 200 }}>
                  {solution.imageSrc && getImageByName(solution.imageSrc)}
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <Box textAlign="center" p={2}>
                <motion.div
                  initial={{ opacity: 0, y: "20px" }}
                  animate={controlsTitle}
                >
                  <Typography variant="h4" color={textColor}>
                    {solution.title}
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: "20px" }}
                  animate={controlsText}
                >
                  <Typography
                    variant="body1"
                    color={textColor}
                    textAlign={"justify"}
                  >
                    {solution.text}
                  </Typography>
                </motion.div>
              </Box>
            </Grid>
          </>
        )}
        {!isXSmall && (
          <>
            <Grid item sm={5}>
              {index % 2 === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: "20px" }}
                  animate={controlsImg}
                >
                  <Box
                    textAlign="center"
                    p={2}
                    style={{ height: 300, overflow: "hidden" }}
                  >
                    {solution.imageSrc && getImageByName(solution.imageSrc)}
                  </Box>
                </motion.div>
              ) : (
                <Box textAlign="center" p={2}>
                  <motion.div
                    initial={{ opacity: 0, y: "20px" }}
                    animate={controlsTitle}
                  >
                    <Typography variant="h4" color={textColor}>
                      {solution.title}
                    </Typography>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: "20px" }}
                    animate={controlsText}
                  >
                    <Typography
                      variant="body1"
                      color={textColor}
                      textAlign={"justify"}
                    >
                      {solution.text}
                    </Typography>
                  </motion.div>
                </Box>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              sm={1}
              container
              justifyContent="center"
              alignItems="stretch"
            >
              <div
                style={{
                  width: "2px",
                  background: isMiddle
                    ? "#0000ff"
                    : isLast
                    ? "linear-gradient( #0000ff, #1EAEFF)"
                    : "linear-gradient(#1EAEFF, #0000ff)",
                  height: "100%",
                  margin: "0 auto",
                }}
              />
            </Grid>
            <Grid item sm={5}>
              {index % 2 === 0 ? (
                <Box textAlign="center" p={2}>
                  <motion.div
                    initial={{ opacity: 0, y: "20px" }}
                    animate={controlsTitle}
                  >
                    <Typography variant="h4" color={textColor}>
                      {solution.title}
                    </Typography>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: "20px" }}
                    animate={controlsText}
                  >
                    <Typography
                      variant="body1"
                      color={textColor}
                      textAlign={"justify"}
                    >
                      {solution.text}
                    </Typography>
                  </motion.div>
                </Box>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: "20px" }}
                  animate={controlsImg}
                >
                  <Box p={2} justifyContent={"center"} style={{ height: 300 }}>
                    {solution.imageSrc && getImageByName(solution.imageSrc)}
                  </Box>
                </motion.div>
              )}
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}
