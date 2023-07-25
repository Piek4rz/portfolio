import React, {Component} from 'react';
import {Box, Container, Paper, Typography} from "@mui/material";
import img from "../Assets/me.jpg";
import {render} from "@testing-library/react";

const styles = {
    container: {
        paddingTop: '6rem',
        paddingBottom: '12rem',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1,
        gap: "3rem",
        flexWrap: 'wrap',

        '@media (max-width: 900px)': {
            flexDirection: 'column',

        },
    },
    firstBox: {
        maxWidth: '100%',
        '@media (min-width: 901px)': {
            maxWidth: '50%',
        },
    },

    secondBox: {
        display: 'flex',
        justifyContent: 'center',
    },

    paper: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '400px',
        transform: 'rotate(2deg)',
        transition: 'transform 0.2s ease',
        padding: "1rem",
        paddingBottom: "5rem",
        boxShadow: 20,
        '&:hover': {
            transform: 'rotate(-4deg)',
        },
    },
};
const About = ({ darkMode }) => {

        return (
            <div>
                <Box sx={{ background: 'linear-gradient(to right, #228F41, #6ABD00)', minHeight: '85vh', display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <Container sx={styles.container}>
                        <Box sx={styles.firstBox}>
                            <Typography variant="h2" gutterBottom>
                                Hi! I'm <strong>Jakub</strong>
                            </Typography>
                            <Typography variant="h6">
                                I am an energetic front-end developer with a love for details and undergraduate student
                                in technical computer science at Politechnika Wrocławska. I am fascinated by the process
                                of creating websites, from design to implementation. In my work, I focus on readable code
                               and optimized user experience.
                            </Typography>
                            <Typography variant="h6">
                                <br></br>
                                I would like to join a team where I will be able to develop professionally and actively
                                participate in projects that bring value and joy to users.
                            </Typography>
                        </Box>
                        <Box sx={styles.secondBox}>
                            <Paper variant="outlined" sx={styles.paper}>
                                <img style={{ maxWidth: '100%', height: 'auto' }} src={img}/>
                            </Paper>
                        </Box>
                    </Container>
                </Box>
            </div>
        );

}

export default About;