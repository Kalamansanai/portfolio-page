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

  const problems: Problem[] = [
    {
      problem: "Túl sok a vesztesége termelés során ?",
      solution:
        "Gépi látásos megoldásainkkal fel tudunk készül specifikus problémák detektálására, és jelzés küldésére ha megtörténnek. Gépi tanulásos eljárásokkal és kellő adat gyűjtésével meg tudjuk előzni a hibákat a korábbi esetekből betanított algoritmusainkkal.",
    },
    {
      problem: "Egyes folyamatokat nehéz automatizálni ?",
      solution:
        "A mesterséges intelligencia és gépi tanulás segítségével olyan folyamatokat is képesek lehetünk automatizálni, amiket eddig elképzelhetetlen volt emberi beavatkozás nélkül elvégezni.",
    },
    {
      problem:
        "Van egy specifikus problémája ami egy kritikus probléma a termelési folyamat során ?",
      solution:
        "Képesek vagyunk specifikálódni egy kifejezett problémára, és egy már meglévő rendszerhez adaptálni az elkészülő megoldásunkat.",
    },
    {
      problem: "Hatalmas költség egy ilyen rendszer, és nem elég flexibilis ?",
      solution:
        "Versenytársainkkal szemben mi olcsó eszközöket használunk, célunk hogy az eszközök modulárisak, pótolhatóak legyenek. Ügyfeleink kiválaszthatják hogy mely eszközöket szeretnék a rendszerükben használni, áruk, teljesítményük és egyéb paramétereik alapján mérlegelve.",
    },
    {
      problem: "Egyedi igényei vannak ?",
      solution:
        "Olyan szoftver rendszereket és algoritmusokat készítünk amik az ügyfeleink speciális igényeire vannak szabva, az ők felhasználási igényeiket tartjuk szem előtt a fejlesztés közben.",
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
          Miért válasszon minket ?
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
          justifyContent="space-around"
          sx={{
            height: "80%",
            width: "40%",
            border: "2px solid #FFFFC0",
            borderRadius: "25px",
          }}
        >
          {problems.map((element: Problem) => (
            <Card
              key={element.problem}
              problem={element}
              setContent={setContent}
            />
          ))}
        </Grid>
        <Grid
          sx={{
            backgroundColor: backgroundColor,
            height: "80%",
            width: "40%",
            borderRadius: "25px",
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="10px"
        >
          <Typography variant="h5" color={textColor}>
            {content}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

type Props = {
  problem: Problem;
  setContent: React.Dispatch<React.SetStateAction<string | null>>;
};

function Card({ problem, setContent }: Props) {
  const text_color = "#e5e5e5";

  return (
    <Box
      onClick={() => setContent(problem.solution)}
      sx={{
        height: "100%",
        width: "80%",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "grey",
          borderRadius: "25px",
          width: "100%",
        },
        padding: "20px",
      }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography color={text_color}>{problem.problem}</Typography>
    </Box>
  );
}
