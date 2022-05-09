import React from 'react'
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';
import { Footer } from './topnav'
import uimg from '../UI/userimg.png'

class AccountSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { passwordType: "password", passwordInput: "", passwordType1: "password", passwordInput1: "" }

    }
    
    render() {
        const labelicons={
        
        }
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
                        <Grid style={{ marginTop: '10rem' }}>
                            <Grid>
                                <h2>Account</h2>
                            </Grid>
                            <Grid>
                                <Box component="main"
                                    sx={{ flexGrow: 1, bgcolor: '#FFFFFF', p: 3 }}

                                >
                                    <Grid>
                                        <h4>Profile Photo</h4>
                                        <Grid>
                                            <img src={uimg} />
                                            <button>Change</button>
                                            <button>Remove</button>

                                        </Grid>
                                    </Grid>
                                    <Grid>
                                        <Grid>
                                        <label style={ labelsLogin }>Name</label><br />


<input id="emailLogin" required className="form-control inputslogin" style={inputstyle}></input>
<label style={ labelsLogin }>Email</label><br />


                                    <input id="emailLogin" required className="form-control inputslogin" style={inputstyle}></input>
                                        </Grid>
                                    </Grid>


                                </Box>
                                <Footer />
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </React.Fragment>
        )
    }
}

export default AccountSetting