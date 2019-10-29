import React, { Component } from 'react';
import User from './User';
import Palette from './Palette';
import ErrorMessage from './Error';
import Loader from 'react-loader-spinner';
import InstaService from '../services/InstaService';


class Profile extends Component {
    InstaService = new InstaService();
    state = {
        photos: [],
        authorizedUser: {},
        error: false,
        loading: true
    }

    updateData = () => {
        this.InstaService.getAllData()
            .then(this.onLoadData)
            .catch(this.onError);
    }

    onLoadData = (data) => {
        const { posts, authorizedUser } = data,
            photos = posts.map(this._getPhotos);
        this.setState({
            photos,
            authorizedUser,
            error: false,
            loading: false
        })
    }

    _getPhotos = posts => {
        const { src, alt, id } = posts;
        return {
            src,
            alt,
            id
        }
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    componentDidMount() {
        this.updateData();
    }

    renderItems(arr) {
        return arr.map(item => {
            const { src, alt, id } = item;
            return (
                <li key={id}>
                    <img src={src} alt={alt} />
                </li>
            )
        })
    }
    render() {
        const { photos, authorizedUser: { name, altname, photo }, error, loading } = this.state;
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

        const items = this.renderItems(photos);
        return (
            <div className="container profile">
                <User src={photo}
                    alt={altname}
                    name={name} />
                <Palette photos={items} />
            </div>
        )
    }
}
export default Profile;