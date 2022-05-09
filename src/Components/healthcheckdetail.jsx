import React from 'react'
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Topnav,Footer } from './topnav';
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';
import Vector from '../UI/Vector.png'
import HealthCheckComponent from "./healthcheckcomponent";

const colour = {
    backgroundColor: "#e8f4f8"
  }
  
  const h4Style = {
    textAlign: "justify", 
    fontWeight :"bold"
  }
  
  const firstDiv = {
    backgroundColor: "white", 
    height: "60px",
     borderRadius: "8px", 
     display: "flex"
  
  }
  
  const secondDiv = {
    backgroundColor: "#436FB2", 
    width: "40px", 
    height: "40px", 
    borderRadius: "5px",
    marginTop: "10px",
    marginLeft: "10px"
  
  }

  
class HealthCheckDetail extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        // getting current date here
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        return(
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
                                    {/* All Components Here */}

                            <Container>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                        <h3 style={h4Style}>Health Check Details</h3><br/>

                                        </Grid>
                
                                    </Grid> 

                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <div style={firstDiv}> 
                                                    <div className="m-2" style={secondDiv}>
                                                        <img style= {{ paddingTop: "8px", paddingLeft: "8px"}} src={Vector} /></div>
                                                    <div style= {{ paddingLeft: "10px", paddingTop: "14px"}}><b>Date: {date}</b></div>
                                            </div>
                                        </Grid>
                
                                    </Grid>  <br/>
                                    {/* first row */}
                                     <Grid container spacing={3} style={colour}>
                                        <Grid item lg={3}>
                                        <HealthCheckComponent  color="#FC1826" title="Blood Glucose" unit="8mmol/L"/>
                                        </Grid>

                                        <Grid item lg={3}>
                                        <HealthCheckComponent  color="#F8BC12" title="Blood Pressure" unit="7/7mmHg"/>
                                        </Grid>

                                        <Grid item lg={3}>
                                        <HealthCheckComponent   color="#8DB600" title="Health Rate" unit="8 BPM"/>

                                        </Grid>

                                        <Grid item lg={3}>
                                        <HealthCheckComponent   color="#F8BC12" title="Oxygen Level" unit="mmHg"/>

                                        </Grid>
                
                                    </Grid>   

                                   {/* second row */}
                                   <Grid container spacing={3}>
                                        <Grid item lg={3}>
                                        <HealthCheckComponent color="#F8BC12" title="Cholestrol Level" unit="8mmol/L"/>

                                        </Grid>

                                        <Grid item lg={3}>
                                        <HealthCheckComponent   color="#8DB600" title="Body Mass Index" unit="7/7mmHg"/>

                                        </Grid>

                                        <Grid item lg={3}>
                                        <HealthCheckComponent  color="#FC1826" title="Body Temperature" unit="8 BPM"/>

                                        </Grid>

                                        <Grid item lg={3}>
                                        <HealthCheckComponent  color="#8DB600" title="Airway Peak Flow" unit="mmHg"/>

                                        </Grid>
                
                                    </Grid>   

                                    {/* third row */}
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                        <h4 style={{textAlign: "justify", fontWeight :"bold"}}>Lifestyle</h4><br/>

                                        </Grid>
                
                                    </Grid> 

                                    <Grid container spacing={3}>
                                        <Grid item lg={3}>
                                        <HealthCheckComponent  color="#8DB600"  title="Beep Test" unit="8 mmol/L"/>
                                        </Grid>

                                        <Grid item lg={3}>
                                        <HealthCheckComponent  color="#FC1826"  title="Vertical Jump" unit="7/7 mmHg"/>

                                        </Grid>

                                        <Grid item lg={3}>
                                        <HealthCheckComponent  color="#F8BC12"  title="100 m Sprint" unit="8 BPM"/>

                                        </Grid>

                                        <Grid item lg={3}>
                                        <HealthCheckComponent  color="#8DB600"  title="Reaction Time" unit="mmHg"/>
 
                                        </Grid>
                
                                    </Grid>   

                                    {/* fourth row */}
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                        <h4 style={{textAlign: "justify", fontWeight :"bold"}}>Fitness</h4><br/>

                                        </Grid>
                
                                    </Grid>

                                    <Grid container spacing={3}>
                                        <Grid item lg={3}>
                                        <HealthCheckComponent color="#FC1826"  title="Alcohol Intake" unit="8mmol/L"/>

                                        </Grid>

                                        <Grid item lg={3}>
                                        <HealthCheckComponent color="#F8BC12"  title="Sleep Quality" unit="7/7 mmHg"/>
                                        </Grid>

                                        <Grid item lg={3}>
                                        <HealthCheckComponent color="#8DB600"  title="Stress Level" unit="8 BPM"/>
                                        </Grid>

                                        <Grid item lg={3}>
                                        <HealthCheckComponent color="#F8BC12"  title="Diet Quality" unit="mmHg"/>
 
                                        </Grid>

                                        <Grid item lg={3}>
                                        <HealthCheckComponent color="#F8BC12"  title="Smoking Level" unit="8 mmol/L"/>
 
                                        </Grid>
                
                                    </Grid>   






                                    </Container>


                                </Box>
                                <Footer />


                    </Box>
                    </Box>

            </React.Fragment>
        )
    }
}

export default HealthCheckDetail;