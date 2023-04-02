import { auth, registerWithEmailAndPassword } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/countries");
  }, [user, loading, navigate]);
  return (
    <div style={{ background: "lightgrey", height: "100vh", width: "100vw" }}>
      <h2 className="text-center mt-5">Register</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
          gap: "20px",
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <Button onClick={register}>Register</Button>
        <h5 className="text-center">
          Already have an account?
          <Link to="/login"> Login </Link> now.
        </h5>
      </div>
    </div>
  );
};

export { Register };
