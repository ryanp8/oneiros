import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import * as React from "react";

const AboutCard = ({ ...props }) => {
  return (
    <Grid
      item
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Image
        src={props.img}
        alt="headshot"
        width={150}
        height={150}
        style={{ borderRadius: "50%" }}
      ></Image>
      {props.children}
    </Grid>
  );
};

export default AboutCard;
