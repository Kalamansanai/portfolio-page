import { Box, Divider, Grid, Typography } from "@mui/material";

import { textColor } from "../config";
import { ISolutionContent, ISolutionImage } from "../types";

import imagesJson from "../data/solution_images.json";
import contentsJson from "../data/solution_content.json";
import { getImageByName } from "../static";

export default function Solution() {
  const contentList: ISolutionContent[] = contentsJson;

  const imageList: ISolutionImage[] = imagesJson;

  return (
    <Grid
      display="flex"
      flexDirection="row"
      height="90%"
      width="100%"
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      // sx={{ border: "2px solid red" }}
    >
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        height="100%"
        width="50%"
        ml="25px"
        mt="50px"
        // sx={{ border: "2px solid blue" }}
      >
        <TextBox content={contentList[0]} />
        <ImageBox image={imageList[1]} />
        <TextBox content={contentList[2]} />
      </Grid>
      <Divider
        orientation="vertical"
        color={textColor}
        variant="middle"
        flexItem
        light
        sx={{ margin: 5, mt: "150px" }}
      />
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        height="100%"
        width="50%"
        mt="50px"
        // sx={{ border: "2px solid blue" }}
      >
        <ImageBox image={imageList[0]} />
        <TextBox content={contentList[1]} />
        <ImageBox image={imageList[2]} />
      </Grid>
    </Grid>
  );
}

type textProps = {
  content: ISolutionContent;
};

function TextBox({ content }: textProps) {
  return (
    <Box
      height="30%"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Typography variant="h3" color={textColor}>
        {content.title}
      </Typography>
      <Typography variant="body2" color={textColor}>
        {content.text}
      </Typography>
    </Box>
  );
}

type imgProps = {
  image: ISolutionImage;
};

function ImageBox({ image }: imgProps) {
  return (
    <Box
      height="35%"
      width="100%"
      display="flex"
      justifyContent="center"
      marginBottom="10px"
      marginTop="10px"
    >
      {getImageByName(image.imageSrc)}
    </Box>
  );
}
