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

function App() {
  const pages: Page[] = [
    { title: "Title", element: <Title /> },
    { title: "Problems", element: <Problems /> },
    { title: "Solution", element: <Solution /> },
    { title: "Team", element: <Team /> },
    { title: "Pojects", element: <Projects /> },
    { title: "ContactUs", element: <ContactUs /> },
  ];

  const [targetIndex, setTargerIndex] = useState<number | undefined>(undefined);
  const target = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (target.current) {
      target.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [targetIndex, scroll]);

  return (
    <div className="mainBody">
      {pages &&
        pages.map((page, index) => (
          <Button
            key={index}
            onClick={() => {
              setTargerIndex(index);
              setScroll(!scroll);
            }}
          >
            {page.title}
          </Button>
        ))}

      {pages &&
        pages.map((page, index) => (
          <Wrapper key={index} reference={targetIndex === index ? target : null} child={page.element} />
        ))}

      <ScrollToTopButton />
    </div>
  );
}

export default App;
