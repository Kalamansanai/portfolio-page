import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { textColor } from "../config";
import { ISolution } from "../types";

import contentsJson from "../data/solution_content.json";
import { getImageByName } from "../static";

export default function Solution() {
  const contentList: ISolution[] = contentsJson;

  return (
    <Grid
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      sx={{ height: "100%", width: "100%" }}
    >
      {contentList.map((solution: ISolution) => (
        <SolutionBox solution={solution} />
      ))}
    </Grid>
  );
}

type Props = {
  solution: ISolution;
};

function SolutionBox({ solution }: Props) {
  const isBelow1100 = useMediaQuery("(max-width:1150px)");
  const isMobile = useMediaQuery("(max-width:800px)");

  const isImage = solution.title === "";
  const align = isImage ? "center" : "flex-start";
  const overflow = isImage ? "auto" : "hidden";

  return (
    <Box
      key={solution.title}
      height={isMobile ? "14%" : "32%"}
      maxHeight="400px"
      overflow={overflow}
      width="45%"
      minWidth={isImage ? "200px" : "500px"}
      display="flex"
      flexDirection="column"
      alignItems={align}
      justifyContent="center"
      // border="1px solid red"
    >
      {!isImage && (
        <Typography variant={isBelow1100 ? "h6" : "h4"} color={textColor}>
          {solution.title}
        </Typography>
      )}
      {!isImage && (
        <Typography variant={isMobile ? "body2" : "body1"} color={textColor}>
          {solution.text}
        </Typography>
      )}
      {getImageByName(solution.imageSrc)}
    </Box>
  );
}
