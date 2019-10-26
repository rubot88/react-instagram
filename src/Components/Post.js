import React, { Component } from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User src="https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg"
                    alt="Man"
                    name="John"
                    min />
                <img src={this.props.src} alt={this.props.alt} />
                <div className="post__name">
                    some account
                </div>
                <div className="posts_descr">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam similique at ad blanditiis labore, ipsa repudiandae officia, perferendis, rem nam provident architecto recusandae cum! Animi illo fugit porro deleniti id!Quae laboriosam quia totam temporibus deserunt magni dolore asperiores explicabo aut quibusdam dignissimos, nam placeat delectus voluptate ea, rem soluta dolor praesentium commodi earum tempore, laborum quasi ab non? Nulla.
                </div>
            </div>
        );
    }
}