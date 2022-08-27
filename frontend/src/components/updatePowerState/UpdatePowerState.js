import { formControlClasses } from "@mui/material";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const UpdatePowerState = ({ Powerstatus }) => {
  //   console.log(Powerstatus.Object.key);
  const [form, setForm] = useState({});

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <Form onSubmit={handelOnSubmit}>
        {Powerstatus &&
          Powerstatus.map((item, index) => (
            <Form.Group key={index} className="mb-3" controlId="formBasicEmail">
              <Form.Label>{Object.keys(item)}</Form.Label>
              <Form.Control
                type="number"
                name="change"
                onChange={handelOnChange}
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
