import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Grid,
  Typography,
  styled,
  useMediaQuery,
  Tooltip,
  Box,
} from "@mui/material";
import { backgroundColor, textColor, white } from "../config";
import projectsJson from "../data/projects.json";
import { useState } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IProject, Props } from "../types";

export default function Projects() {
  const projects: IProject[] = projectsJson;
  const align = "flex-start";

  return (
    <Box
      sx={{
        backgroundImage: `url('/images/project_bg.png')`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: "5rem",
      }}
    >
      <Grid
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h2"
          color="white"
          sx={{ marginTop: "20px", marginBottom: "70px" }}
        >
          Munkáink
        </Typography>
        <Grid
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems={align}
          flexWrap="wrap"
          gap={5}
          sx={{ height: "100%", width: "100%" }}
        >
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

function Project({ project }: Props) {
  const isBelow1000 = useMediaQuery("max-width:800px");
  const isXSmall = useMediaQuery("(max-width:768px)");
  const titleSize = isBelow1000 ? "h6" : "h4";
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Tooltip
      title={expanded ? "Click to close." : "Click to expand."}
      placement="top"
    >
      <Card
        sx={{
          maxWidth: isXSmall ? "400px" : "600px",
          // height: expanded ? "800px" : "500px",
          borderRadius: "10px",
          backgroundColor: white,
          overflow: "hidden",
          display: "flex",
        }}
      >
        <CardActionArea
          onClick={handleExpandClick}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={`/images/${project.imgName}.png`}
            alt={`${project.title} image`}
            sx={{
              width: "90%",
              height: "90%",
              objectFit: "contain",
              marginTop: expanded ? "0px" : "20px",
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant={titleSize}
              component="div"
              textAlign="center"
              sx={{ height: "70px" }}
            >
              {project.title}
            </Typography>
          </CardContent>
          <CardActions disableSpacing style={{ backgroundColor: white }}>
            <div
              style={{
                marginLeft: "auto",
                transition: "background-color 0.3s, transform 0.3s",
                // borderRadius: "50%",
                // padding: "8px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.1)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              <ExpandMoreIcon
                sx={{
                  color: "#0000ff",
                  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </div>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent sx={{ height: "550px", marginBottom: "50px" }}>
              <Typography textAlign={"justify"} variant="body1">
                {project.text}
              </Typography>
            </CardContent>
          </Collapse>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
}
