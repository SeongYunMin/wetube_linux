export const trending = (req, res) => res.send("Trending Videos");
export const search = (req, res) => res.send("Search");
export const see = (req, res) => {
  res.send(`Watch video #${req.params.id}`);
};
export const edit = (req, res) => {
  res.send(`edit video #${req.params.id}`);
};
export const deleteVideo = (req, res) => {
  res.send(`delete video #${req.params.id}`);
};
export const upload = (req, res) => res.send("Upload Video");
