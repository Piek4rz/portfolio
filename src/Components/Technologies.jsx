import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Tools from "./Tools";



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const cards = [
    {
        tech: <Languages></Languages>
    },
    {
        tech: <Frameworks></Frameworks>
    },
    {
        tech: <Tools></Tools>
    },
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = cards.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#15431D'}}>
            <Box>
                <Button size="large" onClick={handleBack} disabled={activeStep === 0} sx={{color: 'white', py: 12   }}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </Button>
            </Box>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                interval={10000}
            >
                {cards.map((step, index) => (
                    <div key={index}>{step.tech}</div>
                ))}
            </AutoPlaySwipeableViews>
            <div>
                <Button size="large" onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={{color: 'white', py: 12}}>
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
            </div>
        </Box>
    );
}

export default SwipeableTextMobileStepper;