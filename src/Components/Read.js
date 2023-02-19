import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState([]);
    const [tabledark, setTableDark] = useState("");

    function getData() {
        axios.get('https://63f0a3b85b7cf4107e23be0f.mockapi.io/userdetails')
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            });
    }

    function handleDelete(id) {
        axios.delete(`https://63f0a3b85b7cf4107e23be0f.mockapi.io/userdetails/${id}`
        ).then(() => {
            getData();
        });
    }

    const setLocalStorage = (id, Taskdescription, DueDate,Status) => {
        localStorage.setItem("id", id)
        localStorage.setItem("Taskdescription", Taskdescription)
        localStorage.setItem("DueDate", DueDate)
        localStorage.setItem("Status", Status)
    }
    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            
            <div className="d-flex justify-content-between m-2">
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    onClick={() => {
                        if (tabledark === "table-dark") setTableDark("");
                        else setTableDark("table-dark");
                    }}
                />
            </div>
                <h2>Read Operation</h2>
                <Link to="/">
                    <button className="btn btn-secondary">Create</button>
                </Link>
            </div>
            <table bordered variant="dark"  className={`table ${tabledark}`} mt-5>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th> Task Description</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                {
                    data.map((eachData) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <td>{eachData.id}</td>
                                        <td>{eachData.Taskdescription}</td>
                                        <td>{eachData.DueDate}</td>
                                        <td>{eachData.Status}</td>
                                        <td>
                                            <Link to="/update">
                                                <Button variant="success" onClick={() => setLocalStorage
                                                    (eachData.id, eachData.Taskdescription, eachData.DueDate,eachData.Status)}>Edit</Button>{' '}
                                            </Link>
                                        </td>
                                        <td><Button variant="danger" onClick={() => handleDelete(eachData.id)}>Delete</Button>{' '}</td>
                                    </tr>

                                </tbody></>
                        )
                    }
                    )

                }
            </table>
        </>
    )
}

export default Read