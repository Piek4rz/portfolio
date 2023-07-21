import React, {Component} from 'react';
import {Box, Typography} from "@mui/material";
import pxh from "../Assets/pixelHeart-logo.png";
import c1 from "../Assets/c1.png";
import c2 from "../Assets/c2.png";
import c3 from "../Assets/c3.png";
import Button from "@mui/material/Button";
import "./pixelHeart.css";

class PixelHeart extends Component {

    render() {

        return (
            <div>
                <Box sx={{ display: 'flex', flexGrow: 1, flexWrap:'wrap', alignItems: 'center', justifyContent: 'space-between', pt: 8, pb: 45}}>
                    <Box id="images" >
                        <img style={{ maxWidth: '100%', height: 'auto' }} src={pxh}/>
                    </Box>


                    <Box sx={{ width: {xs: '100%', sm: '40%'}, mt: { xs: 5, md: 0 } }}>
                        <Typography variant="h4">
                            PixelHeart
                        </Typography >
                        <Typography >
                            Web application that allows you to meet new people with similar tastes in video games
                        </Typography>
                        <Button variant="contained" color="success" sx={{mt: 4}}>
                            See demo
                        </Button>
                        <a href="https://github.com/Piek4rz/PixelHeart" target="_blank" rel="noopener noreferrer">
                        <Button variant="contained" color="success" sx={{mt: 4, ml: 4}}>
                            Github
                        </Button>
                        </a>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default PixelHeart;