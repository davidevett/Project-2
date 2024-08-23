const router = require("express").Router();
const { Post, User } = require("../../models");

// CREATE new blog post
router.post("/", async (req, res) => {
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
router.post("/save", async (req, res) => {
  try {
    const { title, content, text, image } = req.body;

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
router.put("/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
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