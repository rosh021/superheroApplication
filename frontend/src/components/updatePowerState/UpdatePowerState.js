import { formControlClasses } from "@mui/material";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const UpdatePowerState = ({ Powerstatus }) => {
  const [form, setForm] = useState({});
  return (
    <div>
      <Form>
        {Powerstatus &&
          Powerstatus.map((item, index) => (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{Object.keys(item)}</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={Object.values(item).toString()}
              />
            </Form.Group>
          ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
