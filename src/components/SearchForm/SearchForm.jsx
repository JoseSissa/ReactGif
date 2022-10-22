import React, { useState } from 'react';

function SearchForm({ setLocation }) {

    const [keyword, setKeyword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setLocation(`/search/${keyword}`);
      };

    const handleChange = event => {
        setKeyword(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="input-search">
          <input className='input-search__box' type="text" defaultValue={keyword} onChange={handleChange} placeholder="Search a Gifs here ..." />
          <button className='input-search__button' type="submit">Search</button>
        </form>
    )
};

export { SearchForm };