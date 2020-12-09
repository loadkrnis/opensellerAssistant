import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import CardIcon from "../../components/Card/CardIcon";

const styles = {
    root: {
        display: 'flex',
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

const useStyles = makeStyles(styles);

export default function Product() {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    //warning, success, danger, info,
    return (
        <div>
            <Card>
                <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                        <LockTwoToneIcon></LockTwoToneIcon>
                    </CardIcon>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <Card>
                                <CardHeader color="success">
                                    <h4 className={classes.cardTitleWhite}>계정목록</h4>
                                </CardHeader>
                                <CardBody>
                                    상품관리
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <Card>
                                <CardHeader color="warning">
                                    <h4 className={classes.cardTitleWhite}>추가하기</h4>
                                </CardHeader>
                                <CardBody>
                                    asd
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
        </div>
    );
}
