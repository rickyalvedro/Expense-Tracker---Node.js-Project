const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
  res.send(
    `<form action="/" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('name').value)">
     <input id="name" type="text" name="name">
     <br />
	   <button type="submit">Submit</button>
     </form>`
  );
});

module.exports = router;
