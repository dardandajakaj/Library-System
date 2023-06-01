import { Form, Card, FloatingLabel, Button } from "react-bootstrap";
import { useAuthContext } from "../Context/AuthContext";
import { Navigate, Link } from "react-router-dom";
import { useRef } from "react";

export default function Login() {
    const { token } = useAuthContext();

    const emailRef = useRef();
    const passwordRef = useRef();

    const onSubmit = (ev) => {
        ev.preventDefault();
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        console.log(data)
    }

    if (token) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <Card>
            <Card.Header className="text-center">
                <h3>Log In</h3>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3 text-center">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control
                                ref={emailRef}
                                type="email"
                                placeholder="Email..."
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password"
                        >
                            <Form.Control
                                ref={passwordRef}
                                type="password"
                                placeholder="Password"
                            />
                        </FloatingLabel>
                        <Button
                            className="mt-3"
                            variant="primary"
                            type="submit"
                        >
                            Log In
                        </Button>
                    </Form.Group>
                </Form>
            </Card.Body>
            <div className="card-footer">
                <p>
                    Not Signed Up! Sign up <Link to="/signup">here!</Link>
                </p>
            </div>
        </Card>
    );
}
