import { useEffect, useRef, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import Problems from "./pages/Problems";
import Wrapper from "./pages/Wrapper";
import Title from "./pages/Title";
import Team from "./pages/Team";
import { Page } from "./types";

function App() {
  const pageNames = ["Title", "Team"];
  const pages: Page[] = [
    { title: "Title", element: <Title /> },
    { title: "Team", element: <Team /> },
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
    <div>
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
          <Wrapper
            key={index}
            reference={targetIndex === index ? target : null}
            child={page.element}
          />
        ))}
    </div>
  );
}

export default App;
