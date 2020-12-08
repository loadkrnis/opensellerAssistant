import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import {makeStyles} from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import {bugs, website, server} from "variables/general.js";

import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(styles);

// function getOnlineInquiriesCount() {
//   const promise = axios.get('http://15.165.214.143:3001/onlineInquiries');
//   const dataPromise = promise.then((res) => res.data);
//   console.log(dataPromise);
//   return dataPromise;
// }
export default function Dashboard() {
    const classes = useStyles();
    return (
        <div>
            <Card>
                <CardHeader color="success">
                  <h3>요약</h3>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card chart>
                                <CardHeader color="success">
                                    <ChartistGraph
                                        className="ct-chart"
                                        data={dailySalesChart.data}
                                        type="Line"
                                        options={dailySalesChart.options}
                                        listener={dailySalesChart.animation}
                                    />
                                </CardHeader>
                                <CardBody>
                                    <h4 className={classes.cardTitle}>Daily Sales</h4>
                                    <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory}/> 55%
                </span>{" "}
                                        increase in today sales.
                                    </p>
                                </CardBody>
                                <CardFooter chart>
                                    <div className={classes.stats}>
                                        <AccessTime/> updated 4 minutes ago
                                    </div>
                                </CardFooter>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card chart>
                                <CardHeader color="warning">
                                    <ChartistGraph
                                        className="ct-chart"
                                        data={emailsSubscriptionChart.data}
                                        type="Bar"
                                        options={emailsSubscriptionChart.options}
                                        responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                                        listener={emailsSubscriptionChart.animation}
                                    />
                                </CardHeader>
                                <CardBody>
                                    <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                                    <p className={classes.cardCategory}>Last Campaign Performance</p>
                                </CardBody>
                                <CardFooter chart>
                                    <div className={classes.stats}>
                                        <AccessTime/> campaign sent 2 days ago
                                    </div>
                                </CardFooter>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card chart>
                                <CardHeader color="danger">
                                    <ChartistGraph
                                        className="ct-chart"
                                        data={completedTasksChart.data}
                                        type="Line"
                                        options={completedTasksChart.options}
                                        listener={completedTasksChart.animation}
                                    />
                                </CardHeader>
                                <CardBody>
                                    <h4 className={classes.cardTitle}>Completed Tasks</h4>
                                    <p className={classes.cardCategory}>Last Campaign Performance</p>
                                </CardBody>
                                <CardFooter chart>
                                    <div className={classes.stats}>
                                        <AccessTime/> campaign sent 2 days ago
                                    </div>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
            <Card>
                <CardHeader color="success">
                    <h3>타임라인</h3>
                </CardHeader>
                <CardBody>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    9:30 am
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <FastfoodIcon/>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        Eat
                                    </Typography>
                                    <Typography>Because you need strength</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    10:00 am
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <LaptopMacIcon/>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        Code
                                    </Typography>
                                    <Typography>Because it&apos;s awesome!</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="primary" variant="outlined">
                                    <HotelIcon/>
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail}/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        Sleep
                                    </Typography>
                                    <Typography>Because you need rest</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="secondary">
                                    <RepeatIcon/>
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        Repeat
                                    </Typography>
                                    <Typography>Because this is the life you love!</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </CardBody>
            </Card>
        </div>
    );
}
