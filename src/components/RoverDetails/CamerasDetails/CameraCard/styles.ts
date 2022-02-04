import { Theme } from '@mui/material';
import { blueGrey, blue } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    cameraCard: {
        background: theme.palette.secondary.light,
        color: theme.palette.common.white,
        fontSize: 10,
    },
    cameraCardActive: {
        background: theme.palette.success.light,
        color: theme.palette.common.white,
    },
    title: {
        color: theme.palette.common.white,
    },
    subheader: {
        color: theme.palette.text.secondary,
    },
}));
