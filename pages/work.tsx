import { Container, Typography, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";

import Navbar from "../components/navbar";

import justiceArchImg from "../public/justicearch.png";
import skuyImg from "../public/skuy.webp";

const items = [
  {
    title: "Justice Arch",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7166489053930962944/",
    image: justiceArchImg,
  },
  {
    title: "Skuy",
    url: "https://www.instagram.com/skuy.app/",
    image: skuyImg,
  },
];

export default function work() {
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: 10 }}>
        <Typography variant="h2" fontFamily="Merriweather" textAlign="center" marginBottom={4}>
          Our Other Works
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {items.map((item, i) => {
            return (
              <Box
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
                  key={i}
                  src={item.image}
                  alt={item.title}
                  style={{ borderRadius: 20 }}
                  // width={windowWidth > 900 ? 400 : windowWidth * 0.6}
                  // height={windowWidth > 900 ? 400 : windowWidth * 0.6}
                ></Image>
                <Box>
                  <Typography
                    variant="h4"
                    fontFamily="Merriweather"
                    textAlign="center"
                    sx={{ marginY: 2 }}
                  >
                    {item.title}
                  </Typography>
                  <Link href={item.url} target="_blank">
                    <Typography textAlign="center">
                      Click here to view
                    </Typography>
                  </Link>
                </Box>
              </Box>
            );
          })}
        </Container>
      </Container>
    </>
  );
}
