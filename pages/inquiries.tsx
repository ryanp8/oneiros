import { Container, Typography, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";

import Navbar from "../components/navbar";
import Modal from "../components/modal";

import { Release, releases } from "@/data/releasesData";

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
      <Navbar />
      <Box
        sx={{
          background: `linear-gradient(0deg, rgba(1,39,75,1) 0%, rgba(47,64,80,1) 100%);`,
          height: "100vh",
        }}
      >
        <Container sx={{ padding: 10 }}>
          <Typography
            variant="h2"
            color="white"
            fontFamily="Cardo"
            textAlign="center"
            marginBottom={4}
          >
            Inquiries
          </Typography>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              color="white"
              fontFamily="Cardo"
              sx={{ textAlign: "center" }}
            >
              For general inquiries, please email us at{" "}
              <Link
                style={{ textDecoration: "underline" }}
                href="mailto:fablemasonstudios@gmail.com"
              >
                fablemasonstudios@gmail.com
              </Link>
            </Typography>
          </Container>
        </Container>
        <Container sx={{ marginTop: 10 }}>
          <Typography
            variant="h2"
            color="white"
            fontFamily="Cardo"
            textAlign="center"
            marginBottom={4}
          >
            Advertising Grant
          </Typography>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              color="white"
              fontFamily="Cardo"
              sx={{ textAlign: "center" }}
            >
              Please fill out{" "}
              <Link
                style={{ textDecoration: "underline" }}
                href="mailto:fablemasonstudios@gmail.com"
              >
                this
              </Link>{" "}
              form if you&apos;re interested in our advertising grant!
            </Typography>
          </Container>
        </Container>
      </Box>

      {/* <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modalRelease={modalRelease}
        windowWidth={windowWidth}
      />
      <Container sx={{ marginTop: 10 }}>
        <Typography
          variant="h2"
          fontFamily="Cardo"
          textAlign="center"
          marginBottom={4}
        >
          Inquiries
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            color="black"
            fontFamily="Cardo"
            sx={{ textAlign: "center" }}
          >
            For general inquiries, please email us at{" "}
            <Link
              style={{ textDecoration: "underline" }}
              href="mailto:fablemasonstudios@gmail.com"
            >
              fablemasonstudios@gmail.com
            </Link>
          </Typography>
        </Container>
      </Container>
      <Container sx={{ marginTop: 10 }}>
        <Typography
          variant="h2"
          fontFamily="Cardo"
          textAlign="center"
          marginBottom={4}
        >
          Advertising Grant
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            color="black"
            fontFamily="Cardo"
            sx={{ textAlign: "center" }}
          >
            Please fill out{" "}
            <Link
              style={{ textDecoration: "underline" }}
              href="mailto:fablemasonstudios@gmail.com"
            >
              this
            </Link>
            {" "} form if you&apos;re interested in our advertising grant!
          </Typography>
        </Container>
      </Container> */}
    </>
  );
}
