import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log("middleware running");
  console.log(`User is going to ${req.url}`);
  // return res.send("Middleware Here!");
  next();
};
// const handleHome = () => console.log("response from server");
const handleHome = (req, res, next) => {
  return res.send("<h1>I love Middleware</h1>");
};
const handleLogin = (req, res) => {
  return res.send("Login here");
};
app.use(gossipMiddleware);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🎃`);

app.listen(PORT, handleListening);
