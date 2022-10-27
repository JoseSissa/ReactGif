import React, { useState, useRef } from 'react';
import './SearchForm.css';

function SearchForm({ setLocation }) {

    const [keyword, setKeyword] = useState('');
    const inputSearch = useRef();

    const handleSubmit = e => {
      e.preventDefault();
      inputSearch.current.value = ""
      setLocation(`/search/${keyword}`);
    };
    
    const handleChange = e => {
        setKeyword(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="form-search">
          <input ref={inputSearch} className='form-search__box' type="text" defaultValue={keyword} onChange={handleChange} placeholder="Search a Gif" />
          <button className='form-search__button' type="submit"><img src="/public/images/search-icon.svg" alt="search" /></button>
        </form>
    )
};

export { SearchForm };