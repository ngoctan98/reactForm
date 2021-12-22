import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles({
    box:{
        flexGrow: 1, 
        bgcolor: 'background.paper', 
        display: 'flex' ,
        height:"100%",
        width:"100%"
    },

    tab: {
        textTransform:'none',
        textAlign:'left',
    },

    tabPanel: {
        margin:"-24px -14px 0 -24px"
    }
})
export const styleTabs={
        borderRight: 1, 
        borderColor: 'divider',
        minWidth:"200px"
        }

export const styleTab={
        textTransform:'none',
        alignItems:'flex-start'
}
