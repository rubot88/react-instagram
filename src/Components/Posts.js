import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg" alt="man"/>
                <Post src="https://2w6kxc22rrr9mabqt1mglgait6-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/man-shrug-beard-1024x580.jpg" alt="man"/>
                <Post src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwt0Lpn7l593z5PR-KT8J0Ta_fofkU2eF2Esso9ZjNFEjMdSK&s" alt="man"/>
            </div>
        );
    }
}