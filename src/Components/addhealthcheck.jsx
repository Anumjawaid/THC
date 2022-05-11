import React from 'react'
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Topnav,Footer } from './topnav';
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const FirstDiv = {
    backgroundColor: "#e8f4f8", 
    width: "1200px"
}

const h3Style = {
    fontWeight: "bold", 
    fontFamily: "Aeonik-Medium"
}

const ContainerStyle = {
    marginLeft: "2%", 
    width: "1000px"

}

const SecondContainerStyle = {
    backgroundColor: "white", 
    borderRadius: "20px"
}

const FormStyle = {
    borderRadius: "8px",
     backgroundColor: "#F1F4F9", 
     border: "#62C5C4"
}

const ButtonStyle = {
    backgroundColor: "#144B9F",
    marginLeft: "500%"
}

const FontStyle = {
    fontSize: "20px"
}

const para = {
    fontSize: "15px",
    fontWeight: "500",
}



class AddHealthCheck extends React.Component{
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

  
    // handle submit

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
        var errors = [];
        // var id = document.getElementById('input');
        // console.log(id.value, id, "id")
        // if(id.value === ""){
        //     console.log("if");
        //    id.setAttribute("aria-invalid", true);
        //    id.setAttribute("helperText", "Incorrect entry");
        //    id.setAttribute('id', 'outlined-error-helper-text')   
        //    id.style.border = "2px solid red"        
        //    console.log(id, "after if")
        // }else{
        //     console.log("else")
        // }
        var form = document.getElementById('form');
        console.log(form);
        var Inputs = document.getElementsByName('Inputs');
        console.log(Inputs);
        for(var i of Inputs){
            console.log(i);
            if(i.value === ""){
                errors.push("Please fill Fields")
                console.log(errors);
                i.style.border = "1px solid red"
            }

        }

        if(errors.length > 0){
            console.log(errors, errors.length)
            var errorDiv = document.getElementById("errors");
            errorDiv.innerHTML = "Please Fill All The Fields"
            errorDiv.style.color = "red";
            errorDiv.style.fontSize = "25px";
        }else{
            var errorDiv = document.getElementById("errors");
            errorDiv.innerHTML = "Thank You, Form Submitted!"
            errorDiv.style.color = "green";
            errorDiv.style.fontSize = "25px";
        }
        
       
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
                        <h2 className="float-start"><b>Add Health Check</b></h2>

                        <Box component=""
                                    sx={{ flexGrow: 1, bgcolor: '#FFFFFF', p: 3 }}
                                    
                                >
                                    {/* All Components Here */}
                                    <form fullWidth onSubmit={(event) => this.handleSubmit(event)} id="form">
                                    <Grid container spacing={2}>
                                      <Grid item xs={6}>
                                          <p style={para}>Organisations</p>
  
                                          <FormControl fullWidth >
                                            <InputLabel id="demo-select-small" ></InputLabel>
                                            <Select
                                            style={FormStyle}
                                            name="Inputs"
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            label="Age"
                                            onChange={this.handleChange}
                                            // value={this.state.age}

                                            >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                            </FormControl>

                                        </Grid>
                                        <Grid item xs={6}>
                                        <p style={para}>Players</p>
  
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                                <Select
                                                style={FormStyle}

                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Age"
                                                // value={this.state.age}
                                                name="Inputs"
                                                onChange={this.handleChange}

                                                >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                                </FormControl>

                                        </Grid>
                
                                    </Grid> 

                                    {/* medical History Questionnaire */}
                                    <h4 className="float-start"><b>Medical History Questionnaire</b></h4>
                                    {/* <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
             <TextField 
          //error
          id="input"
          label="Error"
        //   defaultValue="Hello World"
         // helperText="Incorrect entry."

        />
        </Box> */}
                                        <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                           <p style={para}>Family History</p>

                                           <TextField name="Inputs"  style={FormStyle} fullWidth id="filled-basic" label="Filled" variant="filled" />

                                            </Grid>
                                            <Grid item xs={6}>
                                            <p style={para}>Medical History</p>
                                            <TextField name="Inputs"   style={FormStyle}fullWidth id="filled-basic" label="Filled" variant="filled" />

