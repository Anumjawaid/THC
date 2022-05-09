import React from 'react'
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Topnav,Footer } from './topnav';
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';


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
                                    sx={{ flexGrow: 1, bgcolor: '#FFFFFF', p: 3 }}

                                >
                                    {/* All Components Here */}


                                </Box>
                                <Footer />

                    </Box>
                    </Box>

            </React.Fragment>
        )
    }
}
export default BookAppointment;