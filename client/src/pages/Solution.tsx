import { Box, Divider, Grid, Typography } from "@mui/material";
//@ts-ignore
import placeholder from "../images/placeholder.png";
import { textColor } from "../config";
import { SolutionContent, SolutionImage } from "../types";

export default function Solution() {
  const contentList: SolutionContent[] = [
    {
      title: "Teljes nyomonkövetés",
      text: "Ahhoz hogy ",
    },
    { title: "title2", text: "lorem2" },
    { title: "title3", text: "lorem3" },
  ];

  const imageList: SolutionImage[] = [
    { title: "title1", imageSrc: placeholder },
    { title: "title2", imageSrc: placeholder },
    { title: "title3", imageSrc: placeholder },
  ];

  return (
    <Grid
      display="flex"
      flexDirection="row"
      height="90%"
      width="100%"

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
        sx={{ margin: 5 }}
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
  content: SolutionContent;
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
      <Typography color={textColor}>{content.text}</Typography>
    </Box>
  );
}

type imgProps = {
  image: SolutionImage;
};

function ImageBox({ image }: imgProps) {
  return (
    <Box height="30%" width="100%" display="flex" justifyContent="center">
      <img
        style={{ borderRadius: "25px" }}
        height="100%"
        src={image.imageSrc}
      />
    </Box>
  );
}
