import { Grid, Typography } from "@mui/material";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>About Us</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h1">Hello</Typography>
        </Grid>
      </Grid>
    </>
  );
}
