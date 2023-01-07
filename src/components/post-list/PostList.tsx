import React from "react";
import PostListItem from "../post-list-item/post-list-item";
import './post-list.css'
import {PostType} from "../app/App";

export type PostListPropsType = {
    posts: Array<PostType>

}
const PostList = (props: PostListPropsType) => {
    const elements = props.posts.map((el) => {
        return (
            <li key={el.id} className="list-group-item">
                <PostListItem {...el}/>
            </li>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
};
export default PostList;