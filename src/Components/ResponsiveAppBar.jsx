import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import SunIcon from '@mui/icons-material/WbSunny';
import MoonIcon from '@mui/icons-material/ModeNight';


function ResponsiveAppBar({ darkMode, toggleDarkMode }) {

    const lightModeStyles = {
        background: 'white',
        color: '#000000',
        display: {xs: 'none', md: 'flex'}
    };

    const darkModeStyles = {
        background: '#161818',
        color: '#ffffff',
        display: {xs: 'none', md: 'flex'}
    };

    const buttonLightMode = {
        my: 2,
        color: '#000000',
        display: {xs: 'none', md: 'flex'}
    };

    const buttonDarkMode = {
        my: 2,
        color: '#ffffff',
        display: {xs: 'none', md: 'flex'}
    };


    const styles = darkMode ? darkModeStyles : lightModeStyles;

    const buttonStyles = darkMode ? buttonDarkMode : buttonLightMode;

    return (
        <AppBar position="sticky" sx={ styles }>
            <Container>
                <Toolbar disableGutters>
                    <Typography variant="h5">Jakub <strong style={{ color: '#228F41'}}>Piekarski</strong></Typography>

                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row-reverse'}}>
                        <Link to="contact" smooth={true} duration={500} offset={-64}>
                            <Button sx={ buttonStyles }>
                                Contact
                            </Button>
                        </Link>
                        <Link to="projects" smooth={true} duration={500} offset={-64}>
                            <Button sx={ buttonStyles }>
                                Projects
                            </Button>
                        </Link>
                        <Link to="about" smooth={true} duration={500} offset={-64}>
                            <Button sx={ buttonStyles }>
                                About Me
                            </Button>
                        </Link>
                        <Button sx={ buttonStyles } onClick={toggleDarkMode}>
                            {darkMode ? <SunIcon></SunIcon> : <MoonIcon></MoonIcon>}
                        </Button>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;