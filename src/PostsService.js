class PostsService{

    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/posts?userId=";
    }
    getPosts(id){
        return $.get(this.url+id);
    }

}

const postsService = new PostsService();
