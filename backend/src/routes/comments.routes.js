const router = require("express").Router();
const connection = require("../dbConnection");

const getComments = (req, res) => {
  const sql =
    "SELECT id, newReviewer, newComment, newAvatarImage FROM comments";
  connection
    .query(sql)
    .then(([comments]) => res.json(comments))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOneCommentById = (req, res) => {
  const idComment = parseInt(req.params.id, 10);
  if (Number.isNaN(idComment)) {
    res.sendStatus(404);
  } else {
    const sql =
      "SELECT id, newReviewer, newComment, newAvatarImage FROM comments WHERE id= ?";
    connection
      .query(sql, [idComment])
      .then(([comments]) => {
        if (comments.length > 0) {
          res.json(comments[0]);
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

const addComment = (req, res) => {
  const { newReviewer, newComment, newAvatarImage } = req.body;
  if (!newReviewer || !newComment) {
    return res.sendStatus(422);
  }

  const sql =
    "INSERT INTO comments (newReviewer, newComment, newAvatarImage) VALUES (?, ?, ?)";

  return connection
    .query(sql, [newReviewer, newComment, newAvatarImage])
    .then(([result]) => {
      return res
        .status(201)
        .json({ id: result.insertId, newReviewer, newComment, newAvatarImage });
    })
    .catch((err) => {
      console.error(err);
      return res.sendStatus(500);
    });
};

const deleteComment = (req, res) => {
  const idComment = parseInt(req.params.id, 10);
  if (Number.isNaN(idComment)) {
    res.sendStatus(422);
  } else {
    const sql = "DELETE FROM comments WHERE id= ?";
    connection.query(sql, [idComment]).then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    });
  }
};

router.get("/", getComments);
router.get("/:id", getOneCommentById);
router.post("/", addComment);
router.delete("/:id", deleteComment);

module.exports = router;
