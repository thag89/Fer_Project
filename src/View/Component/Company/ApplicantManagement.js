import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

export default function Application() {
    const [application, setApplication] = useState([])
    const [applicant, setApplicant] = useState([])
    const [job, setjob] = useState([])

    const isUserLoggedIn = sessionStorage.getItem("currUser");
    const parsedObject = JSON.parse(isUserLoggedIn);
    const [filter, setFilter] = useState(0)
    useEffect(() => {
        axios.get("http://localhost:9999/application")
            .then(res => {
                if (filter === 0) {
                    setApplication(res.data)
                } else if (filter !== 0) {
                    setApplication(res.data.filter(j => j.status === filter))
                }
            })
            .catch(err => console.log(err))
    }, [filter])
    useEffect(() => {
        axios
            .get("http://localhost:9999/applicant")
            .then((res) => setApplicant(res.data))
            .catch((error) => console.log(error));
        axios
            .get("http://localhost:9999/job?company=" + parsedObject.id)
            .then((res) => setjob(res.data))
            .catch((error) => console.log(error));

    }, [parsedObject.id])
    function displayStatus(s) {
        if (s === 1) {
            return <span style={{ color: "#cdcd13", fontWeight: "bolder" }}> Pending</span>
        } else if (s === 2) {
            return <span style={{ color: "green", fontWeight: "bolder" }}> Approve</span>
        } else if (s === 3) {
            return <span style={{ color: "red", fontWeight: "bolder" }}> Rejected</span>
        }
    }

    const getApplicantInfo = (companyId) => {
        return applicant.find((company) => company.id === companyId);
    };
    const getJobInfo = (companyId) => {
        return job.find((company) => company.id === companyId);
    };

    const handleApp = (id, s) => {
        const updatedApplication = application.map((a) => {
            if (a.id === id) {
                return { ...a, status: s };
            }
            return a;
        });

        setApplication(updatedApplication);
        axios.patch(`http://localhost:9999/application/${id}`, { status: s })
            .then((response) => {
                // Handle the response as needed.
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
                                <th>Applicant</th>
                                <th>Job</th>
                                <th>CV</th>
                                <th>Apply Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {application.map((app) => {
                                const relatedJob = getJobInfo(app.job);
                                if (relatedJob) {
                                    return (
                                        <tr key={app.id}>
                                            <td>{app.id}</td>
                                            <td>{getApplicantInfo(app.applicant)?.lastname}</td>
                                            <td>{relatedJob.title}</td>
                                            <td><a href={app.CV}>Link CV</a></td>
                                            <td>{app.applydate}</td>
                                            <td>{displayStatus(app.status)}</td>
                                            <td>
                                                {app.status === 1 ? (
                                                    <>
                                                        <Button onClick={() => handleApp(app.id, 2)}>Approve</Button>
                                                        <span>&nbsp;</span>
                                                        <Button onClick={() => handleApp(app.id, 3)}>Reject</Button>
                                                    </>
                                                ) : (
                                                    <div></div>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                } else {
                                    return null; // No matching job found for this application
                                }
                            })}
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