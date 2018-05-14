var user = null;
var current_size_of_DOM = 10;
var max_size_of_DOM = 10;
var previous_id = 10;
var login_password = [
    {
        login: 'Seva',
        password: '1111'
    },
    {
        login: 'Иванов Иван',
        password: '0000'
    }
];
var photoPosts = [
    {
        id: '1',
        descriprion: '1Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2009-02-23T23:00:00'),
        author: 'Seva',
        photoLink: "images/first.jpeg",
        hashtags: ['#first', '#second'],
        likes: ['aut1', 'aut2']
    },
    {
        id: '2',
        descriprion: '2Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2010-03-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: "images/second.jpg",
        hashtags: ['#third', '#second'],
        likes: ['aut3', 'aut1']
    },
    {
        id: '3',
        descriprion: '3Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2011-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: "images/third.jpg",
        hashtags: ['#first', '#second'],
        likes: ['aut1', 'aut2']
    },
    {
        id: '4',
        descriprion: '4Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2012-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: "images/fourth.jpg",
        hashtags: ['#first', '#second'],
        likes: ['aut1', 'aut2']
    },
    {
        id: '5',
        descriprion: '5Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2013-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: "images/fifth.jpeg",
        hashtags: ['#first', '#second'],
        likes: ['aut1', 'aut2']
    },
    {
        id: '6',
        descriprion: '6Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2014-02-23T23:40:00'),
        author: 'Иванов Иван',
        photoLink: "images/six.jpg",
        hashtags: ['#first', '#sec'],
        likes: ['aut1', 'aut2']
    },
    {
        id: '7',
        descriprion: '7Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2015-02-23T23:00:00'),
        author: 'Петров Иван',
        photoLink: "images/seventh.jpg",
        hashtags: ['#first', '#second'],
        likes: ['ooop', 'aut2']
    },
    {
        id: '8',
        descriprion: '8Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2017-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: "images/eights.jpg",
        hashtags: ['#first', '#second'],
        likes: ['aut1', 'seva']
    },
    {
        id: '9',
        descriprion: '9Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2016-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: "images/nineth.jpg",
        hashtags: ['#first', '#third'],
        likes: ['aut1', 'at2']
    },
    {
        id: '10',
        descriprion: '10Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов',
        photoLink: "images/tenth.jpg",
        hashtags: ['#first'],
        likes: ['aut1', 'aut2']
    }
];

var prevLog = localStorage.getItem("login");
if(prevLog != null){
    user = prevLog;
}

var photoPostsString2 = localStorage.getItem("photoPosts");
var photoPosts2 = JSON.parse(photoPostsString2);

var photoPostsString = JSON.stringify(photoPosts);
if(localStorage.getItem("photoPosts") == null){
    localStorage.setItem("photoPosts", photoPostsString);
}

