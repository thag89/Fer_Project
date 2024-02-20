import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Jobs() {
    const [job, setJob] = useState([])
    const [filter, setFilter] = useState(0)
    useEffect(() => {
        axios.get("http://localhost:9999/job")
            .then(res => {
                if (filter === 0) {
                    setJob(res.data)
                } else if (filter !== 0) {
                    setJob(res.data.filter(j => j.status === filter))
                }
            })
            .catch(err => console.log(err))
    }, [filter])
    console.log(job);
    function displayStatus(s) {
        if (s === 1) {
            return <span style={{ color: "#cdcd13", fontWeight: "bolder" }}> Pending</span>
        } else if (s === 2) {
            return <span style={{ color: "green", fontWeight: "bolder" }}> Approve</span>
        } else if (s === 3) {
            return <span style={{ color: "red", fontWeight: "bolder" }}> Rejected</span>
        }
    }
    console.log(filter);
    return (
        <Container>
            <Row>
                <Col xs={10}>
                    <Table responsive="md" striped hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Create Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {job.map((j) => (
                                <tr key={j.id}>
                                    <td>{j.id}</td>
                                    <td>{j.title}</td>
                                    <td>{j.location}</td>
                                    <td>{displayStatus(j.status)}</td>
                                    <td>{j.createdate}</td>
                                    <td>
                                        <Button as={Link} to={"/admin/update/" + j.id}>Detail</Button>
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
                        <h3>Status</h3>
                    </Row>
                    <Row >
                        <ul style={{ listStyle: 'none' }}>
                            <li>
                                <input type="radio" value={2} name="status" onChange={e => setFilter(Number(e.target.value))} /><span>Approve</span>
                            </li>
                            <li>
                                <input type="radio" value={3} name="status" onChange={e => setFilter(Number(e.target.value))} /><span>Rejectd</span>
                            </li>
                            <li>
                                <input type="radio" value={1} name="status" onChange={e => setFilter(Number(e.target.value))} /><span>Pending</span>
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