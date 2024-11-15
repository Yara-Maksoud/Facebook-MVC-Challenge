const feedModel = require("../model/feed");

const homePage = (req, res) => {
    feedModel.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('home', { data: result, err: '' });
        })
        .catch(err => console.log(err));
};

const addPost = (req, res) => {
    let newPost = new feedModel(req.body);
    newPost.save()
        .then(() => {
            res.redirect('/feed');
        })
        .catch(err => {
            feedModel.find().sort({ createdAt: -1 })
                .then(result => {
                    if (err.name === 'ValidationError') {                     
                        res.render('home', { data: result, err: Object.values(err.errors) });
                    } else {
                        res.render('home', { data: result, err: 'Something went wrong, please try again.' });
                    }
                })
        })
};

const showPost = (req, res) => {
    feedModel.findById(req.params.postId)
        .then(post => {
            res.render('showPost', { post, err: '' })
        })
        .catch(err => console.log(err))
}

const renderEditPost = (req, res) => {
    feedModel.findById(req.params.postId)
        .then(post => {
            res.render('editPost', { post, err: '' })
        })
        .catch(err => console.log(err))
};

const editPost = (req, res) => {
    const postId = req.params.postId;
    feedModel.findByIdAndUpdate(postId, req.body, { runValidators: true, new: true })
        .then(() => res.redirect(`/feed/${postId}`))
        .catch(err => {
            feedModel.findById(postId)
                .then(post => {
                    if (err.name === 'ValidationError') {;
                        res.render('editPost', { post, err: Object.values(err.errors) });
                    } else {
                        res.render('editPost', { post, err: 'Something went wrong, please try again.' });
                    }
                })

        })
};

const deletePost = (req, res) => {
    feedModel.findByIdAndDelete(req.params.postId)
        .then(() => res.redirect('/feed'))
        .catch(err => console.log(err))
}

module.exports = {
    homePage,
    addPost,
    showPost,
    renderEditPost,
    editPost,
    deletePost
};