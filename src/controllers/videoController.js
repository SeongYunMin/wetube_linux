import Video from "../models/Video";

export const home = (req, res) => {
  console.log("Start");
  Video.find({}, (error, videos) => {
    console.log("errors", error);
    console.log("videos", videos);
    console.log("db loading finished");
    return res.render("home", { pageTitle: "Home", videos: [] });
  });
  console.log("I finished first");
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
