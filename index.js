require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

const githubData = {
  login: "muhammadranju",
  id: 80270685,
  node_id: "MDQ6VXNlcjgwMjcwNjg1",
  avatar_url: "https://avatars.githubusercontent.com/u/80270685?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/muhammadranju",
  html_url: "https://github.com/muhammadranju",
  followers_url: "https://api.github.com/users/muhammadranju/followers",
  following_url:
    "https://api.github.com/users/muhammadranju/following{/other_user}",
  gists_url: "https://api.github.com/users/muhammadranju/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/muhammadranju/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/muhammadranju/subscriptions",
  organizations_url: "https://api.github.com/users/muhammadranju/orgs",
  repos_url: "https://api.github.com/users/muhammadranju/repos",
  events_url: "https://api.github.com/users/muhammadranju/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/muhammadranju/received_events",
  type: "User",
  site_admin: false,
  name: "Muhāmmad Ranju",
  company: "don't have any company :(",
  blog: "https://muhammadranju.vercel.app",
  location: "Bangladesh, Rajshahi",
  email: null,
  hireable: null,
  bio: "junior node.js developer \r\nmuhamadranju@gmail.com",
  twitter_username: "muhammadranju",
  public_repos: 36,
  public_gists: 0,
  followers: 0,
  following: 20,
  created_at: "2021-03-08T15:08:37Z",
  updated_at: "2023-09-30T10:14:59Z",
};

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello welcome</h1>");
});
app.get("/github", (req, res) => {
  res.status(200).json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
