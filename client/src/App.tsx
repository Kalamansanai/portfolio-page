import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./OtherComponents/Navbar";
import ScrollToTopButton from "./OtherComponents/ScrollToTop";
import pagesJson from "./data/pages.json";
import Wrapper from "./pages/Wrapper";
import { getComponentFromName } from "./static";
import { IPage, IPageJson } from "./types";

function App() {
  const pages: IPage[] = pagesJson.map((page: IPageJson) => {
    return {
      title: page.title,
      component: getComponentFromName(page.componentName),
    };
  });

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
            child={page.component}
          />
        ))}

      <ScrollToTopButton setTargetIndex={setTargetIndex} />
    </div>
  );
}

export default App;
