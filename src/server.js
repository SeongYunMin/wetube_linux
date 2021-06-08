import express from "express";

const PORT = 4000;

const app = express();

// const handleHome = () => console.log("response from server");
const handleHome = (req, res) => {
  return res.send("<h1>Server Response!!</h1>");
};
const handleLogin = (req, res) => {
  return res.send("Login here");
};
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🎃`);

app.listen(PORT, handleListening);
