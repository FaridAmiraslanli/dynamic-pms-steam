import {
  Box,
  Button,
  Container,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./demoresearches.scss";
const DemoResearches = () => {
  return (
    <>
      <Container className="demoresearch">
        <Grid className="down-part">
          <Button sx={{color: "#000000"}}>Logo</Button>

          <Button sx={{textTransform: "capitalize"}} className="addBalance">Add Balance</Button>
        </Grid>
        <Grid className="container general-grid">
          <Grid className="middle-gridd">
            <Grid>
              <Button
                sx={{
                  color: "#000",
                  width: "200px",
                  height: "50px",
                  border: "3px solid red",
                  marginTop: "25px",
                  marginBottom: "25px",
                }}
              >
                Demo Researches
              </Button>
            </Grid>

            <Grid
              sx={{
                backgroundColor: "#DDDDDD",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>God Of War</Typography>
              <Button sx={{ backgroundColor: "#62B273", color: "#fff" }}>
                open
              </Button>
            </Grid>
            <Grid
              sx={{
                backgroundColor: "#DDDDDD",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Apex Legends</Typography>
              <Button sx={{ backgroundColor: "#62B273", color: "#fff" }}>
                open
              </Button>
            </Grid>
            <Grid
              sx={{
                backgroundColor: "#DDDDDD",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>CSGO</Typography>
              <Button sx={{ backgroundColor: "#62B273", color: "#fff" }}>
                open
              </Button>
            </Grid>

            <Button
              sx={{
                color: "#000000",
                backgroundColor: "#9EFF23",
                width: "170px",
                height: "40px",
                marginTop: "20px",
                textTransform: "none",
              }}
            >
              add new researches
            </Button>
          </Grid>


        </Grid>
        <Grid className="support-grid">
          <Button className="support-button">Support</Button>
        </Grid>
      </Container>
    </>
  );
};
export default DemoResearches;
