const express = require('express');
var cors = require('cors');
const app = express();
var jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', middleware, (req, res) => {
  res.status(200).json({ message: 'asdjjad' });
})
app.route("/login")
  .get((req, res) => {
    res.status(200).send(req.body);
  })
  .post((req, res) => {
    if (req.headers.authorization === "backenddaucac") {
      const token = jwt.sign(req.body, req.headers.authorization, {expiresIn: 86400});
      res.status(200).send({ token });
    } else {
      res.status(404).send("Error");
    }
  })

function middleware(req, res, next) {
  console.log("chill");
  next();
}

app.listen(5000, () => {
  console.log(`Example app listening on port http://localhost:5000`)
})