const router = require("express").Router();
const connection = require("../dbConnection");

const getUser = (req, res) => {
  const sql =
    "SELECT id, firstname, lastname, email, password, biography FROM users";
  connection
    .query(sql)
    .then(([users]) => res.json(users))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOneUserById = (req, res) => {
  const idUser = parseInt(req.params.id, 10);
  if (Number.isNaN(idUser)) {
    res.sendStatus(404);
  } else {
    const sql =
      "SELECT id, firstname, lastname, email, password, biography FROM users WHERE id = ?";

    connection
      .query(sql, [idUser])
      .then(([users]) => {
        if (users.length > 0) {
          res.json(users[0]);
        } else {
          res.sendStatus(404);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

// const getLogin = (req, res) => {
//   const { email, password } = req.body;

//   const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
//   connection.query(sql, [email, password], (err, result) => {
//     if (err) {
//       res.send({ err });
//     }

//     if (result) {
//       res.send(result);
//     } else {
//       res.send({ message: "Wrong email/password combination!" });
//     }
//   });
// };

router.get("/", getUser);
router.get("/:id", getOneUserById);

// router.get("/login", getLogin);

module.exports = router;