                                            </Grid>

                                            <Grid item xs={6}>
                                            <p style={para}>Allergies</p>

                                            <TextField name="Inputs" fullWidth id="filled-basic" label="Filled" variant="filled" style={FormStyle}/>


                                            </Grid>

                                            <Grid item xs={6}>
                                            <p style={para}>Previous Sergeries</p>

                                            <TextField   name="Inputs" fullWidth id="filled-basic" label="Filled" variant="filled"   style={FormStyle}
/>


                                            </Grid>

                                            <Grid item xs={6}>
                                            <p style={para}>Previous Injuries</p>

                                            <TextField  name="Inputs" fullWidth id="filled-basic" label="Filled" variant="filled"   style={FormStyle}/>


                                            </Grid>

                                        </Grid> 
                                    {/* life style questionnaire */}
                                    <h4 className="float-start"><b>LifeStyle Questionnaire</b></h4>

                                    <Grid container spacing={2}>
                                      <Grid item xs={6}>
                                          <p style={para}>Sleep Quality</p>
  
                                          <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label"></InputLabel>
                                            <Select
                                            //  value={this.state.age}
                                             name="Inputs"
                                             onChange={this.handleChange}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age"
                                            style={FormStyle}

                                            >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                            </FormControl>

                                        </Grid>
                                        <Grid item xs={6}>
                                        <p style={para}>Smoking Level</p>
  
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                                <Select
                                                //  value={this.state.age}
                                                 name="Inputs"
                                                 onChange={this.handleChange}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Age"
                                                style={FormStyle}

                                                >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                                </FormControl>

                                        </Grid>

                                        <Grid item xs={6}>
                                        <p style={para}>Stress Level</p>
  
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                                <Select
                                                //  value={this.state.age}
                                                 name="Inputs"
                                                 onChange={this.handleChange}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Age"
                                                style={FormStyle}

                                                >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                                </FormControl>

                                        </Grid>

                                        <Grid item xs={6}>
                                        <p style={para}>Deit Quality</p>
  
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                                <Select
                                                // value={this.state.age}
                                                name="Inputs"
                                                onChange={this.handleChange}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Age"
                                                style={FormStyle}

                                                >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                                </FormControl>

                                        </Grid>

                                        <Grid item xs={6}>
                                        <p style={para}>Alcohol Level</p>
  
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                                <Select
                                                //   value={this.state.age}
                                                  name="Inputs"
                                                  onChange={this.handleChange}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Age"
                                                style={FormStyle}

                                                >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                                </FormControl>

                                        </Grid>
                
                                    </Grid> 

                                    {/* physical */}
                                    <h4 className="float-start"><b>Physical</b></h4>

                                        <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <p style={para}>Sysoic blood pressure</p>

                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                                <Select
                                                //  value={this.state.age}
                                                 name="Inputs"
                                                 onChange={this.handleChange}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Age"
                                                style={FormStyle}

                                                >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                                </FormControl>

                                            </Grid>
                                            <Grid item xs={6}>
                                            <p style={para}>Sysoic Blood Pressure</p>

                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                                    <Select
                                                    //  value={this.state.age}
                                                     name="Inputs"
                                                     onChange={this.handleChange}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Age"
                                                    style={FormStyle}

                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </FormControl>

                                            </Grid>

                                            <Grid item xs={6}>
                                            <p style={para}>Stress Level</p>

                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                                    <Select
                                                    //  value={this.state.age}
                                                     name="Inputs"
                                                     onChange={this.handleChange}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Age"
                                                    style={FormStyle}

                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </FormControl>

                                            </Grid>

                                            <Grid item xs={6}>
                                            <p style={para}>Deit Quality</p>

                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                                    <Select
                                                    //  value={this.state.age}
                                                     name="Inputs"
                                                     onChange={this.handleChange}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Age"
                                                    style={FormStyle}

                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </FormControl>

                                            </Grid>

                                            <Grid item xs={6}>
                                            <p style={para}>Stress Level</p>

                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                                    <Select
                                                    //  value={this.state.age}
                                                     name="Inputs"
                                                     onChange={this.handleChange}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Age"
                                                    style={FormStyle}

                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </FormControl>

