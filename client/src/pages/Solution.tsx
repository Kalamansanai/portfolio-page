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

  const isMobile = useMediaQuery("(max-width:800px)");
  const height = isMobile ? "200vh" : "100vh";

  return (
    <Grid
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      sx={{ height: height, width: "100vw" }}
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

  const align = isMobile ? "center" : "flex-start";
  const overflow = isMobile ? "auto" : "hidden";
  const width = isMobile ? "100%" : "45%";

  const isImage = solution.title === "";

  return (
    <Box
      key={solution.title}
      height={isMobile ? "14%" : "32%"}
      maxHeight="400px"
      width={width}
      minWidth={isImage ? "200px" : "500px"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      overflow={overflow}
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
