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
} from "@mui/material";
import { textColor } from "../config";
import { IProject } from "../types";
import projectsJson from "../data/projects.json";
import { useState } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Projects() {
  const projects: IProject[] = projectsJson;
  const align = "flex-start";

  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", width: "100vw" }}
    >
      <Typography variant="h2" color="white" sx={{ marginTop: "20px", marginBottom: "70px" }}>
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
  );
}

type Props = {
  project: IProject;
};

function Project({ project }: Props) {
  const isBelow1000 = useMediaQuery("max-width:800px");
  const isXSmall = useMediaQuery("(max-width:768px)");
  const titleSize = isBelow1000 ? "h6" : "h4";
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Tooltip title={expanded ? "Click to close." : "Click to expand."} placement="top">
      <Card
        sx={{
          maxWidth: isXSmall ? "400px" : "600px",
          borderRadius: "10px",
          backgroundColor: textColor,
          overflow: "hidden",
          display: "flex",
        }}
      >
        <CardActionArea onClick={handleExpandClick}>
          <CardMedia
            component="img"
            image={`/images/${project.imgName}.png`}
            alt={`${project.title} image`}
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant={titleSize} component="div">
              {project.title}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <div
              style={{
                marginLeft: "auto",
                transition: "background-color 0.3s, transform 0.3s",
                borderRadius: "50%",
                padding: "8px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              <ExpandMoreIcon
                sx={{ color: "#0000ff", transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </div>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography textAlign={"justify"} variant="body2">
                {project.text}
              </Typography>
            </CardContent>
          </Collapse>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
}
