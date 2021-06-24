import Video from "../models/Video";

export const Home = (req, res) => {
  Video.find({}, (err, videos) => {});
  res.render("home", { pageTitle: "Home" });
};

export const watch = (req, res) => {
  const { id } = req.params;
  console.log(`Show video #${id}`);
  res.render("watch", { pageTitle: `Watching` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/video/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Uploading Video" });
};

export const postUpload = (req, res) => {
  console.log(req.body);
  const title = req.body.uploadedTitle;
  return res.redirect("/");
};
