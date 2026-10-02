import { use } from "react"
import PostCart from "./PostCart";

export default function Post({postDataPromise}){
    const posts = use(postDataPromise);
    return(
        <div>
            <h2>Posts: {posts.length}</h2>
            {
                posts.map((post) => <PostCart post={post}></PostCart>)
            }
        </div>
    )
}