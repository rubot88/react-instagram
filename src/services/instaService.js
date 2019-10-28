export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3000';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}; received ${res.status}`);
        }
        return await res.json();
    }

    gerAllPosts = async () => {
        const res = await this.getResource('/posts');
        return res;
    }

    getAllPhotos = async () => {
        const res = await this.getResource('/posts/');
        return res.map(this._transformPosts);
    }

    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt,
            id:post.id
        }
    }
}