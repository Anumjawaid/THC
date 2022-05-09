import React from 'react';
import logi from "../UI/login1.png";
import logo from '../UI/logo.png'
import { useState } from "react";
import { Grid, Container, FormControl, InputLabel, Input } from '@material-ui/core';





class LoginPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = { passwordType: "password", passwordInput: "", passwordType1: "password", passwordInput1: "" }

    }

    handlePasswordChange = (evnt) => {
        this.setState({ passwordInput: evnt.target.value })
    }

    togglePassword = (props) => {
        if (this.state.passwordType === "password") {

            this.setState({ passwordType: "text" })
            return;
        }
        this.setState({ passwordType: "password" })
    }
    ValidateEmail = (inputText) => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.value.match(mailformat)) {
            alert("Valid email address!");
            document.form1login.text1.focus();
            return true;
        }
        else {
            alert("You have entered an invalid email address!");
            document.form1login.text1.focus();
            return false;
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        var inputsemail = document.getElementById("email")
        this.ValidateEmail(inputsemail)


    };




    render() {
        const ContainerLoginRow1Col1 = {
            width: "100%",
            height: "100vh"
        };
        const ContainerLoginButton = {
            backgroundColor: "#144B9F",
            width: '540px',
            height: '60px',
            borderRadius: "8px",
            color:'white',
            fontSize:"24px"
        };
        const labelsLogin = {
            fontFamily: 'Aeonik',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '24px',
            lineHeight: '29px',
            color:" #121212",
           
        
        }
        const inputstyle={
            boxSizing:"border-box",
            width: "540px",
            height: "60px",
            border:" 1.5px solid #727272",
            margin:'1em 0',
            borderRadius: "8px"}
            const forgetlinklogin={
                textDecoration:'none',
                position:"relative",
                left:"26em",
                top:'-2em',
                color:'#2C5DA9'
            }

        return (
            <React.Fragment>
                <Grid style={{ display: "flex" }}>
                    <Grid xs={6}>
                        <img src={logi} style={ContainerLoginRow1Col1} ></img>
                    </Grid>
                    <Grid xs={6}>
                        <Container>

                            <center><img src={logo} style={{ marginTop: '5rem' }}></img></center>
                            <Grid style={{margin:'0 15%'}}>
                                
                                <form className="form1login " onSubmit={this.handleSubmit} style={{}}>


                                    <h1 className="HeadingSignLogin">Sign In</h1>



                                    <label style={ labelsLogin }>Email</label><br />


                                    <input id="emailLogin" required className="form-control inputslogin" style={inputstyle}></input>

                                    <br />
                                    <label style={ labelsLogin }>Password</label><br />

                                    <div className="PasswordDivLogin">
                                        <input minLength="8" required id="emailLogin" style={inputstyle}className="form-control inputslogin"
                                            type={this.state.passwordType} onChange={this.handlePasswordChange} value={this.state.passwordInput} name="password">

                                        </input>


                                        {this.state.passwordType === "password" ?
                                            <i className="bi bi-eye-slash" id="togglePasswordlogin1" onClick={this.togglePassword}></i>
                                            : <i className="bi bi-eye" id="togglePasswordlogin1" onClick={this.togglePassword}></i>}

                                    </div>


                                    <br />
                                    <a href="#" style={forgetlinklogin}>Forget Password?</a>

                                    <button className="buttonlogin" type="submit" style={ContainerLoginButton}>Sign In</button>

                                    <br />


                                    <Grid className="LastdivLogin">
                                        <p className="p1NewAcc">Not register yet?<a href="#" className="p2NewAcc">Create an account</a></p>
                                    </Grid>
                                </form>
                            </Grid>
                        </Container>

                    </Grid>

                </Grid>
            </React.Fragment>

        )
    }

}

export default LoginPage;