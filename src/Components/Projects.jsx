import React, {Component} from 'react';
import {Box, Container, Typography} from "@mui/material";
import PixelHeart from "./PixelHeart";
import Perelki from "./Perelki";

function Projects ({darkMode}) {

    const lightModeStyles = {
        backgroundColor: '#fff',
        minHeight: 'calc(100vh - 68px)',
    };

    const darkModeStyles = {
        backgroundColor: '#323635',
        color: '#fff', // Change text color, for example
        minHeight: 'calc(100vh - 68px)',
    };

    const styles = darkMode ? darkModeStyles : lightModeStyles;

        return (
            <div>
                <Box sx={ styles }>
                    <Container >
                        <Typography variant="h4" sx={{ py: 8 }}>
                            Projects
                        </Typography>
                        <PixelHeart></PixelHeart>
                        <Perelki></Perelki>
                    </Container>
                </Box>
            </div>
        );

}

export default Projects;