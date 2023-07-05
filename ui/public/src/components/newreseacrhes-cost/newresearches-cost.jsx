import { Box, Button, Container, FormLabel, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import "./newresearches-cost.scss"
const NewResearchesCost = () => {
  return (
    <>
     <Container>
   <Grid
      className='container general-grid'>

    <Grid className='down-part'>
      <Button>
        Logo
      </Button>

      <Button
      className='addBalance'
      >
        Add Balance
      </Button>
    </Grid>

    <Grid>

      <Box>

      <Typography
      sx={{
        marginBottom:"45px",
        fontSize: "20px",
        marginTop: "45px",
        display: "flex",
        justifyContent: "center"
      }} align='center'>
        Lorem Ipsum
      </Typography>
      </Box>
    </Grid>
<Container className='middle-container'>
    <Grid className='large-grid'>
    <Box className= "middle-box">
      <Typography sx={{
        paddingTop: "20px"
      }} align='center' className='new-research'>
        New research
      </Typography>
 <Typography align='center'
 sx={{
  color: "#C6C6C6"
 }}>We'll analyze 25,000 reviews</Typography>

 <Box sx={{
  display: "flex",
  justifyContent: "center",
  marginTop: "25px"
 }}>
  <Typography
  sx={{
    textAlign: "center",
    alignSelf: "center"
  }}
  >Total cost</Typography>
  <Button className='100-credit'
  sx={{
    padding: "0",
    backgroundColor: "#5C5C5C",
    color: "#fff",
    width: "100px",
    height: "35px",
    borderRadius: "0",
    marginLeft: "10px",
    textTransform: "none"
  }}>100 credit</Button>
 </Box>
                <Box className="box-button">
                     <Button sx={{
                backgroundColor: "#B0B0B0",
                color: "#000",
                width: "160px",
                height: "40px",
                borderRadius: "0",
                marginRight: "13px",
                textTransform: "none"
             }}  variant='contained'>back</Button>
             <Button sx={{
                backgroundColor: "#9EFF23",
                color: "#000",
                width: "160px",
                height: "40px",
                borderRadius: "0",
                marginRight: "13px",
                textTransform: "none"
             }} variant='contained'>choose credit pack</Button>
                </Box>
             
    </Box>

    </Grid>
</Container>
   </Grid>
   <Grid className='support-grid'>
    <Button className='support-button'>
      Support
    </Button>
   </Grid>
     </Container>

    </>
  )
}
export default NewResearchesCost;