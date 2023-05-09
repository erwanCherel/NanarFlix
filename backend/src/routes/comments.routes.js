const router = require("express").Router();
const connection = require("../dbConnection");

const getComments = (req, res) => {
  const sql = "SELECT * FROM comments";
  connection
    .query(sql)
    .then(([comments]) => res.json(comments))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getIdMovie = (req, res) => {
  const idMovie = parseInt(req.params.idMovie, 10);
  if (Number.isNaN(idMovie)) {
    res.sendStatus(404);
  } else {
    const sql = "SELECT * FROM comments WHERE idMovie = ?";
    connection
      .query(sql, [idMovie])
      .then(([result]) => {
        if (result.length > 0) {
          res.json([...result]);
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

const getUserComment = (req, res) => {
  const id = parseInt(req.params.id, 10);

  const sql = "SELECT * FROM comments WHERE id = ?";
  connection
    .query(sql, [id])
    .then(([result]) => {
      if (result.length > 0) {
        res.json([...result]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addComment = (req, res) => {
  const { idMovie, reviewer, idUser, comment, avatarImage } = req.body;
  if (!comment) {
    return res.sendStatus(422);
  }

  const sql =
    "INSERT INTO comments (idMovie, reviewer, idUser, comment, avatarImage) VALUES (?, ?, ?, ?, ?)";

  return connection
    .query(sql, [idMovie, reviewer, idUser, comment, avatarImage])
    .then(([result]) => {
      return res.status(201).json({
        id: result.insertId,
        idMovie,
        idUser,
        reviewer,
        comment,
        avatarImage,
      });
    })
    .catch((err) => {
      console.error(err);
      return res.sendStatus(500);
    });
};

const deleteComment = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const sql = "DELETE FROM comments WHERE id=?";
  connection.query(sql, [id]).then(([result]) => {
    if (result.affectedRows === 0) {
      res.status(404).send("Not Found");
    } else {
      res.status(200).send("Commentaire supprimé !");
    }
  });
};

router.get("/", getComments);
router.get("/:idMovie", getIdMovie);
router.get("/user/:id", getUserComment);
router.post("/", addComment);
router.delete("/user/:id", deleteComment);

module.exports = router;
