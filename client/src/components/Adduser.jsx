import { useState } from "react";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";

import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
  Grid,
} from "@mui/material";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    margin-top: 50px;
  }
`;

const defaultvalue = {
  first_name: "",
  last_name: "",
  street: "",
  address: "",
  city: "",
  state: "",
  email: "",
  phone: "",
};

const Adduser = () => {
  const [user, setuser] = useState(defaultvalue);
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const Adduserdetails = async () => {
    await addUser(user);
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4">Customer Details</Typography>
      <Grid container rowSpacing={2} columnSpacing={-20}>
        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>First name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="first_name" />
          </FormControl>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>Last name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="last_name" />
          </FormControl>
        </Grid>

        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>Street</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="street" />
          </FormControl>
        </Grid>

        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>Address</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="address" />
          </FormControl>
        </Grid>

        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>City</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="city" />
          </FormControl>
        </Grid>

        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>State</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="state" />
          </FormControl>
        </Grid>

        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="email" />
          </FormControl>
        </Grid>

        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="phone" />
          </FormControl>
        </Grid>
      </Grid>

      <FormControl>
        <Button
          size="large"
          variant="contained"
          onClick={() => Adduserdetails()}
        >
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default Adduser;
