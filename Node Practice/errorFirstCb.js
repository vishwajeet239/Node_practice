const posts = [
    {post_id : 1, content : 'This is post 1'},
    {post_id : 2, content : 'This is post 2'},
    {post_id : 3, content : 'This is post 1'}

];

const comments = [
    {post_id : 1, comment : 'Very nice'},
    {post_id : 1, comment : 'Too good'},
    {post_id : 2, comment : 'Very bad'}

];

const getPost=(id,callback)=>{
    const post = posts.find(post=>{
        return post.post_id===id; 
    });
    if(post) {
        callback(null,post);
    }
    else {
        callback('no post found',undefined);
    }
};

const getComment=(id,callback)=>{
    const result = comments.filter(comment=>{
        return comment.post_id===id;
    });
    if(result.length>0) {
        callback(null,result);
    }
    else {
        callback('no comment found',undefined);
    }
};

getPost(3,(error,post)=>{
    if(error) {
        console.log(error)
    }
    console.log(post.content);

    getComment(post.post_id,(error,comment)=>{
        if(error) {
            console.log(error);
        }
        console.log(comment);
    })
})