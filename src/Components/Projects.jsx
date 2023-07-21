import React, {Component} from 'react';
import {Box, Container, Typography} from "@mui/material";
import PixelHeart from "./PixelHeart";
import Perelki from "./Perelki";

class Projects extends Component {
    render() {
        return (
            <div>
                <Box sx={{ backgroundColor: '#fff', minHeight: 'calc(100vh - 68px)' }}>
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
}

export default Projects;