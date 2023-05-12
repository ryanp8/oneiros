import React from "react";
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  Button,
  Grid,
} from "@mui/material";
import Navbar from "../components/navbar";
import Image from "next/image";
// import background from "../public/background.jpeg";
import testImg from "../public/IMG_0422.jpg";
import Link from "next/link";

import InstagramIcon from "@mui/icons-material/Instagram";
import AboutCard from "../components/aboutCard";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

const people = [
  {
    name: "Bob",
    img: testImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida viverra orci, eu faucibus ligula tincidunt in. Aenean ornare urna eget volutpat luctus. Donec bibendum iaculis turpis, eget eleifend erat eleifend et. Etiam non fringilla dui, elementum porta nisl. Phasellus imperdiet eros at massa venenatis facilisis. Donec auctor ipsum sit amet nisi congue rhoncus. Aliquam tincidunt et justo quis elementum. Mauris vestibulum eu mi interdum viverra. Ut nulla nulla, tincidunt eu auctor eget, posuere sed elit. Nam non lacus luctus, iaculis odio ut, consequat ipsum.",
  },
  {
    name: "Bob",
    img: testImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida viverra orci, eu faucibus ligula tincidunt in. Aenean ornare urna eget volutpat luctus. Donec bibendum iaculis turpis, eget eleifend erat eleifend et. Etiam non fringilla dui, elementum porta nisl. Phasellus imperdiet eros at massa venenatis facilisis. Donec auctor ipsum sit amet nisi congue rhoncus. Aliquam tincidunt et justo quis elementum. Mauris vestibulum eu mi interdum viverra. Ut nulla nulla, tincidunt eu auctor eget, posuere sed elit. Nam non lacus luctus, iaculis odio ut, consequat ipsum.",
  },
  {
    name: "Bob",
    img: testImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida viverra orci, eu faucibus ligula tincidunt in. Aenean ornare urna eget volutpat luctus. Donec bibendum iaculis turpis, eget eleifend erat eleifend et. Etiam non fringilla dui, elementum porta nisl. Phasellus imperdiet eros at massa venenatis facilisis. Donec auctor ipsum sit amet nisi congue rhoncus. Aliquam tincidunt et justo quis elementum. Mauris vestibulum eu mi interdum viverra. Ut nulla nulla, tincidunt eu auctor eget, posuere sed elit. Nam non lacus luctus, iaculis odio ut, consequat ipsum.",
  },
  {
    name: "Bob",
    img: testImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida viverra orci, eu faucibus ligula tincidunt in. Aenean ornare urna eget volutpat luctus. Donec bibendum iaculis turpis, eget eleifend erat eleifend et. Etiam non fringilla dui, elementum porta nisl. Phasellus imperdiet eros at massa venenatis facilisis. Donec auctor ipsum sit amet nisi congue rhoncus. Aliquam tincidunt et justo quis elementum. Mauris vestibulum eu mi interdum viverra. Ut nulla nulla, tincidunt eu auctor eget, posuere sed elit. Nam non lacus luctus, iaculis odio ut, consequat ipsum.",
  },
  {
    name: "Bob",
    img: testImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida viverra orci, eu faucibus ligula tincidunt in. Aenean ornare urna eget volutpat luctus. Donec bibendum iaculis turpis, eget eleifend erat eleifend et. Etiam non fringilla dui, elementum porta nisl. Phasellus imperdiet eros at massa venenatis facilisis. Donec auctor ipsum sit amet nisi congue rhoncus. Aliquam tincidunt et justo quis elementum. Mauris vestibulum eu mi interdum viverra. Ut nulla nulla, tincidunt eu auctor eget, posuere sed elit. Nam non lacus luctus, iaculis odio ut, consequat ipsum.",
  },
];

export default function Home() {
  // const breakpoint = useMediaQuery(('max-width: 900px'));
  const [windowWidth, setWindowWidth] = React.useState(901);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <>
      <Navbar />
      <Container
        sx={{
          height: "95vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
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
          >
            The Oneiros Project
          </Typography>
          <Typography
            variant={windowWidth > 800 ? "h3" : "h5"}
            fontFamily="Merriweather"
            textAlign="center"
            fontWeight={100}
            marginTop={3}
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
      </Container>
      <Box
        id="releases"
        sx={{
          margin: 0,
          padding: "5%",
          minHeight: "100vh",
          background: "#ff9a03",
        }}
      >
        <Container sx={{ color: "white" }}>
          <Typography variant="h2" fontFamily="Merriweather" textAlign="center">
            Releases
          </Typography>
        </Container>
      </Box>
      <Box
        id="about"
        sx={{
          margin: 0,
          padding: "5%",
          minHeight: "100vh",
          background: "#048fd4",
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
                        fontFamily="Merriweather"
                        fontSize={18}
                      >
                        {p.name}
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
