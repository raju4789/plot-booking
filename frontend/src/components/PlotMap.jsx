import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '5%',
        marginLeft: '1%',
        marginRight: '0%',
        marginBottom: '3%',
        width: '100%',
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        textAlign: 'center',
        height: 100,
        width: 90,
        cursor:'pointer',
        color: 'white',
    },

    available: {
        backgroundColor: 'green'
    },

    booked: {
        backgroundColor: 'brown'
    },

    owner: {
        backgroundColor: 'yellow'
    },

    road: {
        padding: theme.spacing(4),
        margin: theme.spacing(1),
        textAlign: 'center',
        height: 100,
        width: 80,
        color: 'white',
        writingMode: 'vertical-lr',
        textOrientation: 'mixed',
        backgroundColor: 'black'
    },
}));

const PlotMap = ({ plotInfo, bookPlot }) => {

    const classes = useStyles();

    const getClsName = (plotno) => {
        const plot = plotInfo.find(plot => plot.plotNo === plotno);
        const userName = localStorage.getItem('userName');
        let clsName = classes.paper;
        debugger;
        if (plot.status === 'booked') {
            if (plot.owner && plot.owner === userName) {
                clsName = `${classes.paper} ${classes.owner}`
            } else {
                clsName = `${classes.paper} ${classes.booked}`
            }
        } else {
            clsName = `${classes.paper} ${classes.available}`
        }

        return clsName;
    }

    const getAvailabilityStatus = (plotno) => {
        const plot = plotInfo.find(plot => plot.plotNo === plotno);
        const userName = localStorage.getItem('userName');

        if (plot.status === 'booked' && plot.owner && plot.owner === userName) {
            return 'booked by you'
        } else {
            return plot.status;
        }
    }

    function FormRow({ col }) {

        return (
            <React.Fragment>
                <Grid item xs={1}>
                    <Paper className={getClsName(col)} plotno={col} onClick={() => bookPlot(col)}>
                        <div>plot {col}</div>
                        <br />
                        <div>{getAvailabilityStatus(col)} </div>
                    </Paper>
                </Grid>

                <Grid item xs={1}>
                    <Paper className={classes.road}>Road</Paper>
                </Grid>

                <Grid item xs={1}>
                    <Paper className={getClsName(col + 1)} plotno={col + 1} onClick={() => bookPlot(col + 1)}>
                        <div>plot {col + 1}</div>
                        <br />
                        <div>{getAvailabilityStatus(col + 1)} </div>
                    </Paper>
                </Grid>

                <Grid item xs={1}>
                    <Paper className={getClsName(col + 2)} plotno={col + 2} onClick={() => bookPlot(col + 2)}>
                        <div>plot {col + 2}</div>
                        <br />
                        <div>{getAvailabilityStatus(col + 2)} </div>
                    </Paper>
                </Grid>

                <Grid item xs={1}>
                    <Paper className={classes.road} >Road</Paper>
                </Grid>

                <Grid item xs={1}>
                    <Paper className={getClsName(col + 3)} plotno={col + 3} onClick={() => bookPlot(col + 3)}>
                        <div>plot {col + 3}</div>
                        <br />
                        <div>{getAvailabilityStatus(col + 3)} </div>
                    </Paper>
                </Grid>

                <Grid item xs={1}>
                    <Paper className={getClsName(col + 4)} plotno={col + 4} onClick={() => bookPlot(col + 4)}>
                        <div>plot {col + 4}</div>
                        <br />
                        <div>{getAvailabilityStatus(col + 4)} </div>
                    </Paper>
                </Grid>

                <Grid item xs={1}>
                    <Paper className={classes.road} >Road</Paper>
                </Grid>

                <Grid item xs={1}>
                    <Paper className={getClsName(col + 5)} plotno={col + 5} onClick={() => bookPlot(col + 5)}>
                        <div>plot {col + 5}</div>
                        <br />
                        <div>{getAvailabilityStatus(col + 5)} </div>
                    </Paper>
                </Grid>

                <Grid item xs={1}>
                    <Paper className={getClsName(col + 6)} plotno={col + 6} onClick={() => bookPlot(col + 6)}>
                        <div>plot {col + 6}</div>
                        <br />
                        <div>{getAvailabilityStatus(col + 6)} </div>
                    </Paper>
                </Grid>

                <Grid item xs={1}>
                    <Paper className={classes.road} >Road</Paper>
                </Grid>

                <Grid item xs={1}>
                    <Paper className={getClsName(col + 7)} plotno={col + 7} onClick={() => bookPlot(col + 7)}>
                        <div>plot {col + 7}</div>
                        <br />
                        <div>{getAvailabilityStatus(col + 7)} </div>
                    </Paper>
                </Grid>

            </React.Fragment>
        );
    }

    return (

        <div className={classes.root}>
            <Grid container spacing={1}>

                <Grid container item xs={12} spacing={2}>
                    <FormRow col={1} />,
                </Grid>

                <Grid container item xs={12} spacing={2}>
                    <FormRow col={9} />
                </Grid>

                <Grid container item xs={12} spacing={2}>
                    <FormRow col={17} />
                </Grid>

                <Grid container item xs={12} spacing={2}>
                    <FormRow col={25} />
                </Grid>

                <Grid container item xs={12} spacing={2}>
                    <FormRow col={33} />
                </Grid>

                <Grid container item xs={12} spacing={2}>
                    <FormRow col={41} />
                </Grid>

            </Grid>
        </div>
    );
}


export default PlotMap;

