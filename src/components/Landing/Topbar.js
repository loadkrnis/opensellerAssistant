import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import openseller_icon from '../../assets/img/o_icon.png';

import {PAGE_WIDTH} from 'components/Landing/config';

const styles = {
    topbar : {
        height:"80px",
        width:PAGE_WIDTH,
        margin:"auto",
    },
    openseller_icon : {
        margin : "20px"
    },
    openseller_typo : {
        marginBottom : "20px",
        position:"absoulte",
        top:"50%",
        marginTop:"40px",
    },
    sign_button : {
        margin: '0 10px',
    },
}

const useStyles = makeStyles(styles);

export default function Topbar() {
    const classes = useStyles();

    return (
        <div className={classes.topbar}>
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid>
                    <img src={openseller_icon} 
                        height="40px" width="40px"
                    className={classes.openseller_icon}/>
                
                    <Typography 
                    variant="h4"
                    display="inline"
                    className={classes.openseller_typo}>
                        OPENSELLER
                    </Typography>
                </Grid>
                <Grid>
                    <Button
                    className={classes.sign_button}
                    variant="contained">
                        SIGNIN
                    </Button>
                    <Button
                    className={classes.sign_button}
                    variant="contained"
                    color="primary" >
                        SIGNUP
                    </Button>
                    
                </Grid>
            </Grid>
        </div>
    );
}