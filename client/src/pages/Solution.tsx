import { Box, Grid, Typography, useMediaQuery, useTheme, Divider } from "@mui/material";
import { textColor } from "../config";
import { ISolution, SolutionProps } from "../types";
import contentsJson from "../data/solution_content.json";
import { getImageByName } from "../static";
import BackgroundSVG from "../OtherComponents/BackgroundSVG";

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
        <SolutionBox key={solution.title + index} solution={solution} index={index} />
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

  return (
    <Grid container justifyContent="center" alignItems="stretch" spacing={2} style={{ display: "flex" }}>
      {isXSmall && (
        <>
          <Grid item xs={12}>
            <Box textAlign="center" p={2} style={{ height: 200 }}>
              {solution.imageSrc && getImageByName(solution.imageSrc)}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center" p={2}>
              <Typography variant="h4" color={textColor}>
                {solution.title}
              </Typography>
              <Typography variant="body1" color={textColor} textAlign={"justify"}>
                {solution.text}
              </Typography>
            </Box>
          </Grid>
        </>
      )}
      {!isXSmall && (
        <>
          <Grid item sm={5}>
            {index % 2 === 0 ? (
              <Box textAlign="center" p={2} style={{ height: 300, overflow: "hidden" }}>
                {solution.imageSrc && getImageByName(solution.imageSrc)}
              </Box>
            ) : (
              <Box textAlign="center" p={2}>
                <Typography variant="h4" color={textColor}>
                  {solution.title}
                </Typography>
                <Typography variant="body1" color={textColor} textAlign={"justify"}>
                  {solution.text}
                </Typography>
              </Box>
            )}
          </Grid>
          <Grid item xs={12} sm={1} container justifyContent="center" alignItems="stretch">
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
                <Typography variant="h4" color={textColor}>
                  {solution.title}
                </Typography>
                <Typography variant="body1" color={textColor} textAlign={"justify"}>
                  {solution.text}
                </Typography>
              </Box>
            ) : (
              <Box p={2} justifyContent={"center"} style={{ height: 300 }}>
                {solution.imageSrc && getImageByName(solution.imageSrc)}
              </Box>
            )}
          </Grid>
        </>
      )}
    </Grid>
  );
}
