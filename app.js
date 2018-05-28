const express = require('express');
const app = express();
var posts = require('./server/data/posts.js');
app.use('/static', express.static('public'));
var bodyParser = require('body-parser'); 
app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, function () {
    console.log("app is listening to port 3000");
});

app.get('/getPhotoPost', (req, res) => {
    console.log("dd");
    extractedPost = firstModule.getPhotoPost(req.query.id);
    extractedPost ? res.send(extractedPost) : res.status(404).end();
})

app.post('/addPhotoPost', (req, res) => {
    posts.push(req.body);
    res.status(200).end();
})

app.post('/getPhotoPosts', (req, res) => {
    res.send(firstModule.getPhotoPosts(req.query.skip, req.query.top, req.body));
    res.status(200).end();
})

app.put('/editPhotoPost', (req, res) => {
    var removeId = req.query.id;
    console.log(req.body);
    if(firstModule.editPhotoPost(removeId, req.body)){
        res.send(posts);
        res.status(200).end();
    }
    else
        res.status(404).end();
})

app.delete('/removePhotoPost', (req, res) => {
    var removeId = req.query.id;
    if(firstModule.removePhotoPost(removeId)){
        res.send(posts);
        res.status(200).end();
    }
    else
        res.status(404).end();
})

var firstModule = (function () {
    function getPhotoPost(id) {
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].id == id)
                return posts[i];
        }
    }
    function compareDate(a, b) {
        return b.createdAt - a.createdAt;
    }
    function getPhotoPosts(skip = 0, top = 10, filterConfig) {
        posts.sort(function(obj1, obj2) {
            return Date.parse(obj2.createdAt)-Date.parse(obj1.createdAt);
        });
        var positiveArr = posts;
        if (filterConfig) {
            if (filterConfig.author) {
                positiveArr = positiveArr.filter(function (param) {
                    if (param.author == filterConfig.author)
                        return param;
                });
            }
            if (filterConfig.createdAt) {
                positiveArr = positiveArr.filter(function (param) {
                    if (new Date(param.createdAt).valueOf() >= new Date(filterConfig.createdAt).valueOf())
                        return param;
                });
            }
            if (filterConfig.hashtags) {
                for (var i = 0; i < filterConfig.hashtags.length; i++) {
                    positiveArr = positiveArr.filter(function (param) {
                        if (param.hashtags.indexOf(filterConfig.hashtags[i]) != -1)
                            return param;
                    });
                }
            }
        }
        return positiveArr.slice(skip, top);
    }
    function addPhotoPost(photoPost) {
        if (validatePhotoPost(photoPost)) {
            posts.push(photoPost);
            return true;
        }
        return false;
    }
    function removePhotoPost(id) {
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].id == id) {
                posts.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    function validatePhotoPost(photoPost, isNew = true) {
        if (!photoPost.id)
            return false;
        else {
            if (typeof (photoPost.id) != "string" || photoPost.id < 0)
                return false;
            if (isNew == true) {
                for (var i = 0; i < posts.length; i++)
                    if (posts[i].id == photoPost.id)
                        return false;
            }
        }
        if (!photoPost.createdAt) {
            return false;
        }
        if (!photoPost.photoLink)
            return false;
        else {
            if (typeof (photoPost.photoLink) != "string" || photoPost.photoLink.length == 0)
                return false;
        }
        if (!photoPost.author || typeof (photoPost.author) != "string" || photoPost.author.length == 0)
            return false;
        if (!photoPost.descriprion || typeof (photoPost.descriprion) != "string" || photoPost.descriprion.length > 199)
            return false;
        if (!photoPost.hashtags || !(photoPost.hashtags instanceof Array) || photoPost.hashtags.length > 20)
            return false;
        for (var i = 0; i < photoPost.hashtags.length; i++) {
            if (typeof (photoPost.hashtags[i]) != "string")
                return false;
        }
        if (!photoPost.likes || !(photoPost.likes instanceof Array))
            return false;
        for (var i = 0; i < photoPost.likes.length; i++) {
            if (typeof (photoPost.likes[i]) != "string")
                return false;
        }
        return true;
    }
    function editPhotoPost(id, photoPost) { //верно;
        var post = getPhotoPost(id);
        var temp = post;
        if (photoPost.descriprion) {
            post.descriprion = photoPost.descriprion;
        }
        if (photoPost.photoLink) {
            post.photoLink = photoPost.photoLink;
        }
        if (photoPost.hashtags) {
            post.hashtags = photoPost.hashtags;
        }
        if (photoPost.likes) {
            post.likes = photoPost.likes;
        }
        if (!validatePhotoPost(post, false)) {
            post = temp;
            return false;
        }
        else {
            removePhotoPost(id);
            addPhotoPost(post);
            return true;
        }
    }

    return {
        getPhotoPosts: getPhotoPosts,
        getPhotoPost: getPhotoPost,
        compareDate: compareDate,
        addPhotoPost: addPhotoPost,
        removePhotoPost: removePhotoPost,
        editPhotoPost: editPhotoPost
    }
})();
