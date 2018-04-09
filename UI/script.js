var user = null;
var current_size_of_DOM = 10;
var max_size_of_DOM = 10;
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
        hashtags: ['#first', '#second'],
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
        hashtags: ['#first', '#second'],
        likes: ['aut1', 'at2']
    },
    {
        id: '10',
        descriprion: '10Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
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

    function dateString(date){
        var str;
        if(date.getDay() < 10)
            str = "0" + date.getDay();
        else
            str = date.getDay();
        str += '/';
        if(date.getMonth() < 10)
            str += '0';
        str += date.getMonth() + '/';
        str += date.getFullYear() + ' ';
        if(date.getHours() < 10)
            str += '0';
        str += date.getHours() + ':';
        if(date.getMinutes() < 10)
            str += '0';
        str += date.getMinutes() + ':';
        if(date.getSeconds() < 10)
            str += '0';
        str += date.getSeconds();
        return str;
    }

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
    }

    function firstPhotoPosts() {
        showPhotoPosts(firstModule.getPhotoPosts());
    }

    function addPhotoPostToDOM(photoP) {
        var changed = false;
        var photoDOM = firstModule.getPhotoPosts(0, current_size_of_DOM);
        if (firstModule.addPhotoPost(photoP)) {
            for (var i = 0; i < current_size_of_DOM; ++i) {
                if (firstModule.compareDate(photoDOM[i], photoP) >= 0) {
                    changed = true;
                    var photo = document.getElementById(photoDOM[i].id);
                    insertToDOM(photoP, photo);
                    current_size_of_DOM += 1;
                    break;
                }
            }
            if(changed == false && current_size_of_DOM < max_size_of_DOM){
                insertToDOM(photoP);
                current_size_of_DOM += 1;
            }
            if(changed == true && max_size_of_DOM == current_size_of_DOM - 1){
                current_size_of_DOM -= 1;
                var del_photo = document.getElementById(photoDOM[current_size_of_DOM - 1].id);
                photoArea.removeChild(del_photo);
            }
            if(user == null)
                turnOfElements();
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
            current_size_of_DOM -= 1;
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

function authorize(){
    document.getElementsByClassName('register')[0].classList.remove("undisplayable");
}

function showError(text){
    var form = document.getElementsByClassName('error')[0].classList.remove("undisplayable");
    document.getElementsByClassName('error_main_text')[0].innerText = text;
}

function deleteButtonClick(event){
    var phP = event.target.parentNode.parentNode.parentNode;
    secondModule.deletePhotoPostFromDOM(phP.id);
}

function errorClick(event){
    document.getElementsByClassName('error')[0].classList.add("undisplayable");
}



function createClick(){
    document.getElementsByClassName('adding')[0].classList.remove("undisplayable");
    var dat = new Date();
    document.getElementsByClassName('log_date')[0].innerText = user + "      " + secondModule.dateString(dat);
}

function editClick(){
    document.getElementsByClassName('adding')[0].classList.remove("undisplayable");
}

function authorizeClick(){
    if(user != null)
        secondModule.leave();
    else{
        var text_area_1 = document.getElementById('enter_login').value;
        var text_area_2 = document.getElementById('enter_password').value;
        var authorized = false;
        for(var i = 0; i < login_password.length; i++){
            if(login_password[i].login == text_area_1 && login_password[i].password == text_area_2){
                authorized = true;
                break;
            }
        }
        if(!authorized)
            showError("Invalid login or password")
        else{
            document.getElementsByClassName('register')[0].classList.add("undisplayable");
            secondModule.newUser(text_area_1);
        }  
    } 
}

function downloadButtonClick(){
    var array = firstModule.getPhotoPosts(current_size_of_DOM, current_size_of_DOM + 10);
    secondModule.showPhotoPosts(array);
    current_size_of_DOM += array.length;
    max_size_of_DOM += 10;
}

var delete_buttons = document.getElementsByClassName("delete_button_parameters");
var edit_buttons = document.getElementsByClassName("edit_button_parameters");
var authorize_button = document.getElementsByClassName("login_button")[0];
var download_button = document.getElementsByClassName("add_button")[0];
var register_button = document.getElementsByClassName("go_button")[0];
var error_button = document.getElementsByClassName("error_butt")[0];
var add_button = document.getElementsByClassName("create_button")[0];

function onLoad() {
    secondModule.firstPhotoPosts();
    secondModule.leave();
    document.getElementsByClassName('register')[0].classList.add("undisplayable");
    document.getElementsByClassName('error')[0].classList.add("undisplayable");
    document.getElementsByClassName('adding')[0].classList.add("undisplayable");
    for(var i = 0; i < delete_buttons.length; i++){
        delete_buttons[i].addEventListener('click', deleteButtonClick);
        edit_buttons[i].addEventListener('click', editClick)
    }
    authorize_button.addEventListener("click", authorize);
    download_button.addEventListener("click", downloadButtonClick);
    register_button.addEventListener("click", authorizeClick);
    error_button.addEventListener("click", errorClick);
    add_button.addEventListener("click", createClick)
}

