import React from 'react'
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Topnav,Footer } from './topnav';
import { Grid, Container, FormControl, InputLabel, Input, white } from '@material-ui/core';
import { Chart, registerables } from 'chart.js';
import { Bubble, Line } from 'react-chartjs-2';
import LineGraph from 'react-line-graph'
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { render } from "@testing-library/react";


const colour = {
    backgroundColor: "#e8f4f8"
  
  }

  const para = {
    paddingTop: "10px",
    color: "white",
    paddingBottom: "5px"
  }
  
  const DivStyle = {
    backgroundColor: "#7293C5", 
    borderRadius: "5px"
  }

class Graphs extends React.Component {

    constructor(props){
        super()
          console.log(this.props);
      }

      render(){
        const color = this.props.color
        const data = this.props.data
        
        if( data === "2"){
          var stateData =  [
            {
              
              backgroundColor: 'red',
              borderColor: 'red',
            
              borderWidth: 2,
              data:[65, 70, 60, 81, 56] 
            }
            ,
            {
              
              backgroundColor: 'white',
              borderColor: 'white',
            
              borderWidth: 2,
              data:[60, 90, 60, 51, 46] 
            }
          ]
    
        }else{
          var stateData =  [
            {
              
              backgroundColor: 'white',
              borderColor: 'white',
            
              borderWidth: 2,
              data:[60, 90, 60, 51, 46] 
            }
          ]
        }
       
        const state = {
            labels: ['Title1', 'Title2', 'Title3',
                     'Title4'],
         
                datasets: stateData
              
           
          }

          const firstDiv = {
            backgroundColor: color, 
            borderRadius: "5px"

          }
        return(
            <React.Fragment>
                         <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    {/* <Item> */}
                                    <div style={firstDiv}>
                                    <center><p style={para} ><b>Blood Pressure</b></p></center>  
                                    <center> <p style={para}>Current Result: 7/7 mmHg</p></center>  
                                    <center>  <p style={para} >Poor</p></center>  
                                    </div>
                                    {/* </Item> */}
                                </Grid>

                                 <Grid item xs={8}>
                                    {/* <Item> */}
                                     <h3 ><b>{this.props.title}</b></h3> 
                                     {/* </Item> */}
                                </Grid> 

                         </Grid> 

                         <div style={DivStyle}>
                                <Line

                                data={state}  
                                height={ "90%" } 
                                color={"white"}


                                options={{
                                title:{
                                    display:true,
                                    fontSize:20,
                                },

                                
                                plugins: {
                                legend: false 
                                },
                                }}
                                />
                               </div>


            </React.Fragment>
        )
      }










}
export default Graphs