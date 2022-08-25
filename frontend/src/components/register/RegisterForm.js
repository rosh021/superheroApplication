import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../../helpers/axiosHelper";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({});
  const navigation = useNavigate();

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Password and Confirm Password do not match");
    }

    const { confirmPassword, ...rest } = formData;
    const { status, message } = await registerUser(rest);

    toast[status](message);
    if (status === "success") {
      navigation("/");
    }
  };
  return (
    <Form onSubmit={handelOnSubmit}>
      <h3 className="text-center">Registration Form</h3>
      <hr />

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="fName"
          placeholder="Jon"
          onChange={handelOnChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lName"
          placeholder="Doe"
          onChange={handelOnChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="xxx@xxx.com"
          onChange={handelOnChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="******"
          onChange={handelOnChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder="*****"
          onChange={handelOnChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>

      <div className="text-end">
        Already registered? <Link to="/">Login </Link> Now
      </div>
    </Form>
  );
};
