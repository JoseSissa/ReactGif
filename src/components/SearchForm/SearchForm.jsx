import React, { useState, useRef, useCallback } from 'react';
import './SearchForm.css';

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ setLocation }) {

    const [keyword, setKeyword] = useState('');
    const inputSearchRef = useRef();
    const [rating, setRating] = useState(RATINGS[0]);

    const handleSubmit = e => {
      e.preventDefault();
      // inputSearchRef.current.value = ""
      setLocation(`/search/${keyword}/${rating}`);
    };    
    const handleChange = e => {
        setKeyword(e.target.value);
    };
    const handleRating = e => setRating(e.target.value)

    return (
      <form onSubmit={handleSubmit} className="form-search">
        <input ref={inputSearchRef} className='form-search__box' type="text" defaultValue={keyword} onChange={handleChange} placeholder="Search a Gif" />
        <button className='form-search__button' type="submit"><img src="/images/search.svg" alt="search" /></button>
        <select onChange={handleRating} value={rating}>
          <option disabled>Rating Type</option>
          {RATINGS.map(elem => <option key={elem}>{elem}</option>)}
        </select>
      </form>
    )
};

export { SearchForm };