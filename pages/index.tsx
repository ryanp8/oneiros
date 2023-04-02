import React from "react";
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  Button,
} from "@mui/material";
import Navbar from "../components/navbar";
import Image from "next/image";
import background from "../public/background.jpeg";
import Link from "next/link";

import InstagramIcon from "@mui/icons-material/Instagram";

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
          <Typography variant="h1" textAlign="center">
            Oneiros
          </Typography>
          <Typography variant="h3" textAlign="center" fontWeight={100}>
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
                <Typography fontSize={24}>Our Work</Typography>
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
          height: "100vh",
          background: "#ff9a03",
        }}
      >
        <Container sx={{ color: "white" }}>
          <Typography variant="h2" textAlign="center">
            Releases
          </Typography>
        </Container>
      </Box>
      <Box
        id="about"
        sx={{
          margin: 0,
          padding: "5%",
          height: "100vh",
          background: "#048fd4",
        }}
      >
        <Container sx={{ color: "white" }}>
          <Typography variant="h2" textAlign="center">
            About Us
          </Typography>
        </Container>
      </Box>
    </>
  );
}
