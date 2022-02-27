exports.getPosts = (req, res, next) => {
  res
    .status(200)
    .json({ posts: [{ title: 'post 1', content: 'the first post' }] });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  
  // create post in DB
  res.status(201).json({
    message: 'post created',
    post: { id: 1234, title: title, content: content },
  });
};
