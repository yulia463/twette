import React from "react";
import PostListItem from "../post-list-item/post-list-item";
import './post-list.css'
import {PostType} from "../app/App";
export type PostListPropsType={
    posts:Array<PostType>

}
const PostList = (props:PostListPropsType) => {
    return (
        <ul className="app-list list-group">
            <PostListItem  important={props.posts[0].important} label={props.posts[0].label}/>
            <PostListItem important={false} label='That is so good'/>
            <PostListItem important={false} label='I need a break...'/>
        </ul>
    )
};
export default PostList;