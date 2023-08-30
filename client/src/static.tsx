//@ts-ignore
import placeholder from "./images/placeholder.png";
//@ts-ignore
import smartCameraImage from "./images/smart_camera4.png";
//@ts-ignore
import cvImage from "./images/cv4.png";
//@ts-ignore
import desing from "./images/design.png";
import Problems from "./pages/Problems";
import Solution from "./pages/Solution";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import Title from "./pages/Title";

const images: { [name: string]: JSX.Element } = {
  solution_smart_camera: <img style={{ maxWidth: "100%", height: "auto" }} src={smartCameraImage} />,
  solution_cv: <img style={{ maxWidth: "100%", height: "auto" }} src={cvImage} />,
  solution_design: <img style={{ maxWidth: "100%", height: "auto" }} src={desing} />,
};

export function getImageByName(name: string) {
  return images[name];
}

const pageComponents: { [name: string]: JSX.Element } = {
  title: <Title />,
  problems: <Problems />,
  solutions: <Solution />,
  projects: <Projects />,
  team: <Team />,
  contactUs: <ContactUs />,
};

export function getComponentFromName(name: string) {
  return pageComponents[name];
}
