    import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#34C94B"
        },
        background:{
            default:"#121212"
        },
        text:{
            primary:"#FFFFFF",
            secondary:"#121212"
        }
    },

    typography:{
        fontFamily:"'Poppins'"
    }

})

export default theme;