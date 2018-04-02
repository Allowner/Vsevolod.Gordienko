
var user = null;
var photoPosts = [
    {
        id: '1',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Seva',
        photoLink: "images/first.jpeg",
        hashtags: ['#first', '#second'],
        likes: ['aut1', 'aut2']
    },
    {
        id: '2',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-03-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: "images/second.jpg",
        hashtags: ['#third', '#second'],
        likes: ['aut3', 'aut1']
    },
    {
        id: '3',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2017-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: "images/third.jpg",
        hashtags: ['#first', '#second'],
        likes: ['aut1', 'aut2']
    },
    {
        id: '4',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2017-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: "images/fourth.jpg",
        hashtags: ['#first', '#second'],
        likes: ['aut1', 'aut2']
    },
    {
        id: '5',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2017-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: "images/fifth.jpeg",
        hashtags: ['#first', '#second'],
        likes: ['aut1', 'aut2']
    },
    {
        id: '6',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:40:00'),
        author: 'Иванов Иван',
        photoLink: "images/six.jpg",
        hashtags: ['#first', '#second'],
        likes: ['aut1', 'aut2']
    },
    {
        id: '7',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2016-02-23T23:00:00'),
        author: 'Петров Иван',
        photoLink: "images/seventh.jpg",
        hashtags: ['#first', '#second'],
        likes: ['ooop', 'aut2']
    },
    {
        id: '8',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: "images/eights.jpg",
        hashtags: ['#first', '#second'],
        likes: ['aut1', 'seva']
    },
    {
        id: '9',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: "images/nineth.jpg",
        hashtags: ['#first', '#second'],
        likes: ['aut1', 'at2']
    },
    {
        id: '10',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов',
        photoLink: "images/tenth.jpg",
        hashtags: ['#first', '#second'],
        likes: ['aut1', 'aut2']
    }
];
var firstModule = (function () {
    function getPhotoPost(id) {
        for (var i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id == id)
                return photoPosts[i];
        }
    }
    function compareDate(a, b) {
        return b.createdAt - a.createdAt;
    }
    function getPhotoPosts(skip = 0, top = 10, filterConfig) {
        photoPosts.sort(compareDate);
        var positiveArr = photoPosts;
        if (filterConfig) {
            if (filterConfig.author) {
                positiveArr = positiveArr.filter(function (param) {
                    if (param.author == filterConfig.author)
                        return param;
                });
            }
            if (filterConfig.createdAt) {
                positiveArr = positiveArr.filter(function (param) {
                    if (param.createdAt.toString() == new Date(filterConfig.createdAt).toString())
                        return param
                });
            }
            if (filterConfig.hashtags) {
                for (var i = 0; i < filterConfig.hashtags.length; i++) {
                    positiveArr = positiveArr.filter(function (param) {
                        if (param.hashtags.indexOf(filterConfig.hashtags[i]) != -1)
                            return param
                    });
                }
            }
        }
        return positiveArr.slice(skip, top);
    }
    function addPhotoPost(photoPost) {
        if (validatePhotoPost(photoPost)) {
            photoPosts.push(photoPost);
            return true;
        }
        return false;
    }
    function removePhotoPost(id) {
        for (var i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id == id) {
                photoPosts.splice(i, 1);
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
                for (var i = 0; i < photoPosts.length; i++)
                    if (photoPosts[i].id == photoPost.id)
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

var secondModule = (function () {
    var photoArea = document.getElementsByClassName("photo_area")[0];

    function insertToDOM(element, prevElement = null) {    //второй параметр - метка, если -1, то по порядку или номер поста перед каким insert
        let photo = document.createElement('div');
        photo.className = "photo";
        photo.id = element.id;
        if (prevElement == null)
            photoArea.appendChild(photo);
        else
            photoArea.insertBefore(photo, prevElement);

        var img = new Image();
        img.src = element.photoLink;
        img.className = "photo_parameters";
        photo.appendChild(img);

        let text = document.createElement('div');
        text.className = "text_photo";
        photo.appendChild(text);

        let text_header = document.createElement('div');
        text_header.className = "text_header";
        text.appendChild(text_header);

        let login = document.createElement('h3');
        login.className = "photo_login";
        login.innerHTML = element.author;
        text_header.appendChild(login);

        var del_button = document.createElement('button');
        del_button.className = "delete_button_parameters";
        text_header.appendChild(del_button);

        let date = document.createElement('h4');
        date.className = "date";
        var d = new Date(element.createdAt);
        date.innerText = d.getDay() + '/' + d.getMonth() + '/' + d.getFullYear()
            + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        text_header.appendChild(date);

        let main_textbox = document.createElement('div');
        main_textbox.className = "main_text";
        text.appendChild(main_textbox);

        let main_text_div = document.createElement('div');
        main_text_div.className = "main_text_div";
        main_textbox.appendChild(main_text_div);

        let main_text = document.createElement('h3');
        main_text.className = "main_text";
        main_text.innerText = element.descriprion;
        main_text_div.appendChild(main_text);

        let hash_icon_div = document.createElement('div');
        hash_icon_div.className = "hash_icon_div";
        main_textbox.appendChild(hash_icon_div);

        for (var j = 0; j < element.hashtags.length; ++j) {
            let hash = document.createElement('label');
            hash.className = "hash";
            hash.innerText = element.hashtags[j];
            hash_icon_div.appendChild(hash);
        }

        var like_button = document.createElement('button');
        like_button.className = "like_button_parameters";
        hash_icon_div.appendChild(like_button);

        var edit_button = document.createElement('button');
        edit_button.className = "edit_button_parameters";
        hash_icon_div.appendChild(edit_button);
    }
    function showPhotoPosts(array) {
        for (var i = 0; i < array.length; ++i) {
            insertToDOM(array[i])
        }
    }

    function firstPhotoPosts() {
        showPhotoPosts(firstModule.getPhotoPosts());
    }

    function addPhotoPostToDOM(photoP) {
        if (firstModule.addPhotoPost(photoP)) {
            for (var i = 0; i < photoPosts.length; ++i) {
                if (firstModule.compareDate(photoPosts[i], photoP) >= 0) {
                    var photo = document.getElementById(photoPosts[i].id);
                    insertToDOM(photoP, photo);
                    break;
                }
            }
            return true;
        }
        else
            return false;
    }

    function deletePhotoPostFromDOM(id) {
        if (firstModule.removePhotoPost(id)) {
            var photo = document.getElementById(id);
            if (photo != null)
                photoArea.removeChild(photo);
            return true;
        }
        else
            return false;

    }

    function editPhotoPostInDOM(id, photoPost) {
        if (firstModule.editPhotoPost(id, photoPost)) {
            var photo = firstModule.getPhotoPost(id);
            deletePhotoPostFromDOM(id);
            addPhotoPostToDOM(photo);
        }
        else {
            return false;
        }
    }

    function newUser(login) {
        user = login;
        turnOnElements();
    }

    function turnOfElements() {
        document.getElementsByClassName('login_label')[0].innerText = "";
        document.getElementsByClassName('login_button')[0].innerText = "Log in";
        var elem = document.getElementsByClassName('create_button')[0];
        elem.classList.add("undisplayable");
        var arr = document.getElementsByClassName('delete_button_parameters');
        for (var i = 0; i < arr.length; ++i)
            arr[i].classList.add("undisplayable");
        arr = document.getElementsByClassName('edit_button_parameters');
        for (var i = 0; i < arr.length; ++i)
            arr[i].classList.add("undisplayable");
    }

    function turnOnElements() {
        document.getElementsByClassName('login_label')[0].innerText = user;
        document.getElementsByClassName('login_button')[0].innerText = "Log out";
        var elem = document.getElementsByClassName('create_button')[0];
        elem.classList.remove("undisplayable");
        var arr = document.getElementsByClassName('delete_button_parameters');
        for (var i = 0; i < arr.length; ++i)
            arr[i].classList.remove("undisplayable");
        arr = document.getElementsByClassName('edit_button_parameters');
        for (var i = 0; i < arr.length; ++i)
            arr[i].classList.remove("undisplayable");
    }

    function leave() {
        user = null;
        turnOfElements();
    }

    return {
        leave: leave,
        newUser: newUser,
        editPhotoPostInDOM: editPhotoPostInDOM,
        deletePhotoPostFromDOM: deletePhotoPostFromDOM,
        addPhotoPostToDOM: addPhotoPostToDOM,
        firstPhotoPosts: firstPhotoPosts,
        showPhotoPosts: showPhotoPosts
    }
})();

function onLoad() {
    secondModule.firstPhotoPosts();
    secondModule.leave();
    document.getElementsByClassName('register')[0].classList.add("undisplayable");
    document.getElementsByClassName('error')[0].classList.add("undisplayable");
}