const $ = require("jquery");

class PostsService{

    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/posts?userId=";
    }
    getPosts(id){
        return $.get(this.url+id);
    }

}

module.exports = new PostsService();
