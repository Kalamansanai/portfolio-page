import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./OtherComponents/Navbar";
import ScrollToTopButton from "./OtherComponents/ScrollToTop";
import pagesJson from "./data/pages.json";
import Wrapper from "./pages/Wrapper";
import { getComponentFromName } from "./static";
import { IPage, IPageJson } from "./types";
import React from "react";

function App() {
  const pages: IPage[] = pagesJson.map((page: IPageJson) => {
    return {
      title: page.title,
      component: getComponentFromName(page.componentName),
    };
  });
  let disableScrollListener = false;
  const [targetIndex, setTargetIndex] = useState<number | undefined>(undefined);
  const target = useRef<HTMLDivElement>(null);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [sectionRefs, setSectionRefs] = useState<React.RefObject<HTMLDivElement>[]>(
    Array(pages.length)
      .fill(null)
      .map(() => React.createRef<HTMLDivElement>())
  );

  useEffect(() => {
    console.log("Debugging sectionRefs:", sectionRefs);
    // ... rest of your code
  }, [sectionRefs]);

  useEffect(() => {
    if (isManualScroll) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex((ref) => ref.current === entry.target);
            setTargetIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs, isManualScroll]);

  useEffect(() => {
    if (isManualScroll && targetIndex !== undefined && sectionRefs[targetIndex]?.current) {
      const target = sectionRefs[targetIndex].current!;
      target.scrollIntoView({ behavior: "smooth" });
      disableScrollListener = true;
      const scrollListener = () => {
        console.log("Scroll listener triggered", window.scrollY, target.offsetTop);
        if (window.scrollY + window.innerHeight >= target.offsetTop) {
          setIsManualScroll(false);
          window.removeEventListener("scroll", scrollListener);
        }
      };
      setTimeout(() => (disableScrollListener = false), 1000);
      window.addEventListener("scroll", scrollListener);
    }
  }, [targetIndex, isManualScroll]);

  return (
    <div>
      <Grid display="flex" flexDirection="row" justifyContent="center">
        <Navbar
          pages={pages}
          targetIndex={targetIndex}
          setTargetIndex={setTargetIndex}
          scroll={scroll}
          setScroll={setScroll}
          sectionRefs={sectionRefs}
          isManualScroll={isManualScroll}
          setIsManualScroll={setIsManualScroll}
        />
      </Grid>

      {pages &&
        pages.map((page, index) => (
          <Wrapper key={index} reference={sectionRefs[index]} child={page.component} />
        ))}

      <ScrollToTopButton setTargetIndex={setTargetIndex} />
    </div>
  );
}

export default App;