var firstModule = (function () {
    function getPhotoPost(id) {
        var photoPostsString2 = localStorage.getItem("photoPosts");
        var photoPosts2 = JSON.parse(photoPostsString2);
        for (var i = 0; i < photoPosts2.length; i++) {
            if (photoPosts2[i].id == id)
                return photoPosts2[i];
        }
    }
    function compareDate(a, b) {
        return b.createdAt - a.createdAt;
    }
    function getPhotoPosts(skip = 0, top = 10, filterConfig) {
        var photoPostsString2 = localStorage.getItem("photoPosts");
        var photoPosts2 = JSON.parse(photoPostsString2);
        photoPosts2.sort(function(obj1, obj2) {
            return Date.parse(obj2.createdAt)-Date.parse(obj1.createdAt);
        });
        var positiveArr = photoPosts2;
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
            var photoPostsString2 = localStorage.getItem("photoPosts");
            var photoPosts2 = JSON.parse(photoPostsString2);
            photoPosts2.push(photoPost);
            photoPostsString = JSON.stringify(photoPosts2);
            localStorage.setItem("photoPosts", photoPostsString);
            return true;
        }
        return false;
    }
    function removePhotoPost(id) {
        var photoPostsString2 = localStorage.getItem("photoPosts");
        var photoPosts2 = JSON.parse(photoPostsString2);
        for (var i = 0; i < photoPosts2.length; i++) {
            if (photoPosts2[i].id == id) {
                photoPosts2.splice(i, 1);
                photoPostsString = JSON.stringify(photoPosts2);
                localStorage.setItem("photoPosts", photoPostsString);
                return true;
            }
        }
        return false;
    }

    function validatePhotoPost(photoPost, isNew = true) {
        var photoPostsString2 = localStorage.getItem("photoPosts");
        var photoPosts2 = JSON.parse(photoPostsString2);
        if (!photoPost.id)
            return false;
        else {
            if (typeof (photoPost.id) != "string" || photoPost.id < 0)
                return false;
            if (isNew == true) {
                for (var i = 0; i < photoPosts2.length; i++)
                    if (photoPosts2[i].id == photoPost.id)
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

var secondModule = (function () {
    var photoArea = document.getElementsByClassName("photo_area")[0];

    function dateString(dat) {
        var str;
        var date = new Date(dat);
        if (date.getDate() < 10)
            str = "0" + date.getDate();
        else
            str = date.getDate();
        str += '/';
        if (date.getMonth() + 1 < 10)
            str += '0';
        str += (date.getMonth() + 1) + '/';
        str += date.getFullYear() + ' ';
        if (date.getHours() < 10)
            str += '0';
        str += date.getHours() + ':';
        if (date.getMinutes() < 10)
            str += '0';
        str += date.getMinutes() + ':';
        if (date.getSeconds()< 10)
            str += '0';
        str += date.getSeconds();
        return str;
    }

    function insertToDOM(element, prevElement = null) {
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
        date.innerText = dateString(d);
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
        current_size_of_DOM = array.length;
    }

    function firstPhotoPosts() {
        showPhotoPosts(firstModule.getPhotoPosts());
    }

    function addPhotoPostToDOM(photoP) {
        var changed = false;
        var photoDOM = firstModule.getPhotoPosts(0, current_size_of_DOM);
        if (firstModule.addPhotoPost(photoP)) {
            for (var i = 0; i < current_size_of_DOM; ++i) {
                if (new Date(photoP.createdAt).valueOf() >= new Date(photoDOM[i].createdAt).valueOf()) {
                    changed = true;
                    var photo = document.getElementById(photoDOM[i].id);
                    insertToDOM(photoP, photo);
                    current_size_of_DOM += 1;
                    break;
                }
            }
            if (changed == false && current_size_of_DOM < max_size_of_DOM) {
                insertToDOM(photoP);
                current_size_of_DOM += 1;
            }
            if (changed == true && max_size_of_DOM == current_size_of_DOM - 1) {
                current_size_of_DOM -= 1;
                var del_photo = document.getElementById(photoDOM[current_size_of_DOM - 1].id);
                photoArea.removeChild(del_photo);
            }
            if (user == null)
                turnOfElements();
            return true;
        }
        else
            return false;
    }

    function fullyDeletePhotoPost(id) {
        if (firstModule.removePhotoPost(id)) {
            deletePhotoPostFromDOM(id);
        }
        else
            return false;
    }

    function deletePhotoPostFromDOM(id) {
        var photo = document.getElementById(id);
        if (photo != null)
            photoArea.removeChild(photo);
        current_size_of_DOM -= 1;
        return true;
    }

    function editPhotoPostInDOM(id, photoPost) {
        if (firstModule.editPhotoPost(id, photoPost)) {
            var photo = firstModule.getPhotoPost(id);
            fullyDeletePhotoPost(id);
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
        var arr2 = document.getElementsByClassName('edit_button_parameters');
        var photoPostsString2 = localStorage.getItem("photoPosts");
        var photoPosts2 = JSON.parse(photoPostsString2);
        for (var i = 0; i < arr.length; ++i){
            var photoPostId = arr[i].parentNode.parentNode.parentNode.id;
            for (var j = 0; j < photoPosts2.length; ++j){
                if(photoPosts2[j].id == photoPostId){
                    if(photoPosts2[j].author == user){
                        arr[i].classList.remove("undisplayable");
                        arr2[i].classList.remove("undisplayable");
                        break;
                    }     
                }
            }
        }  
    }

    function leave() {
        user = null;
        localStorage.removeItem("login")
        turnOfElements();
    }

    return {
        leave: leave,
        newUser: newUser,
        turnOfElements: turnOfElements,
        turnOnElements: turnOnElements,
        editPhotoPostInDOM: editPhotoPostInDOM,
        fullyDeletePhotoPost: fullyDeletePhotoPost,
        deletePhotoPostFromDOM: deletePhotoPostFromDOM,
        addPhotoPostToDOM: addPhotoPostToDOM,
        firstPhotoPosts: firstPhotoPosts,
        showPhotoPosts: showPhotoPosts,
        dateString: dateString
    }
})();

var filter = {};
var delete_buttons = document.getElementsByClassName("delete_button_parameters");
var edit_buttons = document.getElementsByClassName("edit_button_parameters");
var like_buttons = document.getElementsByClassName("like_button_parameters");
var authorize_button = document.getElementsByClassName("login_button")[0];
var download_button = document.getElementsByClassName("add_button")[0];
var register_button = document.getElementsByClassName("go_button")[0];
var add_hash_button = document.getElementsByClassName("add_hash")[0];
var del_hash_button = document.getElementsByName("rem_hash")[0];
var error_button = document.getElementsByClassName("error_butt")[0];
var add_button = document.getElementsByClassName("create_button")[0];
var check_created = document.getElementsByClassName("go_button2")[0];
var register_form = document.getElementsByClassName('register')[0];
var error_form = document.getElementsByClassName('error')[0];
var adding_form = document.getElementsByClassName('adding')[0];
var adding_text = document.getElementsByClassName('adding_text')[0];
var leave_from_register = document.getElementsByClassName('leave_button')[0];
var leave_from_adding = document.getElementsByClassName('leave_button2')[0];
var find_button = document.getElementsByClassName('find_button')[0];
var author_field = document.getElementsByName('login_field')[0];
var hash_field = document.getElementsByName('hash_field')[0];
var date_field = document.getElementsByName('date_field')[0];

function authorize() {
    if (user == null)
        register_form.classList.remove("undisplayable");
    else
        secondModule.leave();
}

function showError(text) {
    error_form.classList.remove("undisplayable");
    document.getElementsByClassName('error_main_text')[0].innerText = text;
}

function deleteButtonClick(event) {
    var phP = event.target.parentNode.parentNode.parentNode;
    if (firstModule.getPhotoPost(phP.id).author == user)
        secondModule.fullyDeletePhotoPost(phP.id);
    else
        showError("You are not the owner of this photopost");
}

function errorClick(event) {
    error_form.classList.add("undisplayable");
}

var postDate = new Date();
var newPicture = new Image();
var isNewId = "0";

function createClick() {
    adding_form.classList.remove("undisplayable");
    var dat = new Date();
    document.getElementsByClassName('adding_log')[0].innerText = user;
    document.getElementsByClassName('adding_date')[0].innerText = secondModule.dateString(dat);
    postDate = dat;
}

function clearAddingForm(){
    newPicture.src = "";
    adding_text.value = "";
    var hashes = document.getElementsByClassName("hash_style");
    for(var i = 0; i < hashes.length; ++i){
        removeHashClick();
    }
    document.getElementsByName("add_hash_field")[0].value = "";
    document.querySelector("#file_label").style.backgroundImage = "url('images/camera.png')";
}

function createNewPostClick() {
    if (isNewId == '0' && newPicture.src == ""){
        showError("Insert picture");
    }
    else if(adding_text.value == ""){
        showError("Describe your picture");
    }
    else{
        var newPhotoPost = {
            id: (previous_id + 1).toString(),
            descriprion: adding_text.value,
            createdAt: postDate,
            author: user,
            photoLink: newPicture.src,
            hashtags: [],
            likes: []
        };
        var hashtags = [];
        var hashes = document.getElementsByClassName("hash_style");
        for(var i = 0; i < hashes.length; ++i){
            hashtags.push(hashes[i].innerHTML);
        }
        newPhotoPost.hashtags = hashtags;
        if(isNewId == '0'){
            previous_id += 1;
            secondModule.addPhotoPostToDOM(newPhotoPost);
        }
        else{
            newPhotoPost.id = isNewId;
            secondModule.editPhotoPostInDOM(isNewId, newPhotoPost);
            isNewId == '0';
        }
        delete_buttons = document.getElementsByClassName("delete_button_parameters");
        edit_buttons = document.getElementsByClassName("edit_button_parameters");
        like_buttons = document.getElementsByClassName("like_button_parameters");
        delete_buttons[0].addEventListener('click', deleteButtonClick);
        edit_buttons[0].addEventListener('click', editClick);
        like_buttons[0].addEventListener('click', likeClick);
        adding_form.classList.add("undisplayable");
    }
    clearAddingForm();
}

function editClick(event) {
    adding_form.classList.remove("undisplayable");
    var phP = event.target.parentNode.parentNode.parentNode.parentNode;
    var photoPostsString2 = localStorage.getItem("photoPosts");
    var photoPosts2 = JSON.parse(photoPostsString2);
    for (var i = 0; i < photoPosts2.length; i++) {
        if (phP.id == photoPosts2[i].id) {
            document.getElementsByClassName('adding_log')[0].innerText = photoPosts2[i].author;
            document.getElementsByClassName('adding_date')[0].innerText = secondModule.dateString(photoPosts2[i].createdAt);
            var container = document.getElementsByClassName("hash_div")[0];
            for(var j = 0; j < photoPosts2[i].hashtags.length; ++j){
                var labl = document.createElement('label');
                labl.classList.add('hash_style');
                labl.innerText = photoPosts2[i].hashtags[j];
                container.appendChild(labl);
            }
            adding_text.value = photoPosts2[i].descriprion;
            document.querySelector("#file_label").style.backgroundImage = "url(" + photoPosts2[i].photoLink + ")";
            isNewId = photoPosts2[i].id;
        }
    }
}

function authorizeClick() {
    var text_area_1 = document.getElementById('enter_login').value;
    var text_area_2 = document.getElementById('enter_password').value;
    var authorized = false;
    for (var i = 0; i < login_password.length; i++) {
        if (login_password[i].login == text_area_1 && login_password[i].password == text_area_2) {
            authorized = true;
            break;
        }
    }
    if (!authorized)
        showError("Invalid login or password")
    else {
        register_form.classList.add("undisplayable");
        secondModule.newUser(text_area_1);
        localStorage.setItem("login", text_area_1);
        document.getElementById('enter_login').value = "";
        document.getElementById('enter_password').value = "";
    }
}

function downloadButtonClick() {
    var temp = current_size_of_DOM;
    var array = firstModule.getPhotoPosts(current_size_of_DOM, current_size_of_DOM + 10, filter);
    secondModule.showPhotoPosts(array);
    current_size_of_DOM += temp + array.length;
    max_size_of_DOM += 10;
}

function addingLeaveClick() {
    adding_form.classList.add("undisplayable");
    clearAddingForm();
}

function registerLeaveClick() {
    document.getElementById('enter_login').value = "";
    document.getElementById('enter_password').value = "";
    register_form.classList.add("undisplayable");
}

function likeClick(event) {
    event.target.classList.toggle("change_like");
}

function addHashClick() {
    var container = document.getElementsByClassName("hash_div")[0];
    var current_hashtag_number = container.childElementCount;
    var hashes = document.getElementsByClassName("hash_style");
    var tBox = document.getElementsByName("add_hash_field")[0];
    var canCreate = true;
    if (tBox.value == "") {
        showError("Can't create hashtag without name");
    }
    else if (tBox.value.length > 20) {
        showError("Too long hashtag");
    }
    else if (hashes.length == 6) {
        showError("Too much hashtags");
    }
    else {
        for (var i = 0; i < hashes.length; ++i) {
            if ("#" + tBox.value == hashes[i].innerHTML) {
                canCreate = false;
                showError("Shouldn't be equal hashtags");
                break;
            }
        }
        if (canCreate == true) {
            var labl = document.createElement('label');
            labl.classList.add('hash_style');
            labl.innerText = "#" + tBox.value;
            container.appendChild(labl);
        }
    }
}

function removeHashClick(){
    var container = document.getElementsByClassName("hash_div")[0];
    var hashes = document.getElementsByClassName("hash_style");
    if(hashes.length > 0){
        container.removeChild(hashes[hashes.length - 1]);
    }
}

function findClick() {
    var author = author_field.value;
    var hashtags = hash_field.value;
    var date = date_field.value;
    var filterConfig = {};
    if (author != "")
        filterConfig.author = author;
    if (hashtags != "") {
        hashtags = hashtags.trim();
        var hashes = hashtags.split(" ");
        filterConfig.hashtags = hashes;
    }
    if (date != "") {
        var tokens = date.split("/");
        date = tokens[1] + "/" + tokens[0] + "/" + tokens[2];
        var created = new Date(date);
        if(created == "Invalid Date")
            showError(created);
        filterConfig.createdAt = created;
    }
    var photos = document.getElementsByClassName("photo");
    var len = photos.length;
    for (var i = 0; i < len; i++) {
        var photo = document.getElementsByClassName("photo")[0];
        secondModule.deletePhotoPostFromDOM(photo.id);
    }
    photos = firstModule.getPhotoPosts(0, 10, filterConfig);
    secondModule.showPhotoPosts(photos);
    delete_buttons = document.getElementsByClassName("delete_button_parameters");
    edit_buttons = document.getElementsByClassName("edit_button_parameters");
    like_buttons = document.getElementsByClassName("like_button_parameters");
    for (var i = 0; i < 10; i++) {
        delete_buttons[i].addEventListener('click', deleteButtonClick);
        edit_buttons[i].addEventListener('click', editClick);
        like_buttons[i].addEventListener('click', likeClick);
    }
    current_size_of_DOM = 10
    max_size_of_DOM = current_size_of_DOM
    if (user == null) {
        secondModule.turnOfElements();
    }
    filter = filterConfig;
}

document.querySelector("#file").addEventListener("change", function () {
    if (this.files[0]) {
        var fr = new FileReader();

        fr.addEventListener("load", function () {
            newPicture.src = fr.result;
            document.querySelector("#file_label").style.backgroundImage = "url(" + fr.result + ")";
        }, false);
        fr.readAsDataURL(this.files[0]);
    }
});

function onLoad() {
    secondModule.firstPhotoPosts();
    if(user != null){
        secondModule.newUser(user);
    }
    else
        secondModule.leave();
    register_form.classList.add("undisplayable");
    error_form.classList.add("undisplayable");
    adding_form.classList.add("undisplayable");
    for (var i = 0; i < delete_buttons.length; i++) {
        delete_buttons[i].addEventListener('click', deleteButtonClick);
        edit_buttons[i].addEventListener('click', editClick);
        like_buttons[i].addEventListener('click', likeClick);
    }
    authorize_button.addEventListener("click", authorize);
    download_button.addEventListener("click", downloadButtonClick);
    register_button.addEventListener("click", authorizeClick);
    error_button.addEventListener("click", errorClick);
    add_button.addEventListener("click", createClick);
    leave_from_adding.addEventListener("click", addingLeaveClick);
    leave_from_register.addEventListener("click", registerLeaveClick);
    add_hash_button.addEventListener("click", addHashClick);
    find_button.addEventListener("click", findClick);
    check_created.addEventListener("click", createNewPostClick);
    del_hash_button.addEventListener("click", removeHashClick);
}

