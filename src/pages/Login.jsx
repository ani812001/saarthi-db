import axios from "axios";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

<>
  <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
  <input type="password" onChange={(e) => setPassword(e.target.value)} />
</>

const handleLogin = async () => {
  const res = await axios.post("http://localhost:5000/api/auth/login", {
    email,
    password,
  });

  localStorage.setItem("token", res.data.token);
  setAuth(true);
  navigate("/");
};