import React from 'react';
import './App.css';
import AppHeader from "../app-header/AppHeader";
import SearchPandel from "../search-panel/SearchPanel";
import PostStatusFilter from "../post-status-filter/PostStatusFilter";
import PostList from "../post-list/PostList";
import PostAddForm from "../post-add-form/PostAddForm";

function App() {
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel">
                <SearchPandel/>
                <PostStatusFilter/>
            </div>
            <PostList/>
            <PostAddForm/>
        </div>
    );
}

export default App;
