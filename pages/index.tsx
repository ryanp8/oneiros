import React from "react";
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  Button,
  Modal,
  Grid,
} from "@mui/material";
import Navbar from "../components/navbar";
import Image, { StaticImageData } from "next/image";
// import background from "../public/background.jpeg";
import testImg from "../public/IMG_0422.jpg";
import Link from "next/link";
import Head from "next/head";

import InstagramIcon from "@mui/icons-material/Instagram";
import AboutCard from "../components/aboutCard";
import ReleaseCard from "../components/releaseCard";
import Carousel from "../components/carousel";
import Iterative from "../components/iterativeText";

import zachImg from "../public/headshots/zach.jpg";
import reneeImg from "../public/headshots/renee.jpg";
import adamImg from "../public/headshots/adam.jpg";
import anthonyImg from "../public/headshots/Senior_Picture - Anthony Bartolomei.jpg";
import sidImg from "../public/headshots/sid.jpg";
import breannaImg from "../public/headshots/KakaoTalk_Photo_2023-06-17-04-07-44 - Breanna Lee.jpeg";
import siannaImg from "../public/headshots/sianna.jpg";
import ryanImg from "../public/headshots/ryan.png";
import brodyImg from "../public/headshots/brody.jpg";
import devanImg from "../public/headshots/devan.jpg";
import emmaImg from "../public/headshots/emma.jpg";
import nicoImg from "../public/headshots/nico.jpg";
import gavinImg from "../public/headshots/gavin.jpg";

import pbeImg from "../public/pbeCover.png";
import pbeImg2 from "../public/pbe2.jpeg";
import drSparkyImg from "../public/DrSparkysBlack.jpeg";
import moonlightDinerImg from "../public/moonlightDiner.jpeg";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface Bio {
  name: String;
  img: StaticImageData;
  role: String;
  description: String;
}

