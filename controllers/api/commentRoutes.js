// Routes file to handle comments

const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// GET all comments
router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll();

    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE a new comment
router.post("/", async (req, res) => {
  try {
    const commentData = await Comment.create({
      commentContent: req.body.commentContent,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
      commentDate: req.body.commentDate,
    });

    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
