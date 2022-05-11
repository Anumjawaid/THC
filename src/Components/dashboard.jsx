import React from 'react'
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Topnav,Footer } from './topnav';
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';
import Vector from "../UI/Vector.png";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



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
        this.state = {
            age: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            age: event.target.value
        })
       // setAge(event.target.value);
      };


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

                                     {/* form */}
                                     <Grid container spacing={2}>
                                         <Grid item xs={12}>
                                         <FormControl fullWidth style={{backgroundColor: "white"}}>
                                            <InputLabel id="demo-simple-select-label" >&nbsp;&nbsp;<b>Select Organization</b></InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age"
                                            value={this.state.age}
                                            onChange={this.handleChange}
                                            >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                         </Grid>
                                     </Grid>
                                     <br/>
                                     {/* checkbox */}
                                     <Grid container spacing={2}>
                                         <Grid item xs={4}>
                                           <FormGroup >
                                              <FormControlLabel control={<Checkbox defaultChecked  style={{color: "black"}} />} label="Chris Grey" />
                                              <FormControlLabel control={<Checkbox style={{color: "black"}}/>} label="Kevin Good" />
                                            </FormGroup>
                                         </Grid>
                                     </Grid>



                                    


                                </Box>
                                <br/><br/><br/><br/><br/><br/><br/><br/>
                                <Footer />

                    </Box>
                    </Box>

            </React.Fragment>
        )
    }
}

export default Dashboard;