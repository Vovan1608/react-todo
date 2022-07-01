import React from 'react';

const SearchPannel = () => {
    const tipeSearch = 'Tipe here to search';

    const searchStyle = {
        fontSize: '25px'
    }

    return (
        <input
            style={searchStyle}
            placeholder={tipeSearch}
            disabled
        />
    );
};

export default SearchPannel;
