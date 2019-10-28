import React, { Component } from 'react';
import InstaService from '../services/InstaService';
import Post from './Post';
import ErrorMessage from './Error';
import Loader from 'react-loader-spinner'

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false,
        loading: true
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
            error: false,
            loading: false
        });
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false

        });
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
        const { error, posts, loading } = this.state;
        if (loading) {
            return (
                <div className="loader">
                    <Loader
                        type="TailSpin"
                        color="#00BFFF"
                        height={80}
                        width={80} />
                </div>
            )
        }
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