let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 3.5,
    comments: 4,
    createdAt: "3 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 4,
    comments: 10,
    createdAt: "7 minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });
export const search = (req, res) => res.send("Search");
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  console.log(`Show video #${id}`);
  res.render("watch", { pageTitle: `Watch ${video.title}`, video });
};
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const deleteVideo = (req, res) => res.send("Delete Video");
export const upload = (req, res) => res.send("Upload Video");
