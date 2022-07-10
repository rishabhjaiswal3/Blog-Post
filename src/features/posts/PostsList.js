// import { useSelector } from "react-redux";
import { useSelector } from "react-redux";
import React from 'react'
import { selectAllPosts } from "./postsSlice";
import PostAuthor from './PostAuthor'
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
    
    const posts = useSelector(selectAllPosts)
    // const posts =  useSelector(state => state.posts)

    const orderPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
    const renderedPosts = orderPosts.map((post,index) => (
        <article key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="postCredit"> 
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
             </p> 
             <ReactionButtons post={post} />
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
export default PostsList