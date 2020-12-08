import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

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

export default function UserProfile() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h2 className={classes.cardTitleWhite}>API 등록</h2>
              </CardHeader>
              <CardBody>
                <br/>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <FormControl component="fieldset">
                      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="female" control={<Radio />} label="쿠팡" />
                        {/*<FormControlLabel value="male" control={<Radio />} label="X" />*/}
                        {/*<FormControlLabel value="other" control={<Radio />} label="X" />*/}
                        {/*<FormControlLabel value="other2" control={<Radio />} label="X" />*/}
                      </RadioGroup>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                        labelText="업체명"
                        formControlProps={{
                          fullWidth: true
                        }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                        labelText="업체코드"
                        formControlProps={{
                          fullWidth: true
                        }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                        labelText="Access Key"
                        formControlProps={{
                          fullWidth: true
                        }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                        labelText="Secret Key"
                        formControlProps={{
                          fullWidth: true
                        }}
                    />
                  </GridItem>

                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary">업로드</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
  );
}
