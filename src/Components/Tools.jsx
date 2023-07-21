import React, {Component} from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import figma from "../Assets/figma-icon.png";
import git from "../Assets/git-icon.png";
import vs from "../Assets/vs-icon.png";
import android from "../Assets/android-icon.png";
import latex from "../Assets/latex-icon.png";
import jetbrains from "../Assets/jetbrains-icon.png";

class Tools extends Component {
    render() {
        return (
            <div>
                <Box minHeight="35vh" sx={{ background: '#15431D', display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <Container sx={{ color: 'white' }}>
                        <Typography variant="h4" sx={{ py: 4 }}>
                            Developer Tools:
                        </Typography>
                        <Grid container rowSpacing={10} columnSpacing={4} alignItems="center" justifyContent="center" sx={{py: 6}}>
                            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={figma} alt="Languages 1" />
                                <Typography>
                                    Figma
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={git} alt="Languages 2" />
                                <Typography>
                                    Git
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={vs} alt="Languages 3" />
                                <Typography>
                                    Visual Studio
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={android} alt="Languages 1" />
                                <Typography>
                                    Android Studio
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={jetbrains} alt="Languages 1" />
                                <Typography>
                                    JetBrains Tools
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={latex} alt="Languages 2" />
                                <Typography>
                                    LaTeX
                                </Typography>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>
            </div>
        );
    }
}

export default Tools;