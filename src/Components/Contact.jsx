import React, {Component} from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import pdf from "../Assets/pdf-icon.png";
import pdfFile from '../Assets/Jakub_Piekarski_CV.pdf';


function Contact({darkMode}) {

    const lightModeStyles = {
        backgroundColor: '#f0f0f0',
        pt: 12,
        pb: 20
    };

    const darkModeStyles = {
        backgroundColor: '#161818',
        color: '#fff',
        pt: 12,
        pb: 20
    };

    const styles = darkMode ? darkModeStyles : lightModeStyles;


    const handleDownload = () => {
            const link = document.createElement('a');
            link.href = pdfFile;
            link.download = 'Jakub_Piekarski_CV.pdf';
            link.target = '_blank';
            link.click();
        }

        const handleSendMail = () => {
            const recipientEmail = 'jakubp2000@gmail.com';
            const mailtoLink = `mailto:${recipientEmail}`;
            window.location.href = mailtoLink;
        };
        return (
            <div>
                <Container sx={styles}>
                    <Grid container justifyContent="space-between" alignItems={"center"} spacing={12}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant ="h3">
                                Contact Me!
                            </Typography>
                            <Button onClick={handleSendMail} size="large" variant="contained" color="success" sx={{ml: 4, my: 4, minHeight: '70px'}}>
                                jakubp2000@gmail
                            </Button>
                            <br></br>
                            <Typography variant="b1" sx={{ml: 8}}>
                                Phone: 513 947 967
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h3" align="right">
                                My CV
                            </Typography>
                            <Box sx={{ my: 4, display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                                <Button onClick={handleDownload}>Jakub_Piekarski_CV.pdf</Button>
                                <img src={pdf}/>
                            </Box>

                        </Grid>
                    </Grid>
                </Container>
                {/*<Box>*/}
                {/*    <Container sx={styles}>*/}
                {/*        <Box sx={{ display: 'flex', justifyContent:'space-between', pb: 4 }}>*/}
                {/*            <Typography variant="h3">*/}
                {/*                Contact Me!*/}
                {/*            </Typography>*/}
                {/*            <Typography variant="h3">*/}
                {/*                My CV*/}
                {/*            </Typography>*/}
                {/*        </Box>*/}
                {/*        <Box sx={{ display: 'flex',  justifyContent: 'space-between', alignItems: 'center',flexGrow: 1, gap: "3rem",*/}
                {/*            flexWrap: 'wrap', paddingBottom: '4rem' }}>*/}
                {/*            <Box sx={{ display: 'flex',   alignItems: 'flex-start',flexGrow: 1, gap: "3rem",*/}
                {/*                flexWrap: 'wrap', paddingBottom: '4rem', flexDirection: 'column' }}>*/}
                {/*                <Button onClick={handleSendMail} size="large" variant="contained" color="success" sx={{ml: 4, minHeight: '70px'}}>*/}
                {/*                    jakubp2000@gmail*/}
                {/*                </Button>*/}
                {/*                <Typography variant="b1" sx={{ml: 8}}>*/}
                {/*                    Phone: 513 947 967*/}
                {/*                </Typography>*/}
                {/*            </Box>*/}
                {/*            <Box sx={{ py: 2,  display: 'flex', alignItems: 'center' }}>*/}
                {/*                <Button onClick={handleDownload}>Jakub_Piekarski_CV.pdf</Button>*/}
                {/*                <img src={pdf}/>*/}
                {/*            </Box>*/}
                {/*        </Box>*/}

                {/*    </Container>*/}
                {/*</Box>*/}
            </div>
        );

}

export default Contact;