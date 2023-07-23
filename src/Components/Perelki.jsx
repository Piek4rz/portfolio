import {Box, Paper, Typography} from "@mui/material";
import "./perelki.css"
import Button from "@mui/material/Button";
import perelki from "../Assets/perelki-logo.png";
import a from "../Assets/Rectangle.png";
import b from "../Assets/Rectangle (1).png";
import c from "../Assets/Group 5.png";

import React, {Component, useEffect, useState} from 'react';

class Perelki extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentScreenSize: window.innerWidth,
        };
    }

    isScreenSmall = () => this.state.currentScreenSize <= 900;

    // Function to update the current screen size when the window is resized
    updateScreenSize = () => {
        this.setState({ currentScreenSize: window.innerWidth });
    };

    componentDidMount() {
        // Add an event listener to update the screen size when the window is resized
        window.addEventListener('resize', this.updateScreenSize);
    }

    componentWillUnmount() {
        // Clean up the event listener when the component is unmounted
        window.removeEventListener('resize', this.updateScreenSize);
    }

    render() {


        return (
            <div>



                <Box sx={{ display: 'flex', flexGrow: 1, flexWrap:'wrap', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between', pb: 45}}>
                    <a href="https://wrocperelki.mooo.com" target="_blank" rel="noopener noreferrer">
                        {this.isScreenSmall() ? (
                                <>
                                    <img style={{maxWidth: '100%', height: 'auto'}} src={perelki}/>
                                </>) :

                            (
                                <>
                                    <Paper sx={{width: '480px', height: '404px', maxWidth: '480px',  backgroundColor: '#B72121', borderRadius: '50px', boxShadow: '10', position: 'relative'}}>
                                        <div className="mask">
                                            <img className="up" src={a} style={{maxWidth: '100%', height: 'auto', translate:'100% -5%'}}/>
                                            <img className="down" src={c} style={{maxWidth: '100%', height: 'auto', translate:'25% -70%'}}/>
                                            <img className="up" src={b} style={{maxWidth: '100%', height: 'auto', translate:'-35% -230%'}}/>
                                        </div>
                                    </Paper>
                                </>
                            )}


                    </a>
                    <Box sx={{ width: {xs: '100%', sm: '40%'}, mt: { xs: 5, md: 0 }, textAlign: 'right'}}>
                        <Typography variant="h4">
                            Wrocławskie Perełki
                        </Typography>
                        <Typography >
                            Experience the charm of Wrocław like never before with an urban game,
                            where you can uncover fascinating locations and hidden gems while immersing yourself
                            in the vibrant spirit of the city
                        </Typography>
                        <a href="https://wrocperelki.mooo.com" target="_blank" rel="noopener noreferrer">
                            <Button variant="contained" color="success" sx={{ mt: 4 }}>
                                See website
                            </Button>
                        </a>
                        <Button variant="contained" color="success" sx={{mt: 4, ml: 4}}>
                            See app presentation
                        </Button>
                    </Box>

                </Box>
            </div>
        );
    }
}

export default Perelki;