                                            </Grid>

                                            <Grid item xs={6}>
                                            <p style={para}>Stress Level</p>

                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                                    <Select
                                                    //  value={this.state.age}
                                                     name="Inputs"
                                                     onChange={this.handleChange}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Age"
                                                    style={FormStyle}

                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </FormControl>

                                            </Grid>


                                            <Grid item xs={6}>
                                            <p style={para}>Stress Level</p>

                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                                    <Select
                                                    //  value={this.state.age}
                                                     name="Inputs"
                                                     onChange={this.handleChange}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Age"
                                                    style={FormStyle}

                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </FormControl>

                                            </Grid>


                                            <Grid item xs={6}>
                                            <p style={para}>Stress Level</p>

                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                                    <Select
                                                    //  value={this.state.age}
                                                     name="Inputs"
                                                     onChange={this.handleChange}

                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Age"
                                                    style={FormStyle}

                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </FormControl>

                                            </Grid>
                                            <Grid item xs={6}>
                                            <p style={para}>Stress Level</p>

                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                                    <Select
                                                    //  value={this.state.age}
                                                     name="Inputs"
                                                     onChange={this.handleChange}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Age"
                                                    style={FormStyle}

                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </FormControl>

                                            </Grid>
                                            <Grid item xs={6}>
                                            <p style={para}>Stress Level</p>

                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                                    <Select
                                                    //  value={this.state.age}
                                                     name="Inputs"
                                                     onChange={this.handleChange}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Age"
                                                    style={FormStyle}

                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </FormControl>

                                            </Grid>


                                             {/* life style questionnaire */}
                                    <h4 className="float-start"><b>Fitness</b></h4>

                                        <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <p style={para}>Sleep Quality</p>

                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                                <Select
                                                //  value={this.state.age}
                                                 name="Inputs"
                                                 onChange={this.handleChange}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Age"
                                                style={FormStyle}

                                                >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                                </FormControl>

                                            </Grid>
                                            <Grid item xs={6}>
                                            <p style={para}>Smoking Level</p>

                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                                    <Select
                                                    //  value={this.state.age}
                                                     name="Inputs"
                                                     onChange={this.handleChange}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Age"
                                                    style={FormStyle}

                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </FormControl>

                                            </Grid>

                                            <Grid item xs={6}>
                                            <p style={para}>Stress Level</p>

                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                                    <Select
                                                    //  value={this.state.age}
                                                     name="Inputs"
                                                     onChange={this.handleChange}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Age"
                                                    style={FormStyle}

                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </FormControl>

                                            </Grid>

                                            <Grid item xs={6}>
                                            <p style={para}>Deit Quality</p>

                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                                    <Select
                                                    //  value={this.state.age}
                                                     name="Inputs"
                                                     onChange={this.handleChange}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Age"
                                                    style={FormStyle}

                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </FormControl>

                                            </Grid>

                                            <Grid item xs={6}>
                                            <p style={para}>Alcohol Level</p>

                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                                    <Select
                                                    //  value={this.state.age}
                                                     name="Inputs"
                                                     onChange={this.handleChange}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Age"
                                                    style={FormStyle}

                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </FormControl>

                                            </Grid>

                                        </Grid> 

                                        </Grid> 
                                         
                                         {/* Notes */}
                                         <h4 className="float-start"><b>Notes</b></h4>

                                         <Grid item xs={12}>
                                             <FormControl fullWidth>
                                             <TextareaAutosize
                                                     name="Inputs"
                                                    // maxRows={5}
                                            
                                                style = {{height: "90px"}}
                                            />
                                             </FormControl>
                                        

                                         </Grid><br/>
                                         <center><div id="errors"></div><br/></center>
                                           <Stack direction="row" spacing={2}>
                                           <center> <Button variant="contained" type="submit" style={ButtonStyle}>Submit</Button> </center>
                                             </Stack>
                                           
                                            </form>


                                </Box>
                                <Footer />

                    </Box>
                    </Box>

            </React.Fragment>
        )
    }
}

export default AddHealthCheck