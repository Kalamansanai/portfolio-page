import { Box, Divider, Grid, Typography } from "@mui/material";
//@ts-ignore
import placeholder from "../images/placeholder.png";
//@ts-ignore
import smartCameraImage from "../images/smart_camera4.png";
//@ts-ignore
import cvImage from "../images/cv4.png";
//@ts-ignore
import desing from "../images/design.png";
import { textColor } from "../config";
import { SolutionContent, SolutionImage } from "../types";

export default function Solution() {
  const contentList: SolutionContent[] = [
    {
      title: "Folyamat nyomonkövetés",
      text: "Annak az érdekében, hogy termelésének teljes folyamatát le tudja képezni digitálisan, mi egy teljes rendszert tudunk ajánlani, ami a korábban is ismertnek tekinthető szenzorok mellett optikai szenzorokat is alkalmaz. Miért jó ez? Egyedi munkalépéseket igen nehéz hagyományos szenzorokkal leképezni, ekkor jön képbe a mesterséges intelligencia és a képfeldolgozás. Hiszen ezeknek segítségével speciális/komplex eseményeket is képesek vagyunk detektálni, ezáltal jegyzőkönyvben eltárolni és nyomon követni azok bekövetkeztét. Így lehetőséget kap a jövőben hatékonyan elkerülni ezeket a hibákat. ",
    },
    {
      title: "Gépi Látás",
      text: 'A gépi látás az a terület, ami arra fókuszál hogy a gépeket felruházzon a látás képességével. Ez alatt azt értjük hogy képes legyen tanulni, tudjon következtetéseket levonni, és cselekedni azok alapján amiket "lát". Ez egy alterülete a mesterséges intelligenciának, ami arra fókuszál hogy a gépeket ellássa egy az emberekéhez hasonló intelligenciával. Ezt kihasználva képesek vagyunk olyan hibák felderítésére, amiket más módon nem lehetne hatékonyan megtenni. Emellett ennek segítségével olyan megoldásokat is képesek vagyunk készíteni amik általánosíthatóak, tehát különböző munkafolyamatok megfigyelésére is fel lehet használni.',
    },
    {
      title: "Egyedi megoldások",
      text: "Megoldásaink során törekedtünk arra hogy minél olcsóbb megoldásokat tartalmazzok eszközök tekintetében. Erre kezdetben a Raspberry Pi 4 eszközöket használtuk. Ez azért jó, mert ezek lényegesen olcsóbb eszközök mint a speciális ipari kamerák. Mindemellett fontos cél volt, hogy a rendszer ne függjön semmilyen konkrét eszköztől és verziótól, így bármilyen más eszközt is fel lehet használni optikai szenzor gyanánt. Képfelismerési és mesterséges intelligencia témakörben is hasonló célokat tűztünk ki, hogy az eszközökhöz hasonlóan ezek is igény szerint cserélhetőek/bővíthetőek legyenek. Így ugyanazon rendszer, egy szimpla config fájl megváltoztatásával ki tud szolgálni több teljesen különböző felhasználói igényt.",
    },
  ];

  const imageList: SolutionImage[] = [
    { title: "title1", imageSrc: smartCameraImage },
    { title: "title2", imageSrc: cvImage },
    { title: "title3", imageSrc: desing },
  ];

  return (
    <Grid
      display="flex"
      flexDirection="row"
      height="90%"
      width="100%"

      // sx={{ border: "2px solid red" }}
    >
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        height="100%"
        width="50%"
        ml="25px"
        mt="50px"
        // sx={{ border: "2px solid blue" }}
      >
        <TextBox content={contentList[0]} />
        <ImageBox image={imageList[1]} />
        <TextBox content={contentList[2]} />
      </Grid>
      <Divider
        orientation="vertical"
        color={textColor}
        variant="middle"
        flexItem
        light
        sx={{ margin: 5, mt: "150px" }}
      />
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        height="100%"
        width="50%"
        mt="50px"
        // sx={{ border: "2px solid blue" }}
      >
        <ImageBox image={imageList[0]} />
        <TextBox content={contentList[1]} />
        <ImageBox image={imageList[2]} />
      </Grid>
    </Grid>
  );
}

type textProps = {
  content: SolutionContent;
};

function TextBox({ content }: textProps) {
  return (
    <Box
      height="30%"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Typography variant="h3" marginBottom="10px" color={textColor}>
        {content.title}
      </Typography>
      <Typography variant="body2" color={textColor}>
        {content.text}
      </Typography>
    </Box>
  );
}

type imgProps = {
  image: SolutionImage;
};

function ImageBox({ image }: imgProps) {
  return (
    <Box
      height="35%"
      width="100%"
      display="flex"
      justifyContent="center"
      marginBottom="10px"
      marginTop="10px"
    >
      <img
        style={{ borderRadius: "25px" }}
        height="100%"
        src={image.imageSrc}
      />
    </Box>
  );
}
