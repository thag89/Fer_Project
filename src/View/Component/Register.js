import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Register() {
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState(0);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:9999/user")
      .then((response) => response.json())
      .then((data) => {
        const sortedUsers = data.sort((a, b) => a.id - b.id);
        const maxId = sortedUsers.length > 0 ? sortedUsers[sortedUsers.length - 1].id : 0;
        const nextId = maxId + 1;
        setId(nextId);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const IsValidate = () => {
    let isProceed = true;
    let errorMessage = "Please enter a value in ";
    if (userName === null || userName === "") {
      isProceed = false;
      errorMessage += "User Name ";
    }
    if (password === null || password === "") {
      isProceed = false;
      errorMessage += "Password ";
    }
    if (email === null || email === "" || email.length <= 8 || email.length >= 30) {
      isProceed = false;
      errorMessage += "Email";
    }

    if (!isProceed) {
      toast.warning(errorMessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        // Valid email
      } else {
        isProceed = false;
        toast.warning("Please enter a valid email");
      }
    }
    return isProceed;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let regObj = {
      userName,
      email,
      password,
      role,

    };
    if (IsValidate()) {
      fetch("http://localhost:9999/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          toast.success("Registered successfully.");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed: " + err.message);
        });
    }
  };

  return (
    <>
      <Header />
      <Row>
        <ToastContainer />
        <Col >
          <div key={id}>
            <div className="offset-lg-3 col-lg-6 " style={{ marginTop: "40px", marginBottom: "30px" }}>
              <form className="container" onSubmit={handleSubmit}>
                <div className="card">
                  <div className="card-header" style={{ backgroundColor: "#f4f0ec " }} >
                    <h1 className="text-center ">Sign Up</h1>
                  </div>
                  <div className="card-body" style={{ backgroundColor: "#f4f0ec  " }}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>User Name <span className="errmsg" style={{ color: "red" }}>*</span></label>
                          <input value={userName} onChange={e => setUserName(e.target.value)} className="form-control"></input>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Email <span className="errmsg" style={{ color: "red" }}>*</span></label>
                          <input value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Password <span className="errmsg" style={{ color: "red" }}>*</span></label>
                          <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control"></input>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Phone <span className="errmsg" style={{ color: "red" }}></span></label>
                          <input value={phone} onChange={e => setPhone(e.target.value)} className="form-control"></input>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Role <span className="errmsg" style={{ color: "red" }}>*</span></label>
                          <select value={role} onChange={e => setRole(parseInt(e.target.value))} className="form-control">
                            <option value="">Choose Role</option>
                            <option value={2}>Applicant</option>
                            <option value={3}>Company</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Address</label>
                          <textarea value={address} onChange={e => setAddress(e.target.value)} className="form-control"></textarea>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="card-footer" style={{ backgroundColor: "#f4f0ec  " }}>
                    <button type="submit" className="btn btn-primary text-white offset-lg-5" style={{ width: '15%' }}>Submit</button>
                    {/* <Link to={'/login'} className="btn btn-danger text-white offset-lg-1" style={{ width: '13%' }}>Back</Link> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>

    </>
  );

}