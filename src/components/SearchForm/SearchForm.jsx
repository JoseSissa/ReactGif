import React, { useState, useRef, useCallback } from 'react';
import './SearchForm.css';

function SearchForm({ setLocation }) {

    const [keyword, setKeyword] = useState('');
    const inputSearchRef = useRef();

    const handleSubmit = e => {
      e.preventDefault();
      inputSearchRef.current.value = ""
      setLocation(`/search/${keyword}`);
    };    
    const handleChange = e => {
        setKeyword(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="form-search">
          <input id='hola' ref={inputSearchRef} className='form-search__box' type="text" defaultValue={keyword} onChange={handleChange} placeholder="Search a Gif" />
          <button className='form-search__button' type="submit"><img src="/images/search.svg" alt="search" /></button>
        </form>
    )
};

export { SearchForm };