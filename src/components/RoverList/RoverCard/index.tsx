import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from '@mui/material';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from './styles';

interface IRoverCardProps {
    name: string;
    landing_date: string;
    status: string;
    total_photos: number;
    max_date: string;
    max_sol: number;
}

const RoverCard: FC<IRoverCardProps> = ({
    name,
    landing_date,
    status,
    total_photos,
    max_date,
    max_sol,
}) => {
    const classes = useStyles();
    const history = useHistory();

    const openRover = () => history.push(`/rovers/${name.toLowerCase()}`);

    return (
        <Box className={classes.card} onClick={openRover}>
            <Box className={classes.cardContent}>
                <Typography
                    className={
                        status === 'active'
                            ? classes.statusActive
                            : classes.status
                    }
                    variant="body2">
                    {status}
                </Typography>
                <Typography variant="subtitle2">{name}</Typography>
                <Typography variant="body1">
                    landed:
                    <Typography
                        component={'span'}
                        className={classes.secondaryLabel}
                        variant="body1">
                        &nbsp;{landing_date}
                    </Typography>
                </Typography>
                <Typography variant="body1">
                    <Typography
                        component={'span'}
                        className={classes.secondaryLabel}
                        variant="body1">
                        {total_photos}&nbsp;
                    </Typography>
                    total photos
                </Typography>
                <Typography variant="body2">
                    last photo
                    <Typography
                        component={'span'}
                        className={classes.secondaryLabel}
                        variant="body2">
                        &nbsp;{max_date}
                    </Typography>
                </Typography>
                <Typography variant="body2">
                    (
                    <Typography
                        component={'span'}
                        className={classes.secondaryLabel}
                        variant="body2">
                        {max_sol}&nbsp;
                    </Typography>
                    sol)
                </Typography>
            </Box>
        </Box>
    );
};

export default RoverCard;
