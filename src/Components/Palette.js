import React, { Component } from 'react';
import InstaService from '../services/InstaService';
import ErrorMessage from './Error';
import Loader from 'react-loader-spinner'

class Palette extends Component {
    InstaService = new InstaService();
    state = {
        photos: [],
        error: false,
        loading: true
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError);
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            photos,
            error: false,
            loading: false
        });
    }

    componentDidMount() {
        this.updatePhotos();

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
        const { error, photos, loading } = this.state;
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
            <ul className="palette">
                {items}
            </ul>
        )
    }
}

export default Palette;