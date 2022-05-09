import React from 'react'
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Topnav, ButtonStyle, Footer } from './topnav';
import vect from "../UI/copyc.png"
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Ellipse3 from '../UI/Ellipse4.png';
import { bgcolor } from '@mui/system';
import BasicTable from './topnav'
import rc from '../UI/rc.png'
import yc from '../UI/yc.png'
import gc from '../UI/gc.png'

class CoachDashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const ContainerRow4Para = {
            fontSize: "16px"
        };
        const ContainerRow4Button = {
            fontSize: "16px",
            backgroundColor: "#144B9F",
            width: '30%'
        };
        const ContainerRow4Span = {
            display: 'none'
        };
        const ContainerRow6Div = {
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'row',
            jutifyContent: 'space-between'
        };
        const ContainerRow6Para = {
            fontWeight: 'bold'
        };
        
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
                        <br />
                        <Box component=""
                            sx={{ flexGrow: 1, bgcolor: '', p: 3 }}

                        >
                            {/* All Components Here */}
                            <Grid style={{ display: 'flex' }}>
                                <Container>
                                    <h3>Your Booking</h3>
                                    <BasicTable data="Ddd"/>
                                </Container>
                                <Container>
                                    <h3>SignUp Link</h3>
                                    <Box sx={{ flexGrow: 1, bgcolor: '#FFFFFF', p: 3 }}>
                                        <Box sx={{ flexGrow: 1, bgcolor: '#F1F4F9', p: 3 }}>
                                            <center><p style={ContainerRow4Para} id="myInputPageThree">totalhealthcheck.herouapp.com/signup/456fgfb-45f-48dda</p></center>
                                            <center>
                                                <button

                                                    className="buttonlogin" type="submit" style={ContainerRow4Button}>
                                                    <span class="tooltiptext" id="myTooltip" style={ContainerRow4Span}>Copy to clipboard</span>
                                                    <img className="vectimgPageThree" src={vect}></img>

                                                    Copy</button></center>

                                        </Box>

                                    </Box>
                                </Container>
                            </Grid>
                            <Grid>
                                <Container>
                                    <h3>Players</h3>
                                    <Box sx={{ flexGrow: 1, bgcolor: '#FFFFFF', p: 3 }}>
                                        <Grid>
                                            <div class="row " style={ContainerRow6Div} >
                                                <div className="col TextPageThree" style={{ marginRight: '59rem' }}>
                                                    <p>3/15 Players Registered</p>
                                                </div>
                                                <div className=" col Text1PageThree ">
                                                    <p style={ContainerRow6Para}>Sort by</p>

                                                </div>
                                            </div>

                                        </Grid>
                                        <Grid style={{display:'flex',justifyContent:'space-between'}}>
                                            {/* Cards */}
                                            <CardCompon />
                                            <CardCompon />
                                            <CardCompon />
                                            
                                           
                                        </Grid>

                                    </Box>
                                </Container>
                            </Grid>


                        </Box>
                        <Footer />

                    </Box>
                </Box>

            </React.Fragment>
        )
    }
}

export default CoachDashboard;

function CardCompon(){
    return(
        <>
         <Card sx={{ minWidth: 375, bgcolor: '#F1F4F9;' }}>
                                                <CardContent>
                                                    <Grid style={{ display: 'flex' }}>
                                                        <img src={Ellipse3} />
                                                        <p style={{ marginLeft: '2rem' }}>Toni Kross</p>
                                                    </Grid>
                                                    <Grid style={{display:'flex',justifyContent:'space-between',marginTop:'2rem'}}>
                                                       <div style={{display:'flex',justifyContent:'space-around'}}>
                                                           <img src={rc}/>&nbsp;&nbsp;
                                                           <img src={gc}/>&nbsp;&nbsp;
                                                           <img src={yc}/>
                                                       </div>
                                                       <div>
                                                           <ButtonStyle text="View Profile" width="134px" height='46px' fontSize='16px'/>
                                                       </div>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
        </>
    )
}