import React, {Component} from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import react from "../Assets/react-icon.png";
import bootstrap from "../Assets/bootstrap-icon.png";
import mui from "../Assets/mui-icon.png";

class Frameworks extends Component {
    render() {
        return (
            <div>
                <Box minHeight="35vh" sx={{ background: '#15431D', display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <Container sx={{ color: 'white' }}>
                        <Typography variant="h4" sx={{ py: 4 }}>
                            Frameworks and libraries:
                        </Typography>
                        <Grid container rowSpacing={10} columnSpacing={4} alignItems="center" justifyContent="center" sx={{py: 6}}>
                            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={react} alt="Languages 1" />
                                <Typography>
                                    React
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={bootstrap} alt="Languages 2" />
                                <Typography>
                                    Bootstrap
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={mui} alt="Languages 3" />
                                <Typography>
                                    Material UI
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
        );
    }
}

export default Frameworks;