import * as React from "react";
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  Button,
  Grid,
} from "@mui/material";

import Navbar from "../components/navbar";
import { people } from "@/data/profilesData";

import AboutCard from "../components/aboutCard";

export default function Team() {
  return (
    <>
      <Navbar />
      <Box
        id="about"
        sx={{
          margin: 0,
          padding: "5%",
          minHeight: "100vh",
          background: "#fdbb2d"
        }}
      >
        <Container sx={{ color: "white" }}>
          <Typography variant="h2" fontFamily="Merriweather" textAlign="center">
            Our Team
          </Typography>
          <Box sx={{ flexGrow: 1, marginY: 5 }}>
            <Grid container spacing={6}>
              {people
                .filter((p) => !p.alum)
                .map((p, i) => {
                  return (
                    <AboutCard xs={12} sm={6} md={4} img={p.img} key={i}>
                      <Typography
                        fontWeight={100}
                        textAlign="center"
                        fontFamily="Merriweather"
                        fontSize={18}
                      >
                        {p.name}
                      </Typography>
                      <Typography
                        fontWeight={800}
                        fontFamily="Merriweather"
                        fontSize={14}
                        textAlign="center"
                        sx={{ marginY: "1em" }}
                      >
                        {p.role}
                      </Typography>
                      <Typography
                        fontWeight={100}
                        fontFamily="Merriweather"
                        fontSize={14}
                        textAlign="center"
                      >
                        {p.description}
                      </Typography>
                    </AboutCard>
                  );
                })}
            </Grid>
          </Box>
        </Container>
        <Container sx={{ color: "white" }}>
          <Typography variant="h2" fontFamily="Merriweather" textAlign="center">
            Alumni
          </Typography>
          <Box sx={{ flexGrow: 1, marginY: 5 }}>
            <Grid container spacing={6}>
              {people
                .filter((p) => p.alum)
                .map((p, i) => {
                  return (
                    <AboutCard xs={12} sm={6} md={4} img={p.img} key={i}>
                      <Typography
                        fontWeight={100}
                        textAlign="center"
                        fontFamily="Merriweather"
                        fontSize={18}
                      >
                        {p.name}
                      </Typography>
                    </AboutCard>
                  );
                })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
