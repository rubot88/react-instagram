import React, { Component } from 'react';
import InstaService from '../services/InstaService';

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts = () => {
        this.InstaService.gerAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        });
        console.log(this.state.posts);
        
    }

    onError = (err) => {
        this.setState({
            error: true
        })
        console.log(err);
        
    }
    render() {
        return (
            <div className="left">

            </div>
        );
    }
}