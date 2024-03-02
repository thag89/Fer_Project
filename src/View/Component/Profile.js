import React from 'react';
import Header from "./Header";
import { Col, Form, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import avatar from "../Assets/avatar.jpg";
import { ToastContainer, toast } from "react-toastify";


export default function Profile() {

    const [currUser, setCurrUser] = useState({});
    const [email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhonenumber] = useState("");
    const [Introduction, setIntroduction] = useState("");
    const [OnlineCv, setOnlineCv] = useState("");
    const [imgPath, setImgPath] = useState("");
    const [Experience, setExperience] = useState(0);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem("currUser")) == null) {
            window.location.href = "/login";
        }
        else {
            setCurrUser(JSON.parse(sessionStorage.getItem("currUser")));
            fetch("http://localhost:9999/user/" + JSON.parse(sessionStorage.getItem("currUser")).id)
                .then((res) => res.json())
                .then((result) => {
                    setCurrUser(result);
                    setEmail(result.email);
                    setName(result.Name);
                    setAddress(result.address);
                    setPhonenumber(result.phone);
                    setIntroduction(result.Introduction);
                    setOnlineCv(result.OnlineCv);
                    setImgPath(result.imgPath);
                    setExperience(result.Experience);
                    if (result.OnlineCv) {
                        setCvUrl(result.OnlineCv);
                    }
                })
        }
    }, currUser);

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSaveClick = () => {
        if (ValidateInput()) {
            setIsEditing(false);
            const updatedUserData = currUser;
            updatedUserData.Name = Name;
            updatedUserData.address = address;
            updatedUserData.phone = phone;
            updatedUserData.Introduction = Introduction;
            updatedUserData.OnlineCv = OnlineCv;
            updatedUserData.Experience = Experience;
            updatedUserData.email = email;
            fetch("http://localhost:9999/user/" + currUser.id, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(updatedUserData),
            })
                .then((res) => {
                    toast.success("Update success!");
                })
                .catch((err) => {
                    toast.error("Failed: " + err.message);
                });
        }
    }

    const ValidateInput = () => {
        let isproceed = true;
        let errormessage = "Please fill in the blank input";
        if (
            Name.length < 1 ||
            Name === "" ||
            email.length < 1 ||
            email === "" ||
            address.length < 1 ||
            address === "" ||
            phone.length < 1 ||
            phone === "" ||
            Introduction.length < 1 ||
            Introduction === "" ||
            OnlineCv.length < 1 ||
            OnlineCv === ""
        ) {
            isproceed = false;
        }
        if (!isproceed) {
            toast.warning(errormessage);
        } else {
            if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
                isproceed = false;
                toast.error("invalid email!");
            }
        }
        return isproceed;
    };

    const [cvUrl, setCvUrl] = useState('');

    const handleInputChange = (event) => {
        setCvUrl(event.target.value);
        setOnlineCv(event.target.value);
    };

    return (
        <>
            <Header />
            <ToastContainer />
            <Row className="col-12 personalInfo">
                <Col className="Avatar col-lg-4 col-sm-12">
                    {imgPath ? (
                        <Image src={imgPath} />
                    ) : (
                        <Image src={avatar} />
                    )}
                    <div className="Quote">
                        <p>{Name}</p>
                        <p>{email}</p>
                    </div>
                    <div className="EditProfileButton">
                        {!isEditing && (
                            <button onClick={handleEditClick}>Edit Profile</button>
                        )}
                    </div>
                </Col>
                <Col className="UserInfo col-lg-8 col-sm-12">
                    <div className="col-lg-10 UserInfoWrapper">
                        <Form>
                            <div className="InputField">
                                <h3>UserName:&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                                <input className="UserInfoInput"
                                    type="text"
                                    value={Name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{ marginLeft: "61px" }}
                                    readOnly={!isEditing}
                                />
                            </div>
                            <div className="InputField">
                                <h3>Email:&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                                <input className="UserInfoInput"
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{ marginLeft: "125px" }}
                                    readOnly={!isEditing}
                                />
                            </div>
                            <div>
                                <div className="InputField">
                                    <h3>Address:&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                                    <input className="UserInfoInput"
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        style={{ marginLeft: "91px" }}
                                        readOnly={!isEditing}
                                    />
                                </div>
                                <div className="InputField">
                                    <h3>Phone Number:&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                                    <input className="UserInfoInput"
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhonenumber(e.target.value)}
                                        style={{ marginLeft: "-2px" }}
                                        readOnly={!isEditing}
                                    />
                                </div>
                                <div className="InputField Introduction">
                                    <h3>Introduction:&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                                    <textarea className="UserInfoInput"
                                        value={Introduction}
                                        onChange={(e) => setIntroduction(e.target.value)}
                                        style={{ fontSize: "100%" }}
                                        readOnly={!isEditing}
                                    />
                                </div>
                            </div>

                            <div className="InputField">
                                <h3>Online CV:&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                                {!isEditing ? (
                                    <a
                                        className="UserInfoLink"
                                        href={cvUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ marginLeft: "65px", color: "#1098dc", textDecoration: "underline" }}
                                    >
                                        View Online CV
                                    </a>
                                ) : (
                                    <input
                                        className="UserInfoInput"
                                        type="text"
                                        style={{ marginLeft: "65px", color: "#1098dc" }}
                                        value={cvUrl}
                                        onChange={handleInputChange}
                                        readOnly={!isEditing}
                                    />
                                )}
                            </div>

                            <div className="InputField">
                                <h3>Experience: </h3>
                                <input className="UserInfoInput"
                                    type="number"
                                    value={Experience}
                                    min={0}
                                    style={{ marginLeft: "80px" }}
                                    readOnly={!isEditing}
                                />
                            </div>
                            <div className="EditProfileButton">
                                {isEditing && (
                                    <button onClick={handleSaveClick}>Save</button>
                                )}
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>

            <Row style={{ marginBottom: "50px" }}>

            </Row>
        </>
    );
}
