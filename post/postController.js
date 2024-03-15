// postController.js

const Post = require('./postModel');

exports.createPost = (req, res) => {
    const { title, content, author } = req.body;
    const newPost = new Post(title, content, author);

    newPost.save()
        .then(() => {
            res.status(201).json({ message: 'Post created successfully' });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

exports.getAllPosts = (req, res) => {
    Post.getAll()
        .then(snapshot => {
            const posts = snapshot.val();
            res.json(posts);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

exports.getPostById = (req, res) => {
    const postId = req.params.id;

    Post.getById(postId)
        .then(snapshot => {
            const post = snapshot.val();
            if (post) {
                res.json(post);
            } else {
                res.status(404).json({ message: 'Post not found' });
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

exports.updatePost = (req, res) => {
    const postId = req.params.id;
    const { title, content } = req.body;

    const updatedPost = new Post(title, content);

    updatedPost.update(postId)
        .then(() => {
            res.json({ message: 'Post updated successfully' });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

exports.deletePost = (req, res) => {
    const postId = req.params.id;

    Post.delete(postId)
        .then(() => {
            res.json({ message: 'Post deleted successfully' });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};
