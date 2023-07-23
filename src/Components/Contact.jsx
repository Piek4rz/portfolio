import React, {Component} from 'react';
import {Box, Container, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import pdf from "../Assets/pdf-icon.png"

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
            const pdfFile = '/example.pdf';
            const link = document.createElement('a');
            link.href = pdfFile;
            link.download = 'example.pdf';
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
                <Box>
                    <Container sx={styles}>
                        <Box sx={{ display: 'flex', justifyContent:'space-between', pb: 4 }}>
                            <Typography variant="h3">
                                Contact Me!
                            </Typography>
                            <Typography variant="h3">
                                My CV
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex',  justifyContent: 'space-between', alignItems: 'center',flexGrow: 1, gap: "3rem",
                            flexWrap: 'wrap', paddingBottom: '4rem' }}>
                            <Box sx={{ display: 'flex',   alignItems: 'flex-start',flexGrow: 1, gap: "3rem",
                                flexWrap: 'wrap', paddingBottom: '4rem', flexDirection: 'column' }}>
                                <Button onClick={handleSendMail} size="large" variant="contained" color="success" sx={{ml: 4, minHeight: '70px'}}>
                                    jakubp2000@gmail
                                </Button>
                                <Typography variant="b1" sx={{ml: 8}}>
                                    Phone: 513 947 967
                                </Typography>
                            </Box>
                            <Box sx={{ py: 2,  display: 'flex', alignItems: 'center' }}>
                                <Button onClick={handleDownload}>Jakub_Piekarski_CV.pdf</Button>
                                <img src={pdf}/>
                            </Box>
                        </Box>

                    </Container>
                </Box>
            </div>
        );

}

export default Contact;