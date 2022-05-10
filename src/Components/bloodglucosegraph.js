import React, { Component } from "react";
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Graphs from "./graphs";
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Topnav,Footer } from './topnav';
import {  Container, FormControl, Grid, InputLabel, Input, Button } from '@material-ui/core';



Chart.register(...registerables);

  const FirstDiv = {
    backgroundColor: "#e8f4f8",
    width: "1100px"
  }

  const ContainerStyle = {
    marginLeft: "2%",
     backgroundColor: "#e8f4f8",
     width: "1000px"
  }

  const colour = {
    backgroundColor: "#e8f4f8"
  }

  const colourDiv = {
    backgroundColor: "white"
  }

  const para = {
    paddingTop: "20px",
    paddingLeft: "10px"
  }

  const para2 = {
    paddingLeft: "10px"
  }

  const buttonStyle = {
    backgroundColor: "#144B9F",
    color: "white",
    marginLeft: "10px",
    marginBottom: "10px"
  }
  class BloodGlucoseGraph extends React.Component {
    constructor(props){
      super()
        console.log(this.props);
    }

    render(){

     return (
        <React.Fragment>
        <Box sx={{ display: 'flex' }}>
         {/* Drawer */}
         <SideBar />

         <Box
             component="main"
             sx={{ flexGrow: 1, bgcolor: '#F1F4F9', p: 3 }}
         >
             {/* Your Component */}
             <Topnav />
             <br/>
             <Box component=""
                         sx={{ flexGrow: 1, p: 3 }}

                     >
                   
                   
                       
                      
                        <h3 className= "pb-3" ><b>Your Last Check</b></h3>
                                      
                    
                        <Graphs color="#F8BC12" title="previous blood glucose results"  data="1"/><br/><br/>
                      
                        <Grid container spacing={2}>
                              <Grid item xs={12}>
                              <div style={colourDiv}>
                                    <p style={para}><b>What your Result Means</b></p>
                                    <p style={para2} >Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum
                                            dolor sit amet, Lorem  ipsum  dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor Lorem ipsum dolor sit amet,Lorem ipsum dolor Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, </p>
                                    
                                    <Button className="m-2" style={buttonStyle}>Learn More</Button>
                                </div>
                              </Grid>

                        </Grid>
                     </Box>
                     <Footer />

         </Box>
         </Box>

 </React.Fragment>
      
         
     )
    }
 
 }
 
 export default BloodGlucoseGraph