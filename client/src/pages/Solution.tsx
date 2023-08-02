import { Box, Grid, Typography } from "@mui/material";
//@ts-ignore
import placeholder from "../images/placeholder.png";

export default function Solution() {
  // const text_color = "#FFFFC0";
  const text_color = "#e5e5e5";

  return (
    <Grid
      display="flex"
      flexDirection="row"
      height="100%"
      width="100%"
      sx={{ border: "2px solid red" }}
    >
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        height="100%"
        width="50%"
        sx={{ border: "2px solid blue" }}
      >
        <Box height="30%" width="100%" display="flex" alignItems="center">
          <Typography color={text_color}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
        <Box height="30%" width="100%" display="flex" justifyContent="center">
          <img height="100%" src={placeholder} />
        </Box>
        <Box height="30%" width="100%" display="flex" alignItems="center">
          <Typography color={text_color}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Grid>
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        height="100%"
        width="50%"
        sx={{ border: "2px solid blue" }}
      >
        <Box height="30%" width="100%" display="flex" justifyContent="center">
          <img height="100%" src={placeholder} />
        </Box>
        <Box height="30%" width="100%" display="flex" alignItems="center">
          <Typography color={text_color}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
        <Box height="30%" width="100%" display="flex" justifyContent="center">
          <img height="100%" src={placeholder} />
        </Box>
      </Grid>
    </Grid>
  );
}
