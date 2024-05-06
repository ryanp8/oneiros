import { Container, Typography, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";

import Navbar from "../components/navbar";

import { releases } from "@/data/releasesData";

export default function Releases() {
  const [windowWidth, setWindowWidth] = React.useState(0);
  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: 10 }}>
        <Typography
          variant="h2"
          fontFamily="Merriweather"
          textAlign="center"
          marginBottom={4}
        >
          Our Work
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {releases.map((item, i) => {
            return (
              <Box
                key={i}
                sx={{
                  paddingY: 6,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // borderBottomWidth: 1,
                  // borderBottomColor: '#888888'
                  borderTop: 1,
                  borderColor: "#555555",
                  width: "80%",
                }}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  style={{ borderRadius: 20 }}
                  width={windowWidth > 900 ? 250 : windowWidth * 0.6}
                  height={windowWidth > 900 ? 250 : windowWidth * 0.6}
                ></Image>
                <Box>
                  <Typography
                    variant="h4"
                    fontFamily="Merriweather"
                    textAlign="center"
                    sx={{ marginY: 2 }}
                  >
                    {item.name}
                  </Typography>
                  {item.url && (
                    <Link href={item.url} target="_blank">
                      <Typography textAlign="center">
                        Click here to view
                      </Typography>
                    </Link>
                  )}
                </Box>
              </Box>
            );
          })}
        </Container>
      </Container>
    </>
  );
}
