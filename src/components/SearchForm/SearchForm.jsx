import React, { useState } from 'react';
import './SearchForm.css';

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
        <form onSubmit={handleSubmit} className="form-search">
          <input className='form-search__box' type="text" defaultValue={keyword} onChange={handleChange} placeholder="Search a Gifs here ..." />
          <button className='form-search__button' type="submit"><img src="/public/images/search.svg" alt="search" /></button>
        </form>
    )
};

export { SearchForm };