import React from 'react'
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Topnav,Footer } from './topnav';
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';
import Vector from "../UI/Vector.png";
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

const container = {
    backgroundColor: "#e8f4f8",
    padding:'11px'
 }
 
 const secondContainer = {
    backgroundColor: "#e8f4f8",
    marginLeft: "1%"
 
 }
 
 
 const firstDiv = {
    backgroundColor: "#e8f4f8", 
    height: "60px", 
    borderRadius: "8px",
    display: "flex",
    marginLeft: "55%"
 }
 
 const secondDiv = {
     backgroundColor: "#436FB2",
     width: "40px", 
     height: "40px",
     borderRadius: "5px"
 }


class Dashboard  extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
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

                                    <Grid container spacing={2}>
                                      <Grid item xs={7}>
                                         <h3 className="float-start"><b>John Doe</b></h3>

                                        </Grid>
                                        <Grid item xs={5}>
                                        <div  style={firstDiv}> 
                                            <div style={secondDiv}><img style= {{ paddingTop: "8px", paddingLeft: "8px"}} src={Vector} /></div>
                                        <div style= {{ paddingLeft: "10px", paddingTop: "7px"}}><b>Date: {date}</b></div>
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

export default Dashboard;