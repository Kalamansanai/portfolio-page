import { Box, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { NavbarProps } from "../types";

export default function Navbar({
  pages,
  targetIndex,
  setTargetIndex,
  scroll,
  setScroll,
  sectionRefs,
  isManualScroll,
  setIsManualScroll,
}: NavbarProps) {
  const [navColor, setNavColor] = useState("transparent");
  const [navSize, setNavSize] = useState("10rem");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [disableTransition, setDisableTransition] = useState(false);
  const isMobile = useMediaQuery("(max-width:650px)");

  function debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: NodeJS.Timeout | null = null;
    return function (this: ThisParameterType<typeof func>, ...args: any[]) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll) {
        const dynamicOffset = isMobile ? window.scrollY + 30 : window.scrollY + 50;

        let currentIndex = -1;

        sectionRefs.forEach((ref, index) => {
          //console.log(`Section ${index} offsetTop: ${ref.current!.offsetTop}`);
          if (ref.current !== null) {
            if (ref.current.offsetTop <= dynamicOffset) {
              currentIndex = index;
              const megoldasinkIndex = 2; // for example
              console.log("Megoldasink offsetTop:", sectionRefs[megoldasinkIndex].current?.offsetTop);
            }
          }
        });
        //console.log(`Calculated index: ${currentIndex}, current target index: ${targetIndex}`);
        if (currentIndex !== targetIndex) {
          setTargetIndex(currentIndex);
        }
      }
    };

    const listenScrollEvent = () => {
      const isTop = window.scrollY < 10;
      setIsAtTop(isTop);
      setDisableTransition(true);
      if (menuOpen) {
        setNavColor("#002366");
      } else {
        isTop ? setNavColor("transparent") : setNavColor("#002366");
        isTop ? setNavSize("10rem") : setNavSize("5rem");
        setDisableTransition(false);
      }

      if (isTop && menuOpen) {
        setNavColor("#002366");
        setNavSize("10rem");
      } else if (!isTop && menuOpen) {
        setNavSize("5rem");
      }
    };
    const debouncedHandleScroll = debounce(handleScroll, 200);

    const compositeScrollEvent = () => {
      debouncedHandleScroll();
      listenScrollEvent();
    };

    listenScrollEvent();

    window.addEventListener("scroll", compositeScrollEvent);

    return () => {
      window.removeEventListener("scroll", compositeScrollEvent);
    };
  }, [menuOpen]);

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        display: "flex",
        justifyContent: isMobile ? "right" : "center",
        alignItems: "center",
        height: navSize,
        backgroundColor: navColor,
        transition: isAtTop && menuOpen ? "none" : disableTransition ? "none" : "all 1s",
        zIndex: "10",
        padding: isMobile ? "0 1rem" : "0",
      }}
    >
      {isMobile ? (
        menuOpen ? (
          <CloseIcon
            onClick={() => setMenuOpen(!menuOpen)}
            sx={{ fontSize: 40, cursor: "pointer", pr: "1rem", color: "#e5e5e5" }}
          />
        ) : (
          <MenuIcon
            onClick={() => setMenuOpen(!menuOpen)}
            sx={{ fontSize: 40, cursor: "pointer", pr: "1rem", color: "#e5e5e5" }}
          />
        )
      ) : (
        <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
          {pages &&
            pages.map((page, index) => (
              <Box
                key={index}
                onClick={() => {
                  setIsManualScroll(true);
                  setTargetIndex(index);
                  // setScroll(!scroll);
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                  padding: "0.5rem 1rem",
                }}
              >
                <p
                  style={{
                    color: targetIndex === index ? "#fff" : hoveredIndex === index ? "#fff" : "#aaa",
                  }}
                  onClick={() => {
                    console.log(`Clicked index: ${index}, targetIndex: ${targetIndex}`);
                  }}
                >
                  {page.title}
                </p>
              </Box>
            ))}
        </Box>
      )}
      {menuOpen && isMobile && (
        <Box
          sx={{
            position: "fixed",
            top: window.scrollY < 10 ? "10rem" : "5rem",
            width: "100%",
            backgroundColor: "#002366",
            zIndex: "9",
          }}
        >
          {pages &&
            pages.map((page, index) => (
              <Box
                key={index}
                onClick={() => {
                  setIsManualScroll(true);
                  setTargetIndex(index);
                  setScroll(!scroll);
                  setMenuOpen(false);
                }}
                sx={{
                  padding: "1rem",
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: "#003399",
                    cursor: "pointer",
                  },
                  backgroundColor: targetIndex === index ? "#003399" : "#002366",
                }}
              >
                <p
                  style={{
                    color: targetIndex === index ? "#fff" : "#aaa",
                  }}
                >
                  {page.title}
                </p>
              </Box>
            ))}
        </Box>
      )}
    </Box>
  );
}
