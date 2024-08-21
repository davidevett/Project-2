// Routes file to handle dashboard logic

const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");

// Route to display posts from the users dashboard
router.get("/posts/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    const posts = postData.get({ plain: true });

    res.render("dashboardPost", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
