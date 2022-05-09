import React from 'react'
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Topnav,Footer } from './topnav';
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Graphs from "./graphs";
import Vector from '../UI/Vector.png'

Chart.register(...registerables);


const ContainerStyle = {
  backgroundColor: "#e8f4f8"
}

const FirstDiv = {
  backgroundColor: "white", 
  height: "60px", 
  borderRadius: "8px", 
  display: "flex"

}

const SecondDiv = {
  backgroundColor: "#436FB2", 
  width: "40px", 
  height: "40px", 
  borderRadius: "5px",
  marginTop: "10px",
  marginLeft: "10px"

}



class BloodPressureGraph extends React.Component{
    constructor(props){
        super()
          console.log(this.props);
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
                       
                       
                           
                          
                       <h5 ><b>Your Last Check</b></h5>
                       <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <div style={FirstDiv}> 
                                <div  style={SecondDiv}>
                                    <img style= {{ paddingTop: "8px", paddingLeft: "8px"}} src={Vector} /></div>
                                <div style= {{ paddingLeft: "10px", paddingTop: "14px"}} ><b>Date: {date}</b></div>
                             </div>
                            </Grid>
    
                        </Grid>    
                        
                        <Graphs color="red" title="previous blood pressure results" data="2"/>
                        
                         </Box>
                         <Footer />
    
             </Box>
             </Box>
    
     </React.Fragment>
          

        )
    }
}


export default BloodPressureGraph