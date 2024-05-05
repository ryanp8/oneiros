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
import Link from "next/link";
import Head from "next/head";

import InstagramIcon from "@mui/icons-material/Instagram";
import AboutCard from "../components/aboutCard";
import ReleaseCard from "../components/releaseCard";
import Carousel from "../components/carousel";
import Iterative from "../components/iterativeText";

import { Release, featured } from "@/data/releases";
import { people } from "@/data/profiles";


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
              steps={modalRelease.descriptionImgs ? modalRelease.descriptionImgs.map((img, i) => {
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
              }) : []}
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
            <Link href="#featured" scroll={false}>
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
            <Link href="https://www.instagram.com/fablemasonstudios/">
              <InstagramIcon fontSize="large" style={{color: 'white'}}></InstagramIcon>
            </Link>
          </Container>
          <Typography color="white" fontFamily="Merriweather" sx={{textAlign: "center"}}>Contact us at: <Link style={{textDecoration: "underline"}} href="mailto:fablemasonstudios@gmail.com">fablemasonstudios@gmail.com</Link></Typography>
        </Container>
      </Box>
      <Box
        id="featured"
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
            Featured
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
              {featured.map((r, i) => {
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
