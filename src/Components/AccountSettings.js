import React from 'react'
import Box from '@mui/material/Box';
import SideBar from './sidebar';
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';
import { ButtonStyle, Footer } from './topnav'
import uimg from '../UI/userimg.png';


class AccountSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { passwordType: "password", passwordInput: "", passwordType1: "password", passwordInput1: "" }

    }

    render() {
        const labelsLogin = {
            fontFamily: 'Aeonik',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#1C1C1C',
            margin: '30% 0'

        }
        const inputstyle = {
            boxSizing: 'border-box',
            width: '621px',
            height: "60px",
            background: '#F1F4F9',
            border: ' 1px solid #62C5C4',
            borderRadius: '8px'

        }
        const ContainerAccRow2ConChange = {
            backgroundColor: "#F1F4F9",
            color: '#1C1C1C',
            padding: '0.5rem 1rem',
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
                        <Grid style={{ marginTop: '5rem' }}>
                            <Grid>
                                <h2>Account</h2>
                            </Grid>
                            <Grid>
                                <Box component="main"
                                    sx={{ flexGrow: 1, bgcolor: '#FFFFFF', p: 3 }}

                                >
                                    <Grid >

                                        <Grid>
                                            <h3>Profile photo</h3>
                                            <img id="img1" src={uimg}></img>

                                            <div style={{ position: 'relative', top: '-3rem', left: '5rem' }}>
                                                <input id="chanbtn" type="button" value="Change" style={ContainerAccRow2ConChange}></input>
                                                <input id="rembtn" type="button" value="Remove" style={ContainerAccRow2ConRemove}></input>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid>
                                        <Grid style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                            <div>
                                                <label style={labelsLogin}>Name</label><br />
                                                <input id="emailLogin" required style={inputstyle}></input><br />
                                            </div>
                                            <div>
                                                <label style={labelsLogin}>Email</label><br />
                                                <input id="emailLogin" required style={inputstyle}></input><br />
                                            </div>
                                        </Grid>
                                        <Grid style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                            <div>
                                                <label style={labelsLogin}>Date Of Birth</label><br />
                                                <input id="emailLogin" required style={inputstyle}></input><br />
                                            </div>
                                            <div>
                                                <label style={labelsLogin}>Gender</label><br />
                                                <input id="emailLogin" required style={inputstyle}></input><br />
                                            </div>
                                        </Grid>
                                        <Grid style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                            <div>
                                                <label style={labelsLogin}>Current Password</label><br />
                                                <input id="emailLogin" required style={inputstyle}></input><br />
                                            </div>
                                            <div>
                                                <label style={labelsLogin}>New Password</label><br />
                                                <input id="emailLogin" required style={inputstyle}></input><br />
                                            </div>
                                        </Grid>
                                        <Grid>
                                            <div style={{ display: 'flex', float: 'right' }}>
                                            <button style={{marginRight:'3rem',border: '1px solid #62C5C4',backgroundColor: "#F1F4F9",color: '#1C1C1C',borderRadius: "8px",fontSize:"24px"}}>Cancel</button>

                                                <ButtonStyle width='128px' height='56px' text="Submit" />
                                            </div>
                                        </Grid>
                                        <br/><br/>
                                    </Grid>


                                </Box>
                                <Footer />
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </React.Fragment >
        )
    }
}

export default AccountSetting