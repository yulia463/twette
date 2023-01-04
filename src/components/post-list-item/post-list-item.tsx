import React from "react";
import {TrashIcon} from "../../icons/TrashIcon";
import HeartIcon from "../../icons/HeartIcon";
import StartIcon from "../../icons/StartIcon";
import './post-list-item.css'

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
             Hello
            </span>
            <div className="d-flex justify-content-center align-item-center">
                <button
                    type="button"
                    className="btn-star btn-sm">
                    <StartIcon/>
                </button>
                <button
                    type="button"
                    className="btn-trash btn-sm">
                    <TrashIcon/>
                </button>
                <HeartIcon/>
            </div>
        </li>
    )
}
export default PostListItem;