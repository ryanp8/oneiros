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
        cursor: 'pointer'
      }}
    >
      {/* <Button
        onClick={props.onClick}
      > */}
      <Box sx={{ borderRadius: 10, overflow: "hidden" }}>
        <Image src={props.img} alt="headshot" width={200} height={200}></Image>
      </Box>
      {props.children}
      {/* </Button> */}
    </Grid>
  );
};

export default ReleaseCard;
