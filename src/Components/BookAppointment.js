import React from 'react'
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Topnav,Footer,DatePicker, ButtonStyle } from './topnav';
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';
import BasicTable from './topnav'


class BookAppointment extends React.Component{
    constructor(props){
        super(props);
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
                        <Box component=""
                                    sx={{ flexGrow: 1, bgcolor: 'transparent', p: 3 }}

                                >
                                    {/* All Components Here */}
                                    <Grid>
                                        <h3>Current Bookings</h3>
                                        <BasicTable />
                                    </Grid>
                                    <Grid style={{marginTop:'4rem'}}>
                                        <h3>Book Appointments</h3>
                                        <Box component=""
                                    sx={{ flexGrow: 1, bgcolor: '#FFFFFF', p: 3 }}>
                                        <DatePicker />
                                        <center style={{marginTop:'3rem'}}><ButtonStyle text="Submit" width='175px' height='64px'/></center>

                                    </Box>
                                    </Grid>


                                </Box>
                                <Footer />

                    </Box>
                    </Box>

            </React.Fragment>
        )
    }
}
export default BookAppointment;