const people: Bio[] = [
  {
    name: "Zachary Braffman",
    img: zachImg,
    role: "Founder, Writer, Director, Actor, Producer",
    description:
      "Zachary is second-year film and computer science student who founded Fable Mason Studios. He's working in a little bit of each facet of the group, and is looking forward to telling interesting and fun stories!",
  },
  {
    name: "Adam Durr",
    img: adamImg,
    role: "Writer",
    description:
      "Adam is a second-year student studying political science. He has creative writing experience from programs at Interlochen Arts Academy, and joined Fable Mason Studios as a writer in the fall of 2022. He is currently working on several projects, and is very excited to see where they go!",
  },
  // {
  //   name: "Breanna Lee",
  //   role: "Video Editor",
  //   img: breannaImg,
  //   description:
  //     "Breanna is a first-year RTVF student and has recently become part of Fable Mason Studios, taking charge of video editing. She's enthusiastic about our upcoming projects and looks forward to the team's shared excitement!",
  // },
  {
    name: "Gavin Shaub",
    role: "Actor, Performer Liaison, Graphic Designer",
    img: gavinImg,
    description: "Shaub is a third-year Business Minor and Theater Major with an emphasis on Screen Acting and Costume Design. He works for the Wirtz Performance Center as a graphic designer. Shaub has acted in various short and feature-length films, educational theatre productions, and audio dramas. He works for Fable Mason Studios as an actor, graphic designer, script developer, and liaison to the Northwestern Acting community."
  },
  {
    name: "Brody Bundis",
    role: "Writer, Director, Production Coordinator",
    description:
      "Brody is an RTVF freshman who is excited to work on projects in any medium and help students tell their stories.",
    img: brodyImg,
  },
  {
    name: "Sianna Perez",
    role: "Finances",
    img: siannaImg,
    description:
      "Sianna is a first year student studying mathematics who joined Fable Mason Studios to help with project funding and financing. She is working on brainstorming ways to commodify and fund new projects. She is excited to see the growth of upcoming projects and our team!",
  },
  {
    name: "Ryan Poon",
    role: "Operations",
    img: ryanImg,
    description: "Ryan is a sophomore studying computer science and math who is excited to see and contribute towards all of the creative projects Fable Mason Studios is working on. He currently maintains the website and helps with funding research."
  },
  {
    name: "Emma Scally",
    role: "Web Developer",
    description: "Emma is a second-year student studying computer science and data science. She joined Fable Masons Studios this year and is helping with web development. She has loved the opportunity to combine her interest in technology and story-telling, and is excited to be a part of Fable Mason Studios' journey!",
    img: emmaImg
  },
  {
    name: "Devan Chanda",
    role: "Head of Social Marketing & Branding",
    img: devanImg,
    description: "My name is Devan Chanda and I am a second-year from La Jolla, CA here studying Computer Engineering and Business Institutions. My primary interests and skills include programming, hardware, product management, business analytics, and marketing. I manage the social media presence and overall branding/marketing for Fable Mason Studios. I’m excited to work each week to bring everyone new content and insights into the amazing work we do here!"
  },
  {
    name: "Nico Antezano",
    role: "Sound Editor/Composer",
    description: "Nico is a second-year student studying mechanical engineering who joined Fable Mason Studios as a sound editor and composer. He is very excited to work on upcoming projects with the rest of the team!",
    img: nicoImg
  },
  {
    name: "Renee Corriveau",
    img: reneeImg,
    role: "Production Coordinator",
    description:
      "Renee is a graduate creative leadership student at Northwestern who joined Fable Mason Studios in 2023. She works in a variety of roles including script editor, sound engineer and assists with coordination of all stages of production. Her favorite role is proponent of unsolicited movie recommendations.",
  },
  {
    name: "Siddharth Gupta",
    role: "Project Manager",
    img: sidImg,
    description:
      "Siddharth is a filmmaker, illustrator, and podcaster currently studying as a Master's student in Northwestern University's Leadership for Creative Enterprises program, designed to provide a comprehensive business administration education tailored to the arts and entertainment field. At Fable Mason Studios, they're leveraging their animation, filmmaking, and podcasting experiences to help manifest our stories through their multimedia production skills, providing research support, script and audio editing, and voice acting. They are also the host and producer of Manga Mavericks, a podcast and media outlet dedicated to discussing manga as a medium and an industry. They love bringing together and collaborating with their fellow creatives, combining their individual talents and expertises to create and share stories with audiences who'll be inspired by them to tell their own.",
  },
  // {
  //   name: "Anthony Bartolomei",
  //   role: "Editor",
  //   img: anthonyImg,
  //   description:
  //     "Anthony is a third-year engineering student who's joined Fable Mason Studios this year. He is overseeing and is working in the audio editing pipeline. He is excited about our upcoming projects and hopes everyone else is too!",
  // },
];

interface Release {
  name: string;
  img: StaticImageData;
  logline?: String;
  description: string;
  url?: string;
  embedPlayer?: ReactJSXElement;
  released?: boolean;
  descriptionImgs: StaticImageData[];
  artCredits?: string[];
}

const releases: Release[] = [
  {
    name: "Pursuit of the Bitter End",
    img: pbeImg2,
    descriptionImgs: [pbeImg2, pbeImg],
    logline:
      "Back in the Old West, two men are fated to hunt each other, both seeing themselves as the hero.",
    description:
      "Henry Alhborn has been accused of a crime he's adamant he didn't commit, and Walter Hall is determined to bring him to justice. When the stakes turn personal, it becomes clear that only one man will walk away.",
    released: false,
    artCredits: ['Tiffany Chung', 'Gavin Shaub']
  },
  {
    name: "Doctor Sparky's Rocket Fuel",
    img: drSparkyImg,
    descriptionImgs: [drSparkyImg],
    logline:
      "The hosts of Hollywood's Best Idea Yet conduct an ad read for Doctor Sparky's Rocket Fuel, an energy drink with a \"daring new mix of vitamins,\" and a growing list of side effects.",
    description:
      "The hosts of Hollywood's Best Idea Yet conduct an ad read for Doctor Sparky's Rocket Fuel, an energy drink with a \"daring new mix of vitamins,\" and a growing list of side effects.",
    embedPlayer: (
      <iframe
        src="https://embed.acast.com/653f005b18e0ae0011387407?feed=true"
        frameBorder="0"
        width="100%"
        height="280px"
      ></iframe>
    ),
    artCredits: ["@NyazureDreams"],
  },
  {
    name: "The Moonlight Diner",
    img: moonlightDinerImg,
    logline: "Stories, dreams, and dark secrets all collide at The Moonlight Diner, a 1950s establishment in the middle of the Arizona desert.",
    description: "Stories, dreams, and dark secrets all collide at The Moonlight Diner, a 1950s establishment in the middle of the Arizona desert.",
    descriptionImgs: [moonlightDinerImg]
  }
];

