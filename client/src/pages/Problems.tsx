import { Box, Grid, Link, Typography } from "@mui/material";
//@ts-ignore
import cloud1 from "../images/cloud1.png";
//@ts-ignore
import cloud2 from "../images/cloud2.png";

import "../App.css";
import { useState } from "react";
import { Problem } from "../types";
import { backgroundColor, textColor } from "../config";

export default function Problems() {
  const [content, setContent] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<string | undefined>(undefined);

  const problems: Problem[] = [
    {
      problem: "Túl sok a vesztesége termelés során?",
      solution:
        "Gépi látásos megoldásainkkal fel tudunk készül specifikus problémák detektálására, és jelzés küldésére ha megtörténnek. Gépi tanulásos eljárásokkal és kellő adat gyűjtésével meg tudjuk előzni a hibákat a korábbi esetekből betanított algoritmusainkkal.",
      image: "/images/introduction-visual.png",
    },
    {
      problem: "Egyes folyamatokat nehéz automatizálni?",
      solution:
        "A mesterséges intelligencia és gépi tanulás segítségével olyan folyamatokat is képesek lehetünk automatizálni, amiket eddig elképzelhetetlen volt emberi beavatkozás nélkül elvégezni.",
      image: "",
    },
    {
      problem:
        "Van egy specifikus problémája ami egy kritikus probléma a termelési folyamat során?",
      solution:
        "Képesek vagyunk specifikálódni egy kifejezett problémára, és egy már meglévő rendszerhez adaptálni az elkészülő megoldásunkat.",
      image: "",
    },
    {
      problem: "Hatalmas költség egy ilyen rendszer, és nem elég flexibilis?",
      solution:
        "Versenytársainkkal szemben mi olcsó eszközöket használunk, célunk hogy az eszközök modulárisak, pótolhatóak legyenek. Ügyfeleink kiválaszthatják hogy mely eszközöket szeretnék a rendszerükben használni, áruk, teljesítményük és egyéb paramétereik alapján mérlegelve.",
      image: "",
    },
    {
      problem: "Egyedi igényei vannak?",
      solution:
        "Olyan szoftver rendszereket és algoritmusokat készítünk amik az ügyfeleink speciális igényeire vannak szabva, az ők felhasználási igényeiket tartjuk szem előtt a fejlesztés közben.",
      image: "",
    },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        sx={{ width: "100%" }}
        marginTop="50px"
      >
        <Typography
          variant="h2"
          color={textColor}
          fontWeight="bold"
          marginBottom="20px"
          marginRight="20px"
        >
          Miért válasszon minket?
        </Typography>
      </Box>
      <Grid
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        sx={{ height: "100%", width: "100%" }}
      >
        {/* <Typography variant="h1"></Typography> */}
        <Grid
          display="flex"
          flexDirection="column"
          sx={{
            height: "80%",
            width: "40%",
            border: "2px solid #0000FF",
            borderRadius: "25px",
          }}
        >
          {problems.map((element: Problem, index: number) => (
            <Card
              key={element.problem}
              problem={element}
              setContent={setContent}
              isLast={index === problems.length - 1}
              isActive={index === activeIndex}
              onClick={() => {
                setContent(element.solution);
                setActiveIndex(index);
                setActiveImage(element.image || undefined);
              }}
            />
          ))}
        </Grid>
        <Grid
          sx={{
            backgroundColor: backgroundColor,
            height: "80%",
            width: "40%",
            borderRadius: "25px",
            flexDirection: "column",
            display: "flex",
          }}
          padding="10px"
        >
          <Box
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Typography
              variant="h5"
              color={textColor}
              textAlign="left"
              sx={{ lineHeight: "1.5" }}
            >
              {content}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {activeImage && (
              <img
                src={activeImage}
                alt="AI"
                style={{ maxWidth: "250px", maxHeight: "250px" }}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

type Props = {
  problem: Problem;
  setContent: React.Dispatch<React.SetStateAction<string | null>>;
  isLast: boolean;
  isActive: boolean;
  onClick: () => void;
};

function Card({ problem, setContent, isLast, isActive, onClick }: Props) {
  const text_color = "#e5e5e5";

  return (
    <Box
      onClick={onClick}
      sx={{
        flex: "1",
        width: "calc(100% - 50px)",
        padding: "20px",
        margin: "5px",
        marginBottom: isLast ? "0px" : "15px",
        maxHeight: "100%",
        overflow: "auto",
        backgroundColor: isActive ? "#6666ff" : "transparent",
        borderRadius: "25px",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: isActive ? "#6666ff" : "grey",
          borderRadius: "25px",
        },
      }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography color={"#e5e5e5"} sx={{ wordBreak: "break-word" }}>
        {problem.problem}
      </Typography>
    </Box>
  );
}
