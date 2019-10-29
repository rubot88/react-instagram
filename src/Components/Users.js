import React, { Component } from 'react';
import User from './User';
import InstaService from '../services/InstaService';
import Loader from 'react-loader-spinner';


export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        users: [],
        authorizedUser: {},
        loading: true
    }

    updateUsers() {
        this.InstaService.getAllData()
            .then(this.onLoadData)
            .catch(this.onError);

    }
    onLoadData = (data) => {

        const { posts, authorizedUser } = data,
            users = posts.map(this._getUsers);
        this.setState({
            users,
            authorizedUser,
            loading: false
        });
    }
    _getUsers = (users) => {
        const { name, altname, photo,id } = users;
        return {
            name,
            altname,
            photo,
            id
        }
    }
    onError = (e) => {
        this.setState({
            loading: false
        });
        console.log('Error:', e.message);

    }

    componentDidMount() {
        this.updateUsers();

    }
    renderUsers = users => {
        return users.map(user => {
            const { photo, altname, name, id } = user;
            return (
                <li key={id}>
                    <User src={photo}
                        alt={altname}
                        name={name}
                        min
                    />
                </li>
            )
        })
    }
    render() {
        const { users, authorizedUser: { name, altname, photo }, loading } = this.state;
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
        const userList = this.renderUsers(users);
        return (
            <div className="right">
                <User src={photo}
                    alt={altname}
                    name={name} />
                <ul className="users__block">
                    {userList}
                </ul>
            </div>
        );
    }
}

