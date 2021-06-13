import express from "express";
import morgan from "morgan";
import global from "./routers/globalRouter";
import user from "./routers/userRouter";
import video from "./routers/videoRouter";

const PORT = 4000;

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
const logger = morgan("dev");
app.use(logger);

app.use("/video", video);
app.use("/user", user);
app.use("/", global);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🎃`);

app.listen(PORT, handleListening);
