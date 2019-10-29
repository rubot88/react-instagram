import React from 'react';

const Palette = props => {
    const { photos } = props;
    return (
        <ul className="palette">
            {photos}
        </ul>
    )
}

export default Palette;