import React from "react";
import {TrashIcon} from "../../icons/TrashIcon";
import HeartIcon from "../../icons/HeartIcon";
import StartIcon from "../../icons/StartIcon";
import './post-list-item.css'

export type PostListItemPropsType = {
    label: string,
    important: boolean
}
const PostListItem = (props: PostListItemPropsType) => {
    let classNames = 'app-list-item d-flex justify-content-between'
    if (props.important) {
        classNames += ' important'
    }
    return (
        <div className={classNames}>
            <span className="app-list-item-label">
            {props.label}
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
        </div>
    )
}
export default PostListItem;