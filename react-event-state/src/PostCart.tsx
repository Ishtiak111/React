import './userCart.css'
export default function PostCart({post}){
    return(
        <div className='postCart'>
            <h2>User ID: {post.userId}</h2>
            <h2>ID: {post.id}</h2>
            <h3>Title: {post.title}</h3>
            <p>Details: {post.body}</p>
        </div>
    )
}