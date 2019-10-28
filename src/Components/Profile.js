import React from 'react';
import User from './User';
import Palette from './Palette';
const Profile = () => {
    return (
        <div className="container profile">
            <User src="https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg"
                alt="Jessy"
                name="jessy_john" />
            <Palette />

        </div>
    )
}
export default Profile;