import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Update() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState(null);
  const sendDataToAPI = () => {
    axios
      .put(`https://628248eeed9edf7bd881f42c.mockapi.io/api/mi/users/${ID}`, {
        firstName,
        lastName,
      })
      .then(() => {
        navigate("/read");
      });
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setID(localStorage.getItem("ID"));
  }, []);

  return (
    <div>
      {/* <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            name="fname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lname"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={sendDataToAPI}>
          Update
        </Button>
      </Form> */}
      <TextField
        name="fname"
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        value={firstName}
      />
      <br />
      <br />
      <TextField
        name="lname"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <br />
      <Button
        variant="outlined"
        type="submit"
        onClick={sendDataToAPI}
        sx={{
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.862)",
          borderColor: "black",
        }}
      >
        Update
      </Button>
    </div>
  );
}


