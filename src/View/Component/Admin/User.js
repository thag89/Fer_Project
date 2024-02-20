import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

export default function Jobs() {
    const [job, setJob] = useState([])
    const [filter, setFilter] = useState(0)
    useEffect(() => {
        axios.get("http://localhost:9999/user")
            .then(res => {
                if (filter === 0) {
                    setJob(res.data)
                } else if (filter !== 0) {
                    setJob(res.data.filter(j => j.role === filter))
                }
            })
            .catch(err => console.log(err))
    }, [filter])
    console.log(job);
    function displayStatus(s) {
        if (s === 1) {
            return <span style={{ color: "red", fontWeight: "bolder" }}> Ban</span>
        } else if (s === 0) {
            return <span style={{ color: "green", fontWeight: "bolder" }}> Active</span>
        }
    }
    function displayRole(s) {
        if (s === 2) {
            return <span> Candidate</span>
        } else if (s === 3) {
            return <span> Company</span>
        }
    }
    const handleChange = (id, s) => {
        axios.patch(`http://localhost:9999/user/${id}`, { BanStatus: s })
            .then((response) => {
                setJob((prevJob) => {
                    return prevJob.map((j) => {
                        if (j.id === id) {
                            return { ...j, BanStatus: s };
                        }
                        return j;
                    });
                });
            })
            .catch((error) => {
                // Handle errors.
            });
    }
    return (
        <Container>
            <Row>
                <Col xs={10}>
                    <Table responsive="md" striped hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Email</th>
                                <th>Name</th>
                                <th>Active</th>
                                <th>Create Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {job.filter((j) => j.role !== 1)
                                .map((j) => (
                                    <tr key={j.id}>
                                        <td>{j.id}</td>
                                        <td>{j.email}</td>
                                        <td>{j.Name}</td>
                                        <td>{displayStatus(j.BanStatus)}</td>
                                        <td>{displayRole(j.role)}</td>
                                        <td>
                                            {j.BanStatus === 0 ? (
                                                <Button variant="danger" onClick={() => handleChange(j.id, 1)}>Ban</Button>
                                            ) : (
                                                <Button variant="success" onClick={() => handleChange(j.id, 0)}>Active</Button>
                                            )
                                            }
                                        </td>
                                    </tr>
                                )

                                )
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col xs={2}>
                    <Row style={{ textAlign: "center" }}>
                        <h3>Role</h3>
                    </Row>
                    <Row >
                        <ul style={{ listStyle: 'none' }}>
                            <li>
                                <input type="radio" value={3} name="status" onChange={e => setFilter(Number(e.target.value))} /><span>Company</span>
                            </li>
                            <li>
                                <input type="radio" value={2} name="status" onChange={e => setFilter(Number(e.target.value))} /><span>Applicant</span>
                            </li>
                            <li>
                                <input type="radio" value={0} name="status" onChange={e => setFilter(Number(e.target.value))} /><span>All</span>
                            </li>
                        </ul>
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}