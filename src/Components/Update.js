import React, { useState, useEffect } from 'react';
import '../CSS/User.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
const Update = () => {
  const [id, setId] = useState(0);
  const [Taskdescription, setDescription] = useState("");
  const [DueDate, setDueDate] = useState("");
  const [Status, setStatus] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id", id));
    setDescription(localStorage.getItem("Taskdescription", Taskdescription));
    setDueDate(localStorage.getItem("DueDate", DueDate));
    setStatus(localStorage.getItem("Status", Status));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://63f0a3b85b7cf4107e23be0f.mockapi.io/userdetails/${id}`, {
        Taskdescription: Taskdescription,
        DueDate: DueDate,
        Status: Status
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h1 className="mt-3 text-center">Update</h1>

      <Form className='user_form'>
        <Row className="justify-content-center">
          <Col sm={6} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Task Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" value={Taskdescription}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={6} md={6}>
            <Form.Group className="mb-3 pl-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" placeholder="Enter date" value={DueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={6} md={6}>
            <Form.Group className="mb-3 pl-3">
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="Status" value={Status} onChange={(e) => setStatus(e.target.value)}>
                <option>Status</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={6} md={6}>
            <Button variant="primary" type="submit" onClick={handleUpdate}>
              Update
            </Button>
            <Link to="/read">
              <Button variant="secondary mx-2"> Back </Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Update