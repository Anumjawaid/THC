import React from 'react'
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Topnav,Footer } from './topnav';
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';


const CardStyle = {
    width: '20rem',
    borderRadius: "4%"

}

const Cardheader = {
    backgroundColor: "#436FB2",
    textAlign: "justify", 
    borderRadius: "4%",
    marginTop: "-20px"
}

const CardText = {
    marginLeft: "20px",
    paddingBottom: "8px",
    color: "white"
}

const FirstDiv = {
    textAlign: "justify", 
    display: "flex" 
}

const secondDiv = {
    borderRadius: "90%",
    paddingLeft: "6px",
    height: "25px", 
    width: "30px", 
    backgroundColor: "#FC1826"
}


const thirdDiv = {
    borderRadius: "100%", 
    paddingLeft: "6px", 
    height: "25px",  
    width: "30px", 
    backgroundColor: "#F8BC12",
   
}

const fourthDiv = {
    borderRadius: "100%", 
    paddingLeft: "6px", 
    height: "25px",  
    width: "30px", 
    backgroundColor: "#8DB600"
}

const paraStyle = {
    fontSize: "13px", 
    paddingLeft: "5px",
    color: "white",
    position: "relative",
    bottom: "9px"
   
}

const secondPara = {
    fontSize: "13px", 
    paddingLeft: "2px",
    color: "white",
    position: "relative",
    bottom: "9px"
   
}


class CardComponent extends React.Component{
    constructor(props){
        super()
       
    }

    render(){
        console.log(this.props)
        return(
            <React.Fragment>
                   <Box sx={{ display: 'flex' }}>
                    {/* Drawer */}
                       <Container>
                       <Card style={CardStyle} key={this.props.date }>
                           <div style={Cardheader}>
                              <br/>
                              <p  style={CardText}> {this.props.text }</p> 

                             
                                
                              
                              <p  style={CardText}><b>Saturday, January, {this.props.date }</b></p>

                              
                           </div>
                            <CardContent>
                                <div style={FirstDiv} >
                                        <div  className="text-light" style={secondDiv}>
                                                <p style={paraStyle}>5</p>
                                        </div>&nbsp;&nbsp;
                                    
                                        <div  className="text-light" style={thirdDiv}>
                                                <p style={paraStyle}>2</p>
                                        </div>&nbsp;&nbsp;

                                
                                        <div  className="text-light" style={fourthDiv}>
                                                <p style={secondPara}>10</p>
                                        </div>
                                        
                            </div>
       

                            </CardContent>
                            </Card>
                       </Container>
                    </Box>

            </React.Fragment>
        )
    }
}


export default CardComponent;