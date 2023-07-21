import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';


function ResponsiveAppBar() {

    return (
        <AppBar position="sticky" sx={{ background: 'white', color: 'black', display: {xs: 'none', md: 'flex'}} }>
            <Container>
                <Toolbar disableGutters>
                    <Typography variant="h5">Jakub <strong style={{ color: '#228F41'}}>Piekarski</strong></Typography>

                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row-reverse'}}>
                        <Link to="contact" smooth={true} duration={500} offset={-64}>
                            <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                                Contact
                            </Button>
                        </Link>
                        <Link to="projects" smooth={true} duration={500} offset={-64}>
                            <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                                Projects
                            </Button>
                        </Link>
                        <Link to="about" smooth={true} duration={500} offset={-64}>
                            <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                                About Me
                            </Button>
                        </Link>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;