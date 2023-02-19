import React, { useState } from 'react';
import '../CSS/User.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [Taskdescription, setDescription] = useState("");
    const [DueDate, setDueDate] = useState("");
    const [Status, setStatus] = useState("");
    const history = useNavigate();
    // const header={"Access-Control-Allow-Origin":"a"};

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://63f0a3b85b7cf4107e23be0f.mockapi.io/userdetails', {
            Taskdescription: Taskdescription,
            DueDate: DueDate,
            Status: Status
            // header
        })

            .then(() => {
                history('/read')
            });


    }

    return (
        <>
            <h1 className="mt-3 text-center">Create</h1>
            <Row className="justify-content-end">
                <Col sm={4} md={4}>
                    <div className="m-2">
                        <Link to="/read">
                            <button className="btn btn-primary">Show Data</button>
                        </Link>
                    </div>
                </Col>
            </Row>
            <Form className='user_form'>
                <Row className="justify-content-center">
                    <Col sm={6} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Task Description</Form.Label>
                            <Form.Control type="text" placeholder="Task Description" onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={6} md={6}>
                        <Form.Group className="mb-3 pl-3">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter email" onChange={(e) => setDueDate(e.target.value)} />
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
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>

        </>
    )
}

export default Create
