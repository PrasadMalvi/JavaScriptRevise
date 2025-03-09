const express = require("express");
let users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

//Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()} ${req.ip} : ${req.path}`,
    (err, data) => {
      next();
    }
  );
});

//Routes
app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const updates = req.body;
    let user = users.find((user) => user.id === id);
    if (!user) {
      return res.status(404).json({
        status: "Error",
        message: "User not found",
      });
    }
    Object.assign(user, updates);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      if (err) {
        return res.status(500).json({
          status: "Error",
          message: "Failed to update user in the file",
        });
      }
      return res.json({ status: "Success", user });
    });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);

    const userExist = users.find((user) => user.id === id);
    if (!userExist) {
      return res.status(404).json({
        status: "Error",
        message: "User not found",
      });
    }

    users = users.filter((user) => user.id !== id);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({
          status: "Error",
          message: "Failed to delete user in the file",
        });
      }
      return res.json({
        status: "Success",
        message: `User ${id} deleted successfully`,
        users,
      });
    });
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "Success", id: users.length });
  });
});

app.listen(PORT, () => console.log(`Server runnning on Port ${PORT}`));
