import { getUsers, deleteUser } from "../Service/api";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DoDisturbOnRoundedIcon from "@mui/icons-material/DoDisturbOnRounded";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  styled,
  Button,
} from "@mui/material";

const Addbutton = styled(Button)`
  width: 250px;
  left: 600px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #fff;
    font-size: 15px;
  }
`;

const Alluser = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    getalluser();
  }, []);

  const getalluser = async () => {
    let response = await getUsers();
    setusers(response.data);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id).then(() => getalluser());
  };
  return (
    <>
      <StyleTable>
        <TableHead>
          <THead>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Action</TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.first_name}</TableCell>
              <TableCell>{user.last_name}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.city}</TableCell>
              <TableCell>{user.state}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button onClick={() => deleteUserDetails(user._id)}>
                  <DoDisturbOnRoundedIcon color="disabled" />
                </Button>
                <Button component={Link} to={`/edit/${user._id}`}>
                  <EditIcon color="disabled" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyleTable>
      <Addbutton size="medium" variant="contained" component={Link} to={`/add`}>
        Add Customer
      </Addbutton>
    </>
  );
};

export default Alluser;
