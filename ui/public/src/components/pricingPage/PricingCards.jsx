
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const tier = [
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

function PricingCard() {

      <Card sx={{bgcolor: '#A8A8A8'}}>
        <CardHeader
          title={tier.title}
          subheader={tier.subheader}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{
            align: 'center',
          }}
        />
        <CardContent>
          <Box
            sx={{
              color:'#000000',
              display: 'flex',
              justifyContent: 'center',
              mb: 2,
            height:'180px',
            }}
          >
         
         <ul>
            {tier.description.map((line) => (
              <Typography
              color='#000000'
                component="li"
                variant="subtitle1"
                align="center"
                key={line}
              >
                {line}
              </Typography>
            ))}
          </ul>
          </Box>
            <Typography component="h2" variant="h3" color="#000000" display="flex">
              ${tier.price}
            </Typography>
        </CardContent>
      </Card>

 }

 export default PricingCard