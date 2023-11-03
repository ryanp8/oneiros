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

import InstagramIcon from "@mui/icons-material/Instagram";
import AboutCard from "../components/aboutCard";
import ReleaseCard from "../components/releaseCard";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import zachImg from "../public/headshots/IMG_5443 - Zachary Braffman.jpg";
import reneeImg from "../public/headshots/Corriveau photo - Renee Corriveau.jpg";
import adamImg from "../public/headshots/A26E2D8D-B52C-4CBD-848C-57930AAD9992 - Adam Durr.jpeg";
import normanImg from "../public/headshots/190E6BFB-34CD-47A6-84BB-52C211E60AC2 (1) - Mira Norman.jpeg";
import anthonyImg from "../public/headshots/Senior_Picture - Anthony Bartolomei.jpg";
import sidImg from "../public/headshots/SG_Oneiros_Profile - Siddharth Gupta.jpg";

import pbeImg from "../public/pbeCover.png";
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
      "Zachary is 1st year film and computer science student who founded the Oneiros Project. He's working in a little bit of each facet of the group, and is looking forward to telling interesting and fun stories!",
  },
  {
    name: "Renee Corriveau",
    img: reneeImg,
    role: "Production Coordinator",
    description:
      "Renee is a graduate creative leadership student at Northwestern who joined the Oneiros project in 2023. She works in a variety of roles including script editor, sound engineer and assists with coordination of all stages of production. Her favorite role is proponent of unsolicited movie recommendations.",
  },
  {
    name: "Adam Durr",
    img: adamImg,
    role: "Writer",
    description:
      "Adam is a first-year student studying political science. He has creative writing experience from programs at Interlochen Arts Academy, and joined Oneiros as a writer in the fall of 2022. He is currently working on several projects, and is very excited to see where they go!",
  },
  {
    name: "Mira Norman",
    img: normanImg,
    role: "Actor, Script Editor",
    description:
      "Mira is a 1st year materials engineering student that helps out with voice acting and script editing. They are very excited to see the final projects for Oneiros!",
  },
  {
    name: "Anthony Bartolomei",
    role: "General Manager, Editor",
    img: anthonyImg,
    description:
      "Anthony is a 2nd year engineering student who's joined the Oneiros project this year. He is overseeing and is working in the audio editing pipeline. He is excited about our upcoming projects and hopes everyone else is too!",
  },
  {
    name: "Siddharth Gupta",
    role: "Project Manager",
    img: sidImg,
    description:
      "Siddharth is a filmmaker, illustrator, and podcaster currently studying as a Master's student in Northwestern University's Leadership for Creative Enterprises program, designed to provide a comprehensive business administration education tailored to the arts and entertainment field. At Oneiros, they're leveraging their animation, filmmaking, and podcasting experiences to help manifest our stories through their multimedia production skills, providing research support, script and audio editing, and voice acting. They are also the host and producer of Manga Mavericks, a podcast and media outlet dedicated to discussing manga as a medium and an industry. They love bringing together and collaborating with their fellow creatives, combining their individual talents and expertises to create and share stories with audiences who'll be inspired by them to tell their own.",
  },
];

interface Release {
  name: string;
  img: StaticImageData;
  description: string;
  url?: string;
  embedPlayer?: ReactJSXElement;
}

const releases: Release[] = [
  {
    name: "Pursuit of the Bitter End",
    img: pbeImg,
    description: "Description",
  },
  {
    name: "Doctor Sparky's Rocket Fuel",
    img: pbeImg,
    description: "Description",
    embedPlayer: (
      <iframe
        src="https://embed.acast.com/653f005b18e0ae0011387407?feed=true"
        frameBorder="0"
        width="100%"
        height="280px"
      ></iframe>
    ),
  },
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

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <>
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
            <Box sx={{ borderRadius: 5, overflow: "hidden" }}>
              <Image
                src={modalRelease.img}
                alt={modalRelease.name}
                width={windowWidth > 900 ? 400 : windowWidth * 0.6}
                height={windowWidth > 900 ? 400 : windowWidth * 0.6}
              ></Image>
            </Box>
            <Typography
              id="modal-modal-title"
              sx={{ color: "white", marginY: 2 }}
              fontFamily="Monospace"
              variant="h6"
              component="h2"
            >
              {modalRelease.name}
            </Typography>
            {modalRelease.embedPlayer && modalRelease.embedPlayer}
            <Typography
              id="modal-modal-description"
              fontFamily="Merriweather"
              fontWeight={100}
              sx={{ mt: 2, color: "white" }}
            >
              {modalRelease.description}
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
          backgroundImage: `linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)`,
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
            color="#555555"
          >
            The Oneiros Project
          </Typography>
          <Typography
            variant={windowWidth > 800 ? "h3" : "h5"}
            fontFamily="Merriweather"
            textAlign="center"
            fontWeight={100}
            marginTop={3}
            color="#ffffff"
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
              <InstagramIcon fontSize="large"></InstagramIcon>
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
          // background: "#ff9a03",
          // backgroundImage: `linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)`,
          background: "#ff9a03",
          backgroundImage: `linear-gradient(130deg, rgba(255,154,3,1) 0%, rgba(255,211,148,1) 100%)`,
        }}
      >
        <Container sx={{ color: "white" }}>
          <Typography variant="h2" fontFamily="Merriweather" textAlign="center">
            Releases
          </Typography>
          <Box sx={{ flexGrow: 1, marginY: 5 }}>
            <Grid container spacing={6}>
              {releases.map((r, i) => {
                return (
                  <>
                    <ReleaseCard
                      xs={12}
                      sm={6}
                      md={4}
                      img={r.img}
                      key={i}
                      onClick={() => {
                        setModalRelease(r);
                        setModalOpen(true);
                      }}
                    >
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
                        fontSize={14}
                        textAlign="center"
                      >
                        {r.description}
                      </Typography>
                    </ReleaseCard>
                  </>
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
          background: `linear-gradient(90deg, rgba(4,143,212,1) 0%, rgba(0,71,106,1) 100%)`,
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
                  <>
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
                  </>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
