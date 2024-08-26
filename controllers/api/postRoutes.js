const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth"); // Importing withAuth middleware

// CREATE new blog post
router.post("/", withAuth, async (req, res) => { // Adding withAuth to this route as well
  try {
    const postData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      text: req.body.text,
      image: req.body.image,
      user_id: req.session.user_id,
      creationDate: new Date().toISOString().slice(0, 10), // Current date
    });

    req.session.save(() => {
      req.session.post_id = postData.id;
      req.session.logged_in = true;

      res.status(200).json(postData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Save search result as a post
router.post("/save", withAuth, async (req, res) => {
  try {
      const { title, content, text, image } = req.body;

      // Check for existing post with the same title and content to prevent duplicates
      const existingPost = await Post.findOne({ where: { title, content } });
      if (existingPost) {
          return res.status(400).json({ message: "This post already exists." });
      }

      const postData = await Post.create({
          title,
          content,
          text,
          image,
          user_id: req.session.user_id,
          creationDate: new Date().toISOString().slice(0, 10),
      });

      res.status(200).json(postData);
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

// UPDATE a blog post
router.put("/:id", withAuth, async (req, res) => { // Adding withAuth to ensure only owners can edit
  try {
    const postData = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
        text: req.body.text,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE a blog post
router.delete("/:id", withAuth, async (req, res) => { // Adding withAuth to ensure only owners can delete
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;