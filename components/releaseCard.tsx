import { Grid, Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import * as React from "react";

const ReleaseCard = ({ ...props }) => {
  return (
    <Grid
      item
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      onClick={props.onClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: props.released ? "" : "pointer",
      }}
    >
      <Image
        src={props.img}
        alt="headshot"
        width={200}
        height={200}
        style={{ borderRadius: 40, padding: 10 }}
      ></Image>
      {props.children}
    </Grid>
  );
};

export default ReleaseCard;
