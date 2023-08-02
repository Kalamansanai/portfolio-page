import { useEffect, useRef, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import Problems from "./pages/Problems";
import Wrapper from "./pages/Wrapper";
import Title from "./pages/Title";
import Team from "./pages/Team";
import { Page } from "./types";
import Solution from "./pages/Solution";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import ScrollToTopButton from "./OtherComponents/ScrollToTop";
import "./App.css";
import Navbar from "./OtherComponents/Navbar";

function App() {
  const pages: Page[] = [
    { title: "Title", element: <Title /> },
    { title: "Miért mi ?", element: <Problems /> },
    { title: "Megoldásaink", element: <Solution /> },
    { title: "Munkáink", element: <Projects /> },
    { title: "Rólunk", element: <Team /> },
    { title: "Kapcsolat", element: <ContactUs /> },
  ];

  const [targetIndex, setTargetIndex] = useState<number | undefined>(undefined);
  const target = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (target.current) {
      target.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [targetIndex, scroll]);

  return (
    <div>
      <Grid display="flex" flexDirection="row" justifyContent="center">
        <Navbar
          pages={pages}
          targetIndex={targetIndex}
          setTargetIndex={setTargetIndex}
          scroll={scroll}
          setScroll={setScroll}
        />
      </Grid>

      {pages &&
        pages.map((page, index) => (
          <Wrapper
            key={index}
            reference={targetIndex === index ? target : null}
            child={page.element}
          />
        ))}

      <ScrollToTopButton setTargetIndex={setTargetIndex} />
    </div>
  );
}

export default App;
