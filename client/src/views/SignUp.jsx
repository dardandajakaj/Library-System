import { Navigate, Link } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import { Card, Form, Button, FloatingLabel, Row, Col } from "react-bootstrap";
import { useRef } from "react";

export default function SignUp() {
    const { token } = useAuthContext();

    const nameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const onsubmit = (ev) => {
        ev.preventDefault();
        if (passwordRef.current.value != confirmPasswordRef.current.value) {
            return alert("Passwords must match");
        }
        const data = {
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        console.log(data);
    };
    if (token) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <Card>
            <Card.Header className="text">Sign Up Panel</Card.Header>
            <Card.Body>
                <Form onSubmit={onsubmit}>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Col>
                            <FloatingLabel
                                controlId="floatingInputName"
                                label="Name"
                                className="mb-3"
                            >
                                <Form.Control
                                    ref={nameRef}
                                    type="text"
                                    placeholder="Name"
                                />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInputSurname"
                                label="Surname"
                                className="mb-3"
                            >
                                <Form.Control
                                    ref={surnameRef}
                                    type="text"
                                    placeholder="Surname"
                                />
                            </FloatingLabel>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Col>
                            <FloatingLabel
                                controlId="floatingInputEmail"
                                label="Email"
                                className="mb-3"
                            >
                                <Form.Control
                                    ref={emailRef}
                                    type="email"
                                    placeholder="Email"
                                />
                            </FloatingLabel>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalCheck">
                        <Col>
                            <FloatingLabel
                                controlId="floatingInputPassword"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    ref={passwordRef}
                                    type="password"
                                    placeholder="Password"
                                />
                            </FloatingLabel>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInputConfirmPassword"
                                label="Confirm Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    ref={confirmPasswordRef}
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </FloatingLabel>
                        </Col>
                    </Form.Group>
                    <Form.Group
                        className="text-center"
                        controlId="form-group-id"
                    >
                        <Button type="submit" variant="primary">
                            Sign Up
                        </Button>
                    </Form.Group>
                </Form>
            </Card.Body>
            <div className="card-footer">
                <p>
                    Already Signed Up! Go to the{" "}
                    <Link to="/login">Login Page</Link>
                </p>
            </div>
        </Card>
    );
}
