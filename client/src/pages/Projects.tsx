import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { textColor } from "../config";
import { IProject } from "../types";
import projectsJson from "../data/projects.json";
import { getImageByName } from "../static";

export default function Projects() {
  const projects: IProject[] = projectsJson;
  const isMobile = useMediaQuery("(max-width:800px)");
  const align = "flex-start";
  const height = isMobile ? "200vh" : "100vh";

  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ height: height, width: "100vw" }}
    >
      <Typography variant="h2" color="white" sx={{ marginTop: "50px" }}>
        Munkáink
      </Typography>
      <Grid
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems={align}
        flexWrap="wrap"
        sx={{ height: "100%", width: "100%", margin: "10px" }}
      >
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </Grid>
    </Grid>
  );
}

type Props = {
  project: IProject;
};

function Project({ project }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:800px)");
  const isBelow1000 = useMediaQuery("max-width:800px");
  const height = isMobile ? "45%" : "80%";
  const width = isMobile ? "80%" : "40%";
  const titleSize = isBelow1000 ? "h6" : "h4";

  return (
    <Grid
      key={project.title}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: height,
        width: width,
        minWidth: "480px",
        borderRadius: "10px",
        backgroundColor: textColor,
        // border: "5px solid red",
        overflow: "auto",
      }}
    >
      <Typography variant={titleSize} sx={{ margin: "10px" }}>
        {project.title}
      </Typography>
      <Typography variant="body1" sx={{ margin: "10px" }}>
        {project.text}
      </Typography>
      {getImageByName(project.imgName)}
    </Grid>
  );
}
