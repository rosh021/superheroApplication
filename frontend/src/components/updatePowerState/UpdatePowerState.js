import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateSuperHeroPowerstats } from "../../pages/superHeroRedux/Action";

const initialState = {
  Combat: 0,
  Durability: 0,
  Intelligence: 0,
  Power: 0,
  Speed: 0,
  Strength: 0,
};
export const UpdatePowerState = ({ powerstats }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const { oneSuperHero } = useSelector((state) => state.superHero);

  useEffect(() => {
    setForm(powerstats);
  }, [powerstats]);

  const handelOnChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    if (!value) {
      value = 0;
    }

    setForm({
      ...form,
      [name]: +value,
    });
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const _id = oneSuperHero._id;

    _id
      ? dispatch(updateSuperHeroPowerstats({ ...form, _id: oneSuperHero._id }))
      : alert("_id not found!");
  };

  return (
    <div>
      <Form onSubmit={handelOnSubmit}>
        {Object.keys(form).map((item, index) => (
          <Form.Group key={index} className="mb-3" controlId="formBasicEmail">
            <Form.Label>{item}</Form.Label>
            <Form.Control
              min={0}
              type="number"
              name={item}
              onChange={handelOnChange}
              value={form[item]}
              max="100"
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
