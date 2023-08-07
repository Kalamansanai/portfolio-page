import { Grid, Typography } from "@mui/material";
import { textColor } from "../config";
import { IProject } from "../types";
import projectsJson from "../data/projects.json";
import { getImageByName } from "../static";

export default function Projects() {
  const projects: IProject[] = projectsJson;

  return (
    <Grid
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      flexWrap="wrap"
      sx={{ height: "100%", width: "100%" }}
    >
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </Grid>
  );
}

type Props = {
  project: IProject;
};

function Project({ project }: Props) {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "80%",
        width: "40%",
        minWidth: "400px",
        borderRadius: "10px",
        backgroundColor: textColor,
      }}
    >
      <Typography variant="h4" sx={{ margin: "10px" }}>
        {project.title}
      </Typography>
      <Typography variant="body1" sx={{ margin: "10px" }}>
        {project.text}
      </Typography>
      {getImageByName(project.imgName)}
    </Grid>
  );
}
