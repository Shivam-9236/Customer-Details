import { useState, useEffect } from "react";
import { editUser, getUser } from "../Service/api";
import { useNavigate, useParams } from "react-router-dom";
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

const Edituser = () => {
  const [user, setuser] = useState(defaultvalue);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    loaduserdetails();
  }, []);

  const loaduserdetails = async () => {
    const response = await getUser(id);
    setuser(response.data[0]);
  };

  const onValueChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const Edituserdetails = async () => {
    await editUser(user, id);
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4">Edit Customer Detail</Typography>
      <Grid container rowSpacing={2} columnSpacing={-20}>
        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>First name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="first_name"
              value={user.first_name}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>Last name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="last_name"
              value={user.last_name}
            />
          </FormControl>
        </Grid>

        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>Street</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="street"
              value={user.street}
            />
          </FormControl>
        </Grid>

        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>Address</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="address"
              value={user.address}
            />
          </FormControl>
        </Grid>

        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>City</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="city"
              value={user.city}
            />
          </FormControl>
        </Grid>

        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>State</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="state"
              value={user.state}
            />
          </FormControl>
        </Grid>

        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="email"
              value={user.email}
            />
          </FormControl>
        </Grid>

        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="phone"
              value={user.phone}
            />
          </FormControl>
        </Grid>
      </Grid>

      <FormControl>
        <Button
          size="large"
          variant="contained"
          onClick={() => Edituserdetails()}
        >
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default Edituser;
