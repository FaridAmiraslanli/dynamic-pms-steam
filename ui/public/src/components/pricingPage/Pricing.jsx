import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container'; 
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import { Button, Stack } from "@mui/material";
import './pricing.scss'



const tiers = [
  {
    title: 'Basic',
    price: '20',
    description: [
      '150 credit',
    ],
    buttonText: 'Buy',
    buttonVariant: 'contained',
  },
  {
    title: 'Premium',
    subheader: 'Best Deal',
    price: '40',
    description: [
      'Take 500 Credit',
    ],
    buttonText: 'Buy',
    buttonVariant: 'contained',
  },
  {
    title: 'Platinum',
    price: '90',
    description: [
      'Take 1500 Credit',
    ],
    buttonText: 'Buy',
    buttonVariant: 'contained',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Pricing() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
   
      {/* Hero unit */}
      
      <Grid container  disableGutters component="main"  className='main' spacing={5} sx={{ pt: 8, pb: 6, display: "flex", justifyContent: "flex-end"}}>
        <Grid  item md={8} sx={{ display: "flex",justifyContent:"flex-end"}}>
        <Typography
          component="h1"
          variant="h1"
          align="center"
          color="#FFFFFF"
          gutterBottom
          bgcolor='#695B5B'
          width='469px'
          height='80px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          fontSize='24px'
         
        >
          Credit Packs
        </Typography>
        </Grid>
       
        <Grid
        item md={4}
        display="flex"
      justifyContent={{sm: 'center', xs: 'center', md: 'end'}}>
        <Button
         variant="contained" sx={{width: '300px', height:'40px', bgcolor:'#9EFF23', color: '#000000'}} >Try Demo</Button>
         </Grid>



        



      
      </Grid>

      <Container  /*className="sabina"*/ maxWidth='xl' /*component="main"*/>
        <Grid container spacing={5} /*alignItems="flex-end"*/>
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card sx={{bgcolor: '#A8A8A8'}}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  
                  // titleTypographyProps={{ align: 'center' }}
                  // subheaderTypographyProps={{
                  //   align: 'center'
                  // }}
                  //sx={{
    
                    // backgroundColor: (theme) =>
                    //   theme.palette.mode === 'light'
                    //     ? theme.palette.grey[200]
                    //     : theme.palette.grey[700],
                  //}}
                />
                <CardContent >
                  <Box
                  
                    sx={{
                      color:'#000000',
                      // display: 'flex',
                      // justifyContent: 'center',
                      mb: 2,
                    height:'200px'
                    }}
                  >
                 
                 <ul>
                    {tier.description.map((line) => (
                      <Typography
                      color='#000000'
                        component="li"
                        variant="subtitle1"
                        // align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                  </Box>
                    <Typography component="h2" variant="h3" color="#000000">
                      ${tier.price}
                    </Typography>
                  
                
                </CardContent>
                <CardActions>
                  <Button variant="contained" sx={{width: '90%', height:"50px", bgcolor:'#9EFF23', color: '#000000', margin: 'auto', marginBottom: "30px"}} >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </ThemeProvider>
  );
}