import {createTheme} from "@mui/material";


export const theme = createTheme({
    typography: {
        fontFamily: [
            'Sora', 'sans-serif'
        ].join(','),
        fontWeight: 500,
        fontWeightBold: 500,

        gradient: {
            background:
                'linear-gradient(#5BFF62, #0B620E)'
        }
    }
})