import React, {Component} from 'react';
import {Box, Container, Paper, Typography} from "@mui/material";
import img from "../Assets/me.jpeg";

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
            maxWidth: '40%',
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
class About extends Component {
    render() {
        return (
            <div>
                <Box sx={{ background: 'linear-gradient(to right, #228F41, #6ABD00)', minHeight: '85vh', display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <Container sx={styles.container}>
                        <Box sx={styles.firstBox}>
                            <Typography variant="h2" gutterBottom>
                                Hi! I'm <strong>Jakub</strong>
                            </Typography>
                            <Typography variant="body1">
                                I am a front-end developer and undergraduate student in technical computer science at Politechnika Wrocławska.
                            </Typography>
                        </Box>
                        <Box sx={styles.secondBox}>
                            <Paper variant="outlined" sx={styles.paper}>
                                <img style={{ maxWidth: '100%', height: 'auto' }} src={img} alt="Your Image" />
                            </Paper>
                        </Box>
                    </Container>
                </Box>
            </div>
        );
    }
}

export default About;