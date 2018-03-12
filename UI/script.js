var photoPosts = [
    {
        id: '1',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Seva',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['first', 'second'],
        likes: ['aut1', 'aut2']
     },
    {
        id: '2',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-03-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['third', 'second'],
        likes: ['aut3', 'aut1']
    },
    {
        id: '3',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2017-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['first', 'second'],
        likes: ['aut1', 'aut2']
    },
    {
        id: '4',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2017-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['first', 'second'],
        likes: ['aut1', 'aut2']
    },
    {
        id: '5',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2017-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['first', 'second'],
        likes: ['aut1', 'aut2']
    },
    {
        id: '6',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:40:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['first', 'second'],
        likes: ['aut1', 'aut2']
    },
    {
        id: '7',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2016-02-23T23:00:00'),
        author: 'Петров Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['first', 'second'],
        likes: ['ooop', 'aut2']
    },
    {
        id: '8',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['first', 'second'],
        likes: ['aut1', 'seva']
    },
    {
        id: '9',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['first', 'second'],
        likes: ['aut1', 'at2']
    },
    {
    id: '10',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['first', 'second'],
        likes: ['aut1', 'aut2']
    }
  ];
function getPhotoPost(id){ 
    for(var i = 0; i < photoPosts.length; i++){
        if(photoPosts[i].id == id)
            return photoPosts[i];
    }
}
function compareDate(a, b) {
    return a.createdAt - b.createdAt;
}
function getPhotoPosts(skip = 0, top = 10, filterConfig){ 
    photoPosts.sort(compareDate);
    var positiveArr = photoPosts;
    if(filterConfig){
        if(filterConfig.author){
            positiveArr = positiveArr.filter(function(param) {
                if(param.author == filterConfig.author)
                    return param;});
        }
        if(filterConfig.createdAt) {
            positiveArr = positiveArr.filter(function(param) {
                if(param.createdAt.toString() == new Date(filterConfig.createdAt).toString())
                    return param});  
        }   
        if(filterConfig.hashtags) {
            for (var i = 0; i < filterConfig.hashtags.length; i++){
                positiveArr = positiveArr.filter(function(param) {
                    if(param.hashtags.indexOf(filterConfig.hashtags[i]) != -1)
                        return param});  
            }   
        }   
    }
    return positiveArr.slice(skip, top);
}
function addPhotoPost(photoPost){  
    if(validatePhotoPost(photoPost)){
        photoPosts.push(photoPost);
        return true;
    }
    return false;  
}
function removePhotoPost(id){ 
    for(var i = 0; i < photoPosts.length; i++){
        if(photoPosts[i].id == id){
            photoPosts.splice(i, 1);
            return true;
        }
    }
    return false;
}

function validatePhotoPost(photoPost){
    if(!photoPost.id)
        return false;
    else {
        if(typeof(photoPost.id) != "string" || photoPost.id < 0)
            return false;
        photoPosts.forEach(photoP => {
            if(photoP.id == photoPost.id){
                return false;
            }
        });
    }
    if(!photoPost.createdAt){
        return false;
    }   
    if(!photoPost.photoLink)
        return false;
    else{
        if(typeof(photoPost.photoLink) != "string" || photoPost.photoLink.length == 0)
            return false;
    }
    if(!photoPost.author || typeof(photoPost.author) != "string" || photoPost.author.length == 0)
        return false;
    if(!photoPost.descriprion || typeof(photoPost.descriprion) != "string" || photoPost.descriprion.length > 199)
        return false;
    if(!photoPost.hashtags || !(photoPost.hashtags instanceof Array) || photoPost.hashtags.length > 20)
        return false;
    for(var i = 0; i < photoPost.hashtags.length; i++){
        if(typeof(photoPost.hashtags[i]) != "string")
            return false;
    }
    if(!photoPost.likes || !(photoPost.likes instanceof Array))
        return false;
    for(var i = 0; i < photoPost.likes.length; i++){
        if(typeof(photoPost.likes[i]) != "string")
            return false;
    }
    return true;
}
function editPhotoPost(id, photoPost){ //верно
    var post = getPhotoPost(id);
    var temp = post;
    if(photoPost.descriprion){
        post.descriprion = photoPost.descriprion;
    }
    if(photoPost.photoLink){
        post.photoLink = photoPost.photoLink;
    }
    if(photoPost.hashtags){
        post.hashtags = photoPost.hashtags;
    }
    if(photoPost.likes){
        post.likes = photoPost.likes;
    }
    if(!validatePhotoPost(post)){
        post = temp;
        return false;
    }
    else{
        return true;
    }
}