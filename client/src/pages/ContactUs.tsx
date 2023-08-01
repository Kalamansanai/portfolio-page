import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";

function ContacUs() {
  const style = {
    backgroundImage: 'url("/images/contact-visual.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    width: "300px",
    padding: "45px 45px",
    backgroundColor: "#0c0c0c",
    boxShadow: "0 0 30px 0 rgba(0,0,0,0.75)",
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom style={{ color: "#fff" }}>
          BME I épület , Földszint 017 <br />
          1117 Budapest, Magyar tudósok körútja 2
        </Typography>
        <Typography style={{ color: "#fff" }}>
          <a href="mailto:ipar4@mail.bme.hu">ipar4@mail.bme.hu</a>
        </Typography>
        <Typography style={{ color: "#fff" }}>
          <a href="tel:+36306968492">+36 30 696 8492</a>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a href="mailto:ipar4@mail.bme.hu">Contact Us</a>
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box style={style} sx={{ minWidth: 275, display: "flex" }}>
      <Card variant="outlined" style={cardStyle}>
        {card}
      </Card>
    </Box>
  );
}

export default ContacUs;
