import { use } from "react"
import UserDetails from "./UserDetails";
import PostDetails from "./PostDetails";

export default function Post({postDataPromise}){
    const post = use(postDataPromise);
    console.log(post);
    return (
        <div>
            <p>Hello {post.length}</p>
            {
                post.map(post => <PostDetails postData = {post}></PostDetails>)
            }
        </div>
    )
}