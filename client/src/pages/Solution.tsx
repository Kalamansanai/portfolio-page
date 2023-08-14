import React from "react";
import { Box, Grid, Hidden, Typography } from "@mui/material";
import { textColor } from "../config";
import { ISolution } from "../types";
import contentsJson from "../data/solution_content.json";
import { getImageByName } from "../static";

export default function Solution() {
  const contentList: ISolution[] = contentsJson;

  return (
    <Grid container justifyContent="center" alignItems="center">
      {contentList.map((solution: ISolution, index: number) => (
        <SolutionBox key={solution.title + index} solution={solution} index={index} />
      ))}
    </Grid>
  );
}

type Props = {
  solution: ISolution;
  index: number;
};

function SolutionBox({ solution, index }: Props) {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={0}>
      {/* Render Image for xs screens and even indices on larger screens */}
      {(index % 2 === 0 || !solution.text) && (
        <Grid item xs={12} sm={6}>
          <Box textAlign="center" p={2} style={{ height: 200, overflow: "hidden" }}>
            {solution.imageSrc && getImageByName(solution.imageSrc)}
          </Box>
        </Grid>
      )}

      {/* Always render Text for all screen sizes */}
      <Grid item xs={12} sm={6}>
        <Box textAlign="center" p={2}>
          <Typography variant="h4" color={textColor}>
            {solution.title}
          </Typography>
          <Typography variant="body1" color={textColor} textAlign={"justify"}>
            {solution.text}
          </Typography>
        </Box>
      </Grid>

      {/* For larger screens: Render Image on odd indices */}
      {index % 2 === 1 && window.innerWidth > 600 && (
        <Grid item sm={6}>
          <Box textAlign="center" p={2} style={{ height: 200, overflow: "hidden" }}>
            {solution.imageSrc && getImageByName(solution.imageSrc)}
          </Box>
        </Grid>
      )}
    </Grid>
  );
}
