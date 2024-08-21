// Routes file to handle homepage logic

const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET route to display all posts on the homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["user"],
        },
        {
          model: Comment,
          attributes: [
            "id",
            "commentContent",
            "post_id",
            "user_id",
            "commentDate",
          ],
          include: {
            model: User,
            attributes: ["user"],
          },
        },
      ],
    });

    const posts = postData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route to render the login page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// GET route to render the signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

// GET route to render the dashboard page
// Only allow this access if the user is logged in (via the 'withAuth' middleware utility)
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [
        {
          model: User,
          attributes: ["user"],
        },
      ],
    });

    const posts = postData.map((project) => project.get({ plain: true }));

    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
          attributes: ["user"],
        },
        {
          model: Comment,
          attributes: [
            "id",
            "commentContent",
            "post_id",
            "user_id",
            "commentDate",
          ],
          include: {
            model: User,
            attributes: ["user"],
          },
        },
      ],
    });

    const posts = postData.get({ plain: true });

    res.render("homepagePost", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
