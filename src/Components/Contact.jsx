import React, {Component} from 'react';
import {Box, Container, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import pdf from "../Assets/pdf-icon.png"

class Contact extends Component {
    render() {
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
                    <Container sx={{ pt: 12,  pb: 20}}>
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
                            <Button onClick={handleSendMail} size="large" variant="contained" color="success" sx={{ml: 4, minHeight: '70px'}}>
                                jakubp2000@gmail
                            </Button>
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
}

export default Contact;