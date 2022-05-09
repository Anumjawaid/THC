import React from 'react'
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Topnav,Footer } from './topnav';
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



class HealthCheckComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var color = this.props.color
        const CardStyle = {
            borderRadius: "7px", 
            backgroundColor: color
        }
        return(
            <React.Fragment>
                      {/* Drawer */}
                      <Card style={CardStyle}>
                        <CardContent>
                           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <center>
                                <p className="text-light"><b>{this.props.title}</b></p>
                                 <p className="text-light"><b>{this.props.unit}</b></p>

                            </center>
                            </Typography>

                             
                        </CardContent>
                        <CardActions>
                        </CardActions>
                        </Card>

                      

                   



            </React.Fragment>
        )
    }
}

export default HealthCheckComponent