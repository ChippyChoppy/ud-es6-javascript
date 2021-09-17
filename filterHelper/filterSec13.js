/** 
 * Choosing when to use Filter
 * 
 * given a particular post, how to return all comments associated with that post?
 */

const post = { id: 4, title: 'cool title' };
const comments = [
    {postId: 4, content: 'awesome post' },
    {postId: 3, content: 'it was aight'},
    {postId: 4, content: 'sweeet!'}
];

function commentsForPost(post, comments) {
    return comments.filter(function(comment) {
        return comment.postId === post.id;
    })
}

console.log(commentsForPost(post, comments));

/**
 * Working w/ relational data is how we do it
 * 
 * filtering product data --> canonical example of filter helper
 */