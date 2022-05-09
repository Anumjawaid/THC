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
        const labelsLogin = {

        }
        const inputstyle = {

        }
        const ContainerAccRow2ConChange = {
            backgroundColor: "#F1F4F9",
            color: '#1C1C1C',
            // margin: '2%',
            // padding:'0.5rem 1rem',
            borderRadius: "8px",
            border: "1px solid #62C5C4"

        };
        const ContainerAccRow2ConRemove = {
            backgroundColor: "white",
            color: '#1C1C1C',
            padding: "1%",
            border: "0px solid"
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
                        <Grid style={{ marginTop: '10rem' }}>
                            <Grid>
                                <h2>Account</h2>
                            </Grid>
                            <Grid>
                                <Box component="main"
                                    sx={{ flexGrow: 1, bgcolor: '#FFFFFF', p: 3 }}

                                >
                                    <Grid>
                                        <div className="divProf" style={{display:'flex',flexDirection:'row'}}>
                                            <div>
                                            <h3>Profile photo</h3>
                                            <img id="img1" src={uimg}></img>
                                            </div>

                                            <div style={{display:'',flexDirection:''}}>
                                            <input id="chanbtn" type="button" value="Change" style={{}}></input>
                                            <input id="rembtn" type="button" value="Remove" style={ContainerAccRow2ConRemove}></input>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid>
                                        <Grid>
                                            <label style={labelsLogin}>Name</label><br />


                                            <input id="emailLogin" required className="form-control inputslogin" style={inputstyle}></input>
                                            <label style={labelsLogin}>Email</label><br />


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