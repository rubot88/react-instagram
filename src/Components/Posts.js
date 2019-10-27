import React, { Component } from 'react';
import InstaService from '../services/InstaService';
import Post from './Post';
import ErrorMessage from './Error';

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
    }

    onError = (err) => {
        this.setState({
            error: true
        });
        console.log(err);
        
    }

    renderItems(arr) {
            return arr.map(item => {
            const { name, altname, src, photo, alt, descr, id } = item;

            return (
                <li key={id}>
                    <Post name={name}
                        altname={altname}
                        src={src} photo={photo}
                        alt={alt}
                        descr={descr} />
                </li>
            );
        });
    }
    render() {
        const { error, posts } = this.state;
        if (error) {
            return <ErrorMessage />
        }
        const items = this.renderItems(posts);
        return (
            <ul className="left">
                {items}
            </ul>
        );
    }
}