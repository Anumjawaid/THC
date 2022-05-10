import React from 'react'
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Topnav,Footer } from './topnav';
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';
import CardComponent from "./cardcomponent";


const colour = {
    backgroundColor: "#e8f4f8"
  }
  
   const h4Style = {
    textAlign: "justify", 
    fontWeight :"bold",
    marginLeft: "5%"
   }
  
   const DropDown = {
    marginLeft: "-3%", 
    border: "none", 
    backgroundColor:  "#e8f4f8",
    
   }

class HealthCheckHistory extends React.Component{
    constructor(props){
        super()
          console.log(this.props);
          this.state = {
            date: [2023, 2022, 2021, 2025, 2024, 2026]
          }
      }


    handleChange = (event) => {
        event.preventDefault()
        console.log("change", event.target.value);
        const sortedDate = this.state.date.sort((a, b) => a - b);
        this.setState({
           date: sortedDate
        })
       console.log( this.state.date);
}        

    render(){
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

                         <Container>
                        
                         <Grid container spacing={2}>
                            <Grid item xs={6}>
                            <h3 style={h4Style}>Health Check History</h3>

                            </Grid>

                            <Grid item xs={6}>
                            <p className="float-end" style={{paddingLeft: "80%"}}><b>Sort By</b>
                            <span>
                               <select className="float-end" style={DropDown} onChange={(event) => this.handleChange(event)}>
                                <option value="oldest">Oldest First</option><option value="oldest">Oldest First</option></select> 

                            </span>
                            </p><br/>
                               
                            </Grid>
    
                        </Grid>   

                        <Grid container spacing={2}>
                          {
                                this.state.date.map((i) => {
                                    return <Grid item xs={4} style={colour}>
                                        <CardComponent text="Date Of Assessment" date = {i} /><br/>
                                        </Grid>
                                })
                         }

                        </Grid>
                         </Container>
                                










                                <Footer />

                    </Box>
                    </Box>

            </React.Fragment>
        )
    }
}

export default HealthCheckHistory;