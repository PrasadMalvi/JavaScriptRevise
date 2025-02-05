const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5051;

app.use(cors());
app.use(express.json());

let user = [];

//Create
app.post("/user", (req, res) => {
  const { id, name, email } = req.body;
  user.push({ id, name, email });
  res.status(201).json({ message: "User Created Successflly" });
});

//Read || Get all users
app.get("/users", (req, res) => {
  req.json(user);
});

//Update can use Put || Post
app.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  user = user.push.map((user) =>
    user.id === parseInt(id) ? { ...user, name, email } : user
  );
  res.json({ message: "User Updated Successfully" });
});

//Delete
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  user.user.filter((user) => user.id !== parseInt(id));
  res.json({ message: "User Deleted Successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
