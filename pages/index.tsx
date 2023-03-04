import React from "react";
import { Container, Typography, Box, useMediaQuery } from "@mui/material";
import Navbar from "../components/navbar";
import Image from "next/image";
import testImg from "../public/IMG_0422.jpg";

export default function Home() {
  // const breakpoint = useMediaQuery(('max-width: 900px'));
  const [windowWidth, setWindowWidth] = React.useState(901);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <Container
      sx={{ minWidth: "100%", minHeight: "100vh", background: "black" }}
    >
      <Navbar />
      <h1>Oneiros</h1>
      <Container
        sx={{
          minWidth: "100%",
          display: "flex",
          flexDirection: windowWidth < 900 ? "column" : "row",
        }}
      >
        <Box
          sx={{
            maxWidth: windowWidth < 900 ? "100%" : "50%",
            // marginBottom: windowWidth < 900 ? "20" : "0",
            marginTop: windowWidth < 900 ? 5 : 0,
            marginBottom: windowWidth < 900 ? 5 : 0,
            wbackgroundColor: "red",
          }}
        >
          <Typography
            variant="h1"
            color="white"
            sx={{
              textAlign: windowWidth < 900 ? "center" : "left",
              marginBottom: windowWidth < 900 ? 5 : 3,
            }}
          >
            The Oneiros Project
          </Typography>
          <Typography
            variant="h4"
            color="white"
            sx={{
              fontWeight: 300,
              textAlign: windowWidth < 900 ? "center" : "left",
            }}
          >
            A multimedia production startup from Northwestern University
            currently working on audio dramas.
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            // width: 'full',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: 'red'
          }}
        >
          {/* <Typography variant="h1" color="white">An image should go here</Typography> */}
          <Image src={testImg} alt="test image"></Image>
        </Box>
      </Container>
    </Container>
  );
}