const modalStyle = (w: number) => {
  return {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#263950",
    p: 3,
    borderRadius: 5,
    outline: "none",
    overflow: "scroll",
    height: "70vh",
  };
};

export default function Home() {
  // const breakpoint = useMediaQuery(('max-width: 900px'));
  const [windowWidth, setWindowWidth] = React.useState(901);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalRelease, setModalRelease] = React.useState<Release | undefined>();
  const [modalImgIdx, setModalImgIdx] = React.useState(0);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <>
      <Head>
        <title>Fable Mason Studios</title>
        <link rel="shortcut icon" type="image/png" href="Fable Mason Logo Compressed.png"/>
      </Head>
      <Navbar />
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {modalRelease ? (
          <Box sx={modalStyle(windowWidth)}>
            <Carousel
              modalImgIdx={modalImgIdx}
              setModalImgIdx={setModalImgIdx}
              steps={modalRelease.descriptionImgs.map((img, i) => {
                return (
                  <Image
                    key={i}
                    src={img}
                    alt={modalRelease.name}
                    style={{ borderRadius: 20 }}
                    width={windowWidth > 900 ? 400 : windowWidth * 0.6}
                    height={windowWidth > 900 ? 400 : windowWidth * 0.6}
                  ></Image>
                );
              })}
            ></Carousel>
            {!(
              modalRelease.released === undefined || modalRelease.released
            ) && (
              <Typography
                color="red"
                fontWeight={800}
                style={{ textAlign: "center", marginTop: 8 }}
              >
                Coming Soon!
              </Typography>
            )}
            {modalRelease.artCredits && (
              <Typography
                fontSize={11}
                color="#dddddd"
                fontFamily="Merriweather"
                marginTop={1}
                textAlign="center"
              >
                Art by: {modalRelease.artCredits[modalImgIdx]}
              </Typography>
            )}
            <Typography
              id="modal-modal-title"
              sx={{ color: "white", marginY: 2 }}
              fontFamily="Monospace"
              variant="h6"
              component="h2"
            >
              {modalRelease.name}
            </Typography>
            <Typography
              id="modal-modal-description"
              fontFamily="Merriweather"
              fontWeight={100}
              fontSize={14}
              sx={{ my: 3, color: "white" }}
            >
              {modalRelease.description}
            </Typography>
            {modalRelease.embedPlayer && modalRelease.embedPlayer}
            <Typography
              fontSize={11}
              color="#dddddd"
              fontFamily="Merriweather"
              marginTop={4}
            >
              Note: This audio short is a work of fiction. Any similarities to
              real-life companies or people are purely coincidental.
            </Typography>
          </Box>
        ) : (
          <></>
        )}
      </Modal>
      <Box
        sx={{
          height: "95vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          // backgroundImage: `linear-gradient(0deg, #8c6234 0%, #2f4050 100%)`,
          backgroundColor: '#2f4050'
        }}
      >
        <Container
          sx={{
            marginTop: 15,
            // display: "flex",
            // alignItems: "center",
            // flexDirection: "column",
          }}
        >
          <Typography
            variant={windowWidth > 800 ? "h1" : "h2"}
            fontFamily="Courier"
            fontWeight={100}
            textAlign="center"
            color="#ffffff"
          >
            <Iterative text="Fable Mason Studios" />
          </Typography>
          <Typography
            variant={windowWidth > 800 ? "h3" : "h5"}
            fontFamily="Merriweather"
            textAlign="center"
            fontWeight={100}
            marginTop={3}
            color="#aaaaaa"
          >
            A student-run multimedia startup based out of Northwestern
            University
          </Typography>
        </Container>
        <Container>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Link href="#releases" scroll={false}>
              <Box
                sx={{
                  background: "#ff9a03",
                  color: "white",
                  paddingX: 4,
                  paddingY: 1,
                  borderRadius: 4,
                }}
              >
                <Typography fontSize={24} fontFamily="Merriweather">
                  Our Work
                </Typography>
              </Box>
            </Link>
          </Container>
          <Container
            sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}
          >
            <Link href="https://www.instagram.com/the.oneiros.project/">
              <InstagramIcon fontSize="large" style={{color: 'white'}}></InstagramIcon>
            </Link>
          </Container>
        </Container>
      </Box>
      <Box
        id="releases"
        sx={{
          margin: 0,
          padding: "5%",
          minHeight: "100vh",
          background: "#fdbb2d",
          // backgroundImage: `linear-gradient(0deg, #2f4050 0%,  100%)`,
        }}
      >
        <Container sx={{ color: "white" }}>
          <Typography variant="h2" fontFamily="Merriweather" textAlign="center">
            Releases
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              marginY: 5,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid container spacing={6}>
              {releases.map((r, i) => {
                return (
                  <ReleaseCard
                    xs={12}
                    sm={6}
                    md={4}
                    img={r.img}
                    key={i}
                    released={
                      r.released === undefined
                        ? false
                        : (!r.released as boolean)
                    }
                    onClick={() => {
                      setModalRelease(r);
                      setModalOpen(true);
                    }}
                  >
                    {!(r.released === undefined || r.released) && (
                      <Typography color="red" fontWeight={800}>
                        Coming Soon!
                      </Typography>
                    )}
                    <Typography
                      fontWeight={400}
                      textAlign="center"
                      fontFamily="Merriweather"
                      fontSize={24}
                    >
                      {r.name}
                    </Typography>
                    <Typography
                      fontWeight={100}
                      fontFamily="Merriweather"
                      fontSize={12}
                      textAlign="center"
                      marginY={1}
                    >
                      {r.logline}
                    </Typography>
                  </ReleaseCard>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box
        id="about"
        sx={{
          margin: 0,
          padding: "5%",
          minHeight: "100vh",
          // background: "#048fd4",
          background: `linear-gradient(0deg, rgba(1,39,75,1) 0%, rgba(47,64,80,1) 100%);`,
        }}
      >
        <Container sx={{ color: "white" }}>
          <Typography variant="h2" fontFamily="Merriweather" textAlign="center">
            About Us
          </Typography>
          <Box sx={{ flexGrow: 1, marginY: 5 }}>
            <Grid container spacing={6}>
              {people.map((p, i) => {
                return (
                  <AboutCard xs={12} sm={6} md={4} img={p.img} key={i}>
                    <Typography
                      fontWeight={100}
                      textAlign="center"
                      fontFamily="Merriweather"
                      fontSize={18}
                    >
                      {p.name}
                    </Typography>
                    <Typography
                      fontWeight={800}
                      fontFamily="Merriweather"
                      fontSize={14}
                      textAlign="center"
                      sx={{ marginY: "1em" }}
                    >
                      {p.role}
                    </Typography>
                    <Typography
                      fontWeight={100}
                      fontFamily="Merriweather"
                      fontSize={14}
                      textAlign="center"
                    >
                      {p.description}
                    </Typography>
                  </AboutCard>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
