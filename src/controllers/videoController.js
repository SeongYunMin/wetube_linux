export const trending = (req, res) => res.send("Trending Videos");
export const search = (req, res) => res.send("Search");
export const see = (req, res) => {
  console.log(req.params);
  res.send("Watch video");
};
export const edit = (req, res) => res.send("edit video");
export const deleteVideo = (req, res) => res.send("Delete Video");
export const upload = (req, res) => res.send("Upload Video");
