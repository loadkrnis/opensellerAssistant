import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "@material-ui/core/Button";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  input: {
    display: 'none',
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h2 className={classes.cardTitleWhite}>이미지 리스트</h2>
            </CardHeader>
            <CardBody>
              <Table
                  tableHeaderColor="primary"
                  tableHead={["번호", "상품명", "검증"]}
                  tableData={[
                    ["1", "0fh5u1d_2020728183927752531.jpg", "대기"],
                    ["2", "1fw0g3y_2020728185654538094.jpg", "대기"],
                    ["3", "2oj7r0t_20207281966232224.jpg", "대기"],
                    ["4", "3mk8g0u_202072818562324761.jpg", "대기"],
                    ["5", "4pq5k7x_2020728175319923985.jpg", "대기"],
                    ["6", "7iz5h1e_202072819913164291.jpg", "대기"]
                  ]}
              />
              <br/>
              <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  사진찾기
                </Button>
              </label>
              &nbsp;&nbsp;
              <Button variant="outlined" color="secondary">
                업로드
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
  );
}
