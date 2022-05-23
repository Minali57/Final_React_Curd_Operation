import React, { useEffect, useState } from "react";
// import { Table, Button } from "semantic-ui-react";
// import {  Button } from "semantic-ui-react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://628248eeed9edf7bd881f42c.mockapi.io/api/mi/users`)
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);

  const setData = (id, firstName, lastName) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  };


  const getData = () => {
    axios
      .get(`https://628248eeed9edf7bd881f42c.mockapi.io/api/mi/users`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  // const onDelete = (id) => {
  //   axios
  //     .delete(`https://628248eeed9edf7bd881f42c.mockapi.io/api/mi/users/${id}`)
  //     .then(() => {
  //       getData();
  //     });
  // };

const onDelete = (id) => {

  if(window.confirm("Are you sure to delete the record") )
  { 
     axios
    .delete(`https://628248eeed9edf7bd881f42c.mockapi.io/api/mi/users/${id}`)
    .then(() => {
      getData();
    });
  }
 
};

  return (
    <div>
      {/* <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button
                      onClick={() =>
                        setData(data.id, data.firstName, data.lastName)
                      }
                    >
                      Update
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table> */}

      <Table
        sx={{ minWidth: 650 }}
        size="small"
        aria-label="a dense table"
        style={{ border: "0.001px solid silver" }}
      >
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 700, fontSize: "15px" }}>
              ID
            </TableCell>
            <TableCell style={{ fontWeight: 700, fontSize: "15px" }}>
              First Name
            </TableCell>
            <TableCell style={{ fontWeight: 700, fontSize: "15px" }}>
              Last Name
            </TableCell>
            <TableCell style={{ fontWeight: 700, fontSize: "15px" }}>
              Update
            </TableCell>
            <TableCell style={{ fontWeight: 700, fontSize: "15px" }}>
              Delete
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {apiData.map((data) => {
            return (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.firstName}</TableCell>
                <TableCell>{data.lastName}</TableCell>
                <TableCell>
                  <Link to="/update" style={{ textDecoration: "none" }}>
                    <Button
                      color="success"
                      variant="outlined"
                      onClick={() =>
                        setData(data.id, data.firstName, data.lastName)
                      }
                    >
                      Update
                    </Button>
                  </Link>
                </TableCell>
                <TableCell>
                  <Button
                    color="error"
                    variant="outlined"
                    onClick={() => onDelete(data.id)}
                    // sx={{
                    //   color: "white",
                    //   backgroundColor: "rgba(0, 0, 0, 0.862)",
                    //   borderColor: "black",
                    // }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
