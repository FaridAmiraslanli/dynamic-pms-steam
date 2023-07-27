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
import "./newresearches.scss";
const NewResearches = () => {
  return (
    <>
      <Container className="newresearch">
        <Grid className="container general-grid">
          <Grid className="down-part">
            <Button>Logo</Button>

            <Button className="addBalance">Add Balance</Button>
          </Grid>

          <Grid>
            <Box>
              <Typography
                sx={{
                  marginBottom: "45px",
                  fontSize: "20px",
                  marginTop: "45px",
                  display: "flex",
                  justifyContent: "center",
                }}
                align="center"
              >
                Lorem Ipsum
              </Typography>
            </Box>
          </Grid>
          <Container className="middle-container">
            <Grid className="large-grid">
              <Box className="middle-box">
                <Typography
                  sx={{
                    paddingTop: "20px",
                  }}
                  align="center"
                  className="new-research"
                >
                  New research
                </Typography>

                <Grid
                  className="grid-outline"
                  sx={{ padding: "5px" }}
                  item
                  xs={12}
                  sm={12}
                  variant="rounded"
                >
                  <FormLabel className="url" component="legend">
                    URL
                  </FormLabel>
                  <TextField
                    className="textfield-outline Mui-focused"
                    autoComplete="given-name"
                    name="fullName"
                    fullWidth="920px"
                    id="fullName"
                    placeholder="Enter steam url"
                    autoFocus={false}
                    sx={{
                      borderColor: "#DDDDDD",
                      width: "95%",
                      display: "flex",
                      margin: "auto",
                    }}
                  />
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "25px",
                  }}
                ></Box>
                <Box className="box-button">
                  <Button
                    sx={{
                      backgroundColor: "#B0B0B0",
                      color: "#000",
                      width: "160px",
                      height: "40px",
                      borderRadius: "0",
                      marginRight: "13px",
                      textTransform: "none",
                    }}
                    variant="contained"
                  >
                    back
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: "#9EFF23",
                      color: "#000",
                      width: "160px",
                      height: "40px",
                      borderRadius: "0",
                      marginRight: "13px",
                      textTransform: "none",
                    }}
                    variant="contained"
                  >
                    choose credit pack
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Container>
        </Grid>
        <Grid className="support-grid">
          <Button className="support-button">Support</Button>
        </Grid>
      </Container>
    </>
  );
};
export default NewResearches;
