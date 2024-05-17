import * as React from "react";
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  Button,
  Modal,
  Grid,
} from "@mui/material";

import Image from "next/image";
import Carousel from "./carousel";
import { Release } from "@/data/releasesData";

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

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalRelease: Release | null;
  windowWidth: number;
}

export default function ReleaseModal({
  modalOpen,
  setModalOpen,
  modalRelease,
  windowWidth,
}: Props) {

  const [modalImgIdx, setModalImgIdx] = React.useState(0);

  return (
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
            steps={
              modalRelease.descriptionImgs
                ? modalRelease.descriptionImgs.map((img, i) => {
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
                  })
                : []
            }
          ></Carousel>
          {!(modalRelease.released === undefined || modalRelease.released) && (
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
  );
}
