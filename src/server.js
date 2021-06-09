import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log("middleware running");
  console.log(`${req.method} ${req.url}`);
  // return res.send("Middleware Here!");
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    console.log("Can't access");
    return res.send("<h1>Not Allowed ❌</h1>");
  }
  console.log("Allowed, you may continue");
  next();
};

const handleHome = (req, res) => {
  return res.send("<h1>I love Middleware</h1>");
};
const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge");
};
app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🎃`);

app.listen(PORT, handleListening);
