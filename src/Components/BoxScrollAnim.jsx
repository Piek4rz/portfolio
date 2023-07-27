import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";

const style = {
    anim:{
        opacity: 0,
        transform: 'translateX(200px)',
        transition: 'opacity 1s ease-out, transform 0.6s ease-out',
    },
    animVisible:{
        opacity: 1,
        transform: 'translateX(0)',
    },
};

const BoxScrollAnim = ({children, id}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            const windowHeight =
                window.innerHeight || document.documentElement.clientHeight;
            return rect.top <= windowHeight && rect.bottom >= 0;
        };

        const handleScroll = () => {
            const element = document.getElementById(id);
            if (isInViewport(element)) {
                setVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <Box sx={{  ...style.anim,
                ...(visible ? style.animVisible : {}),}}  id={id}>
                {children}
            </Box>
        </div>
    );
};

export default BoxScrollAnim;