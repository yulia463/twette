import React from 'react';
import './App.css';
import AppHeader from "../app-header/AppHeader";
import SearchPandel from "../search-panel/SearchPanel";
import PostStatusFilter from "../post-status-filter/PostStatusFilter";
import PostList from "../post-list/PostList";
import PostAddForm from "../post-add-form/PostAddForm";

export type PostType = {
    label: string,
    important: boolean
}

function App() {
    const data:Array<PostType> = [
        {
            label: 'Going to learn React',
            important: true
        },
        {
            label: 'That is so good',
            important: false
        },
        {
            label: 'I need a break...',
            important: false
        }
    ]
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel">
                <SearchPandel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    );
}

export default App;
