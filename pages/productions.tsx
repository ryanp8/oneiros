import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

import Navbar from "../components/navbar";
import Card from "../components/card";

import testImg2 from "../public/testImg2.png";

export default function Home() {
  return (
    <Container
      sx={{ minWidth: "100%", minHeight: "100vh", background: "black" }}
    >
      <Navbar />

      <Typography variant="h2" color="white" textAlign="center">
        Our Projects
      </Typography>
      <Container sx={{marginTop: 5, }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, lg: 12 }}
          sx={{ margin: 5 }}
        >
          <Grid item xs={1} sm={4} lg={3}>
            <Card
              title="Pursuit of the Bitter End"
              imageSrc={testImg2}
              description="Test description"
            ></Card>
          </Grid>
          <Grid item xs={1} sm={4} lg={3}>
            <Card
              title="Pursuit of the Bitter End"
              imageSrc={testImg2}
              description="Test description"
            ></Card>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
