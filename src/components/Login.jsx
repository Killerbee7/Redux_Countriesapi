import { auth, logInWithEmailAndPassword } from "../auth/firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  console.log(error);

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/countries");
  }, [user, loading, navigate]);

  

  return (
    <div style={{ background: "skyblue", height: "100vh", width: "100vw" }}>
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

        <Button onClick={() => logInWithEmailAndPassword(email, password)}>
          Login
        </Button>
        <h5>
          Don't have an account ? <Link to="/register"> Register </Link> now.
        </h5>
      </div>
    </div>
  );
};

export { Login };
