import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { Header, JobDetail, JobListing, About, Contact, HomePage, PostJob, ApplyJobs, Footer, Login, Register, Profile } from "./View/Component/index"

import Index from "./View/Component/Company/Index";
import Application from './View/Component/Company/ApplicantManagement';
import Dashboard from './View/Component/Company/Dashboard';
import PostNewJob from './View/Component/Company/PostNewJob';
import Jobs from './View/Component/Company/Jobs';
import Update from './View/Component/Company/Update';
import aDashbroard from './View/Component/Admin/Dashboard'
import AIndex from './View/Component/Admin/Index'
import JobsManage from './View/Component/Admin/Jobs'
import JobDetailManage from './View/Component/Admin/Update'
import User from './View/Component/Admin/User'
function App() {
  return (
    <Container fluid>
      <Col>
        <Row>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobdetail/:id" element={<JobDetail />} />
            <Route path="/JobListing" element={<JobListing />} />
            <Route path="/postJob" element={<PostJob />} />
            <Route path="/applyjob/:id" element={<ApplyJobs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/company" element={<Index />}>
              <Route path="applicant-management" element={<Application />} />
              <Route path='jobs' element={<Jobs />} />
              <Route path='update/:id' element={<Update />} />
              <Route path="post-job" element={<PostNewJob />} />
              <Route index element={<Dashboard />} />
            </Route>
            <Route path="/admin" element={<AIndex />}>
              <Route path="jobpost" element={<JobsManage />} />
              <Route path="update/:id" element={<JobDetailManage />} />
              <Route path="user" element={<User />} />
              <Route index element={<aDashbroard />} />
            </Route>
          </Routes>
        </Row>
        <Footer></Footer>
      </Col>
    </Container>
  );
}

export default App;
