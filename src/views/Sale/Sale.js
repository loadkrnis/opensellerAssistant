import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter";

import CardIcon from "../../components/Card/CardIcon";
import ChartistGraph from "react-chartist";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";

import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

import {weekSalesChart} from 'variables/weekSalesChart';

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Sale() {
    const classes = useStyles();

    //warning, success, danger, info,
    return (
        <div>
            <Card>
                <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                        <LockTwoToneIcon/>
                    </CardIcon>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <Card chart>
                                <CardHeader color="success">
                                    <ChartistGraph
                                        className="ct-chart"
                                        data={weekSalesChart.data}
                                        type="Line"
                                        options={weekSalesChart.options}
                                        listener={weekSalesChart.animation}
                                    />
                                </CardHeader>
                                <CardBody>
                                    <h4 className={classes.cardTitle}>10일 기준 일매출</h4>
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

                    </GridContainer>
                </CardBody>
            </Card>
        </div>
    );
}
