import { Box, Divider, Grid, Typography } from "@mui/material";
//@ts-ignore
import placeholder from "../images/placeholder.png";
import { textColor } from "../config";

export default function Solution() {
  // const text_color = "#FFFFC0";

  return (
    <Grid
      display="flex"
      flexDirection="row"
      height="100%"
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
        // sx={{ border: "2px solid blue" }}
      >
        <TextBox
          title="Test1"
          text="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
        />
        <ImageBox title="test" imageSrc={placeholder} />
        <TextBox
          title="Test2"
          text="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
        />
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
        // sx={{ border: "2px solid blue" }}
      >
        <ImageBox title="test" imageSrc={placeholder} />
        <TextBox
          title="Test3"
          text="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
        />
        <ImageBox title="test" imageSrc={placeholder} />
      </Grid>
    </Grid>
  );
}

type textProps = {
  title: string;
  text: string;
};

function TextBox({ title, text }: textProps) {
  return (
    <Box
      height="30%"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Typography variant="h3" color={textColor}>
        {title}
      </Typography>
      <Typography color={textColor}>{text}</Typography>
    </Box>
  );
}

type imageProps = {
  title: string;
  imageSrc: string;
};

function ImageBox({ title, imageSrc }: imageProps) {
  return (
    <Box height="30%" width="100%" display="flex" justifyContent="center">
      <img style={{ borderRadius: "25px" }} height="100%" src={imageSrc} />
    </Box>
  );
}
