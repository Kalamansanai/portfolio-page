import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import EmailSharpIcon from "@mui/icons-material/EmailRounded";
import PhoneSharpIcon from "@mui/icons-material/Phone";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import StyledTextField from "../styles/StyledTextField";

function ContactUs() {
  const [isFocused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <ThemeProvider theme={theme}>
      <Box style={{ height: "100vh", display: "flex", flexDirection: "row" }} sx={{ pt: "5rem" }}>
        <Box
          sx={{
            width: "20%",
            padding: "45px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            background: "black",
            color: "#e5e5e5",
          }}
        >
          <Typography
            variant="h5"
            style={{
              fontWeight: 1000,
              color: "#e5e5e5",
              textShadow: `-2px -2px 0 blue, 2px -2px 0 blue, -2px 2px 0 blue, 2px 2px 0 blue`,
            }}
          >
            Contact Information
          </Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <LocationOnSharpIcon sx={{ color: "blue" }} fontSize="large" />
            <Typography ml={2}>
              BME I épület, Földszint 017 <br />
              1117 Budapest, Magyar tudósok körútja 2
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={2}>
            <EmailSharpIcon sx={{ color: "blue" }} fontSize="large" />
            <Typography ml={2}>
              <a href="mailto:ipar4@mail.bme.hu" style={{ color: "#e5e5e5", textDecoration: "none" }}>
                ipar4@mail.bme.hu
              </a>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={2}>
            <PhoneSharpIcon sx={{ color: "blue" }} fontSize="large" />
            <Typography ml={2}>
              <a href="tel:+36306968492" style={{ color: "#e5e5e5", textDecoration: "none" }}>
                +36 30 696 8492
              </a>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            padding: "45px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            color: "#fff",
            backgroundImage: isFocused
              ? 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/contact-visual.png")'
              : 'url("/images/contact-visual.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transition: "background-image 5s ease-in-out",
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            sx={{
              color: "#e5e5e5",
              textShadow: `-2px -2px 0 blue, 2px -2px 0 blue, -2px 2px 0 blue, 2px 2px 0 blue`,
            }}
          >
            Get in touch
          </Typography>
          <StyledTextField
            onFocus={handleFocus}
            onBlur={handleBlur}
            fullWidth
            label="Your Name"
            variant="outlined"
            style={{ marginTop: "20px" }}
          />
          <StyledTextField
            onFocus={handleFocus}
            onBlur={handleBlur}
            fullWidth
            label="Your Email"
            variant="outlined"
            style={{ marginTop: "20px" }}
          />
          <StyledTextField
            onFocus={handleFocus}
            onBlur={handleBlur}
            fullWidth
            label="Subject"
            variant="outlined"
            style={{ marginTop: "20px" }}
          />
          <StyledTextField
            onFocus={handleFocus}
            onBlur={handleBlur}
            fullWidth
            label="Message"
            multiline
            rows={6}
            variant="outlined"
            style={{ marginTop: "20px" }}
          />
          <Button variant="contained" color="blue" style={{ marginTop: "20px" }}>
            Send Message
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ContactUs;
