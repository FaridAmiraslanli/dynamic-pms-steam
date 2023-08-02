import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Star from "../../assets/sass/Icons/Star.jsx";
import { useAutoAnimate } from "@formkit/auto-animate/react";

// import "../assets/Icons/Star.jsx"
// import Star from '../../assets/sass/Icons/Star.jsx';

// const footers = [
//   {
//     title: 'Company',
//     description: ['Team', 'History', 'Contact us', 'Locations'],
//   },
//   {
//     title: 'Features',
//     description: [
//       'Cool stuff',
//       'Random feature',
//       'Team feature',
//       'Developer stuff',
//       'Another one',
//     ],
//   },
//   {
//     title: 'Resources',
//     description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
//   },
//   {
//     title: 'Legal',
//     description: ['Privacy policy', 'Terms of use'],
//   },
// ];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Pricing2() {
  const [tiers, setTiers] = useState([
    {
      title: "Basic",
      credits: "150 credit",
      subheader: "150 Credit",
      price: "0",
      description: [
        "10 users included",
        "2 GB of storage",
        "Help center access",
        "Email support",
      ],
      buttonText: "Buy Credit",
      buttonVariant: "outlined",
    },
    {
      title: "Premium",
      credits: "150 credit",
      subheader: "500 Credit",
      price: "15",
      description: [
        "20 users included",
        "10 GB of storage",
        "Help center access",
        "Priority email support",
      ],
      buttonText: "Buy Credit",
      buttonVariant: "contained",
    },
    {
      title: "Platinum",

      subheader: "1500 Credit",
      price: "30",
      description: [
        "50 users included",
        "30 GB of storage",
        "Help center access",
        "Phone & email support",
      ],
      buttonText: "Buy Credit",
      buttonVariant: "outlined",
    },
  ]);
  const [parent] = useAutoAnimate();

  const handleClick = (title) => {
    // console.log(title)

    let draft = [...tiers];
    let index = draft.findIndex((el) => el.title === title);
    console.log(index);
    if (index !== 1) {
      let newArr = draft.map((el, ind, arr) => {
        if (ind === 1) {
          return arr[index];
        } else if (ind === index) {
          return arr[1];
        } else {
          return el;
        }
      });
      setTiers(newArr);
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      {/* <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
     
      </AppBar> */}
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="md"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          fontSize="32px"
          gutterBottom
          sx={{ color: "#fff" }}
        >
          Credit packs
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={3} alignItems="center" ref={parent}>
          {tiers.map((tier, ind) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise"}
              md={4}
            >
              <Card
                onClick={() => handleClick(tier.title)}
                data-id={tier.title}
                sx={{
                  bgcolor: "#181B29",
                  height: ind === 1 ? "460px" : "430px",
                  borderRadius: "24px",
                  width: "280px",
                  boxShadow: 2,
                  backgroundColor: ind === 1 ? "#5863D9" : "#181B29",
                }}
              >
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro"}
                  subheaderTypographyProps={{
                    align: "center",
                    color: "#fff",
                  }}
                  sx={{
                    bgcolor: "#181B29",
                    color: "#fff",
                    backgroundColor: ind === 1 && "#5863D9",
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      sx={{ color: "#fff" }}
                    >
                      ${tier.price}
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="start"
                        key={line}
                        sx={{ color: "#fff", display: "flex", gap: "10px" }}
                      >
                        {/* <Star /> */}
                        <Star /> {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions sx={{ height: "110px", justifyContent: "center" }}>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    sx={{
                      borderRadius: "32px",
                      width: "85%",
                      height: "40px",
                      color: "#271C62",
                      backgroundColor: ind == 1 ? "white" : "#8670FF",
                    }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      {/* <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      
      </Container> */}
      {/* End footer */}
    </ThemeProvider>
  );
}
