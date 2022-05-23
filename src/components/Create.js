import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Create() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const sendDataToAPI = () => {
    axios
      .post(`https://628248eeed9edf7bd881f42c.mockapi.io/api/mi/users`, {
        firstName,
        lastName,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <div>
        <h2>React Crud Operations</h2>
      </div>
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
      </div>
    </>
  );
}
