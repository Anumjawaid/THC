import React from 'react'
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Topnav, Footer } from './topnav';
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';
import John from '../UI/Ellipse2.png'
import gender from '../UI/gender.png'
import age from '../UI/age.png'
import weight from '../UI/weight.png'
import height from '../UI/height.png'
import BasicTable from './topnav'


class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
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
                            <Grid style={{ display: 'flex', justifyContent: 'space-between' }}>
                                {/* the above two */}
                                <Grid>
                                    <h3>User Profile</h3>
                                    <Box component=""
                                        sx={{ flexGrow: 1, bgcolor: '#FFFFFF', p: 3 }}
                                        style={{ width: '602px' }}

                                    >
                                        <Grid style={{ display: 'flex', backgroundColor: '#F1F4F9', marginBottom: '1rem', padding: '1.5rem' }}>
                                            <img src={John} />
                                            <p style={{ marginLeft: '1rem' }}>Johnson</p>
                                        </Grid>
                                        <Grid style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div style={{ borderRadius: '5px', backgroundColor: '#F1F4F9', width: '153px', borderRadius: '10px', padding: '0.5rem', marginRight: '1rem' }}>
                                                <img src={gender} />
                                                <p>Gender: Male</p>
                                            </div>
                                            <div style={{ borderRadius: '5px', backgroundColor: '#F1F4F9', width: '153px', borderRadius: '10px', padding: '0.5rem', marginRight: '1rem' }}>
                                                <img src={age} />
                                                <p>Age: 32</p>
                                            </div>
                                            <div style={{ borderRadius: '5px', backgroundColor: '#F1F4F9', width: '153px', borderRadius: '10px', padding: '0.5rem', marginRight: '1rem' }}>
                                                <img src={weight} />
                                                <p>Weight: 32kg</p>
                                            </div>
                                            <div style={{ borderRadius: '5px', backgroundColor: '#F1F4F9', width: '153px', borderRadius: '10px', padding: '0.5rem' }}>
                                                <img src={height} />
                                                <p>Height: 167cm</p>
                                            </div>


                                        </Grid>


                                    </Box>

                                </Grid>
                                <Grid>
                                    <h3>Next Appointment</h3>
                                    <BasicTable />
                                </Grid>
                            </Grid>
                            <Grid style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                                {/* The Graphs */}
                                <h3>Health</h3>
                                <Grid style={{display:'flex',justifyContent:'space-between',marginBottom:'1.5rem'}}>
                                <ChartCard color=" #FC1826" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                <ChartCard color=" #F8BC12" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                <ChartCard color=" #8DB600" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                <ChartCard color=" #FC1826" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                

                                </Grid>
                                <Grid style={{display:'flex',justifyContent:'space-between'}}>
                                <ChartCard color=" #F8BC12" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                <ChartCard color=" #FC1826" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                <ChartCard color=" #8DB600" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                <ChartCard color=" #FC1826" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                

                                </Grid>
                                <h3>LifeStyle</h3>
                                <Grid style={{display:'flex',justifyContent:'space-between',marginBottom:'1.5rem'}}>
                                <ChartCard color=" #8DB600" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                <ChartCard color=" #F8BC12" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                <ChartCard color=" #8DB600" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                <ChartCard color=" #FC1826" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                

                                </Grid>
                                <h3>Fitness</h3>
                                <Grid style={{display:'flex',justifyContent:'space-between',marginBottom:'1.5rem'}}>
                                <ChartCard color=" #FC1826" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                <ChartCard color=" #F8BC12" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                <ChartCard color=" #8DB600" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                <ChartCard color=" #FC1826" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                

                                </Grid>
                                <Grid style={{display:'flex',justifyContent:'space-between',marginBottom:'1.5rem'}}>
                                <ChartCard color=" #FC1826" title="Blood Gluoose" data="1" text="Latest Result : 8 mmol/L" />
                                
                                

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

export default UserDashboard;
function ChartCard(props) {
    // color,title,text
    let color = props.color;
    let titles = props.title;
    let text = props.text;
   

    return (
        <>
        <div style={{backgroundColor:color,width:'300px',color:'white',height:'140px'}}>
        <center><p ><span style={{fontWeight:'bold'}}>{titles}</span><br/>{text}</p></center>
            
            </div>
           
        </>
    )
}