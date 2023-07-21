import React, {Component} from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import js from "../Assets/js-icon.png";
import csharp from "../Assets/csharp-icon.png";
import java from "../Assets/java-icon.png";
import python from "../Assets/python-icon.png";
import sql from "../Assets/sql-icon.png";


class Languages extends Component {


    render() {
        return (
            <div>
                <Box minHeight="35vh" sx={{ background: '#15431D', display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <Container sx={{ color: 'white' }}>
                        <Typography variant="h4" sx={{ py: 4 }}>
                            Languages:
                        </Typography>
                        <Grid container rowSpacing={10} columnSpacing={4} alignItems="center" justifyContent="center" sx={{py: 6}}>
                            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={js} alt="Languages 1" />
                                <Typography>
                                    JavaScript
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={csharp} alt="Languages 2" />
                                <Typography>
                                    C#
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={java} alt="Languages 3" />
                                <Typography>
                                    Java
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={python} alt="Languages 1" />
                                <Typography>
                                    Python
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={sql} alt="Languages 2" />
                                <Typography>
                                    SQL
                                </Typography>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>
            </div>
        );
    }
}

export default Languages;