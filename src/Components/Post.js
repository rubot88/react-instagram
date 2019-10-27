import React, { Component } from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        const { name, altname, src, photo, alt, descr } = this.props;
        return (
            <div className="post">
                <User src={photo}
                    alt={altname}
                    name={name}
                    min />
                <img src={src} alt={alt} />
                <div className="post__name">
                    {name}
                </div>
                <div className="posts_descr">
                    {descr}
                </div>
            </div>
        );
    }
}