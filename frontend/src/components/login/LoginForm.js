import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { loginAction } from "../../pages/logingRegisterRedux/Action";
import { loginUser } from "../../helpers/axiosHelper";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import { setUser } from "../../pages/logingRegisterRedux/Slice";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [formData, setFormData] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginAction(formData));
    navigator("/dashboard");
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <h3 className="text-center">Welcome Back</h3>
      <hr />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};
