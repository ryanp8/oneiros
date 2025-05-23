import { Container, Typography, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import Head from "next/head";

import Navbar from "../components/navbar";
import Modal from "../components/modal";

import { Release, releases } from "@/data/releasesData";

interface CardProps {
  item: Release;
}
function LeftCard({ item }: CardProps) {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-apart",
        marginY: 2,
      }}
    >
      <Box sx={{ width: "100%", marginLeft: 2 }}>
        <h1 style={{ color: "#ffffff", fontFamily: "Cardo" }}>{item.name}</h1>
        <Typography sx={{ fontFamily: "Cardo", color: "#ffffff" }}>
          {item.description}
        </Typography>
        {item.url && (
          <Box sx={{ display: "flex", padding: 0 }}>
            <Link href={item.url} scroll={false}>
              <Box
                sx={{
                  background: "#ff9a03",
                  color: "white",
                  paddingX: 2,
                  paddingY: 1,
                  marginY: 2,
                  borderRadius: 4,
                }}
              >
                <Typography fontSize={18} fontFamily="Cardo">
                  Listen Here
                </Typography>
              </Box>
            </Link>
          </Box>
        )}
      </Box>
      <Image
        src={item.img}
        alt="headshot"
        width={250}
        height={250}
        style={{ borderRadius: "10%", margin: 2 }}
      ></Image>
    </Container>
  );
}

function RightCard({ item }: CardProps) {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-apart",
        marginY: 2,
        flexDirection: "row-reverse",
      }}
    >
      <Box sx={{ width: "100%", marginLeft: 2 }}>
        <h1 style={{ color: "#ffffff", fontFamily: "Cardo" }}>{item.name}</h1>
        <Typography sx={{ fontFamily: "Cardo", color: "#ffffff" }}>
          {item.description}
        </Typography>
        {item.url && (
          <Box sx={{ display: "flex", padding: 0 }}>
            <Link href={item.url} scroll={false}>
              <Box
                sx={{
                  background: "#ff9a03",
                  color: "white",
                  paddingX: 2,
                  paddingY: 1,
                  marginY: 2,
                  borderRadius: 4,
                }}
              >
                <Typography fontSize={18} fontFamily="Cardo">
                  Listen Here
                </Typography>
              </Box>
            </Link>
          </Box>
        )}
      </Box>
      <Image
        src={item.img}
        alt="headshot"
        width={250}
        height={250}
        style={{ borderRadius: "10%", margin: 2 }}
      ></Image>
    </Container>
  );
}

export default function Releases() {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalRelease, setModalRelease] = React.useState<Release | null>(null);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Head>
        <title>Team | Fable Mason Studios</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="Fable Mason Logo Compressed.png"
        />
      </Head>
      <Navbar />
      <Box
        sx={{
          margin: 0,
          padding: "5%",
          minHeight: "100vh",
          background: `linear-gradient(0deg, rgba(1,39,75,1) 0%, rgba(47,64,80,1) 100%);`,
        }}
      >
        <Typography
          variant="h2"
          fontFamily="Cinzel Decorative"
          textAlign="center"
          color="#ffffff"
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
            if (i % 2 == 0) {
              return <LeftCard key={i} item={item} />;
            }
            return <RightCard key={i} item={item} />;
          })}
        </Container>
      </Box>
    </>
  );
}
