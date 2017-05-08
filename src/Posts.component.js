class PostsComponent {
    constructor(posts){
        this.posts = posts;
    }

    renderPosts(){
        let postsSTR = this.posts
                .map( post => `
                    <dt>${post.title}</dt>
                    <dd>${post.body}</dd>
                `);
        return postsSTR.join("");
    }

    render(){
        return $(`
        <article>
            <dl>
                ${this.renderPosts()}
            </dl>
        </article>
        `)
    }
}


