import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Read from "./Read";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Create() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
  const onDelete = (id) => {
    axios
      .delete(`https://628248eeed9edf7bd881f42c.mockapi.io/api/mi/users/${id}`)
      .then(() => {
        getData();
      });
  };

  const sendDataToAPI = () => {
    axios.post(`https://628248eeed9edf7bd881f42c.mockapi.io/api/mi/users`, {
      firstName,
      lastName,
    });
    //   .then(() => {
    //     navigate("/Createdemo");
    //   });
  };

  return (
    <>
      <div>
        <TextField
          name="fname"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <br />
        <br />
        <TextField
          name="lname"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />

        <br />
        <br />
        <Button
          variant="outlined"
          type="submit"
          onClick={sendDataToAPI}
          //  color="primary"
          sx={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.862)",
            borderColor: "black",
          }}
        >
          submit
        </Button>

        <button onClick={Read}>show data</button>
      </div>
      <div>
        <Table celled>
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
        </Table>
      </div>
    </>
  );
}
