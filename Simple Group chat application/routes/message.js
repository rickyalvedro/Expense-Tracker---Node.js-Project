const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
  // const data = fs.readFileSync("username.text", "utf-8");
  fs.readFile("username.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "No Chat exists";
    }

    res.send(`${data}<form action='/' method='POST' onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
            <input type='text' name='message' id='message' placeholder='message'>
            <input type='hidden' name='username' id='username'>
            <br />
            <button type='submit'>Send</button>
            </form>`);
  });
});

router.post("/", (req, res) => {
  console.log(req.body.username);
  console.log(req.body.message);
  // data.push(` ${req.body.username}: ${req.body.message} `);
  fs.writeFile(
    "username.txt",
    ` ${req.body.username}: ${req.body.message} `,
    { flag: "a" },
    (err) => (err ? console.log(err) : res.redirect("/"))
  );
});

module.exports = router;
