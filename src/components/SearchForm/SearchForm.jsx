import React, { useRef, useReducer } from 'react';
import useForm from '../../hooks/useForm';
import './SearchForm.css';

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ setLocation }) {

    const inputSearchRef = useRef();

    const {lang, keyword, rating, times, updateKeyword, updateRating, updateLanguage} = useForm({ initialLang: 'en', initialKeyword: '', initialRating: RATINGS[0]})

    const handleSubmit = e => {
      e.preventDefault();
      setLocation(`/search/${keyword}/${rating}/${lang}`);
    };    
    const handleChange = e => updateKeyword(e.target.value)
    const handleRating = e => updateRating(e.target.value)
    const handleLanguage = e => updateLanguage(e.target.value)

    return (

      <form onSubmit={handleSubmit} className="form-search">

        <input ref={inputSearchRef} className='form-search__box' type="text" defaultValue={keyword} onChange={handleChange} placeholder="Search a Gif" />

        <button className='form-search__button' type="submit"><img src="/images/search.svg" alt="search" /></button>{times}

        <select onChange={handleRating} value={rating}>
          <option disabled>Rating Type</option>
          {RATINGS.map(elem => <option key={elem}>{elem}</option>)}
        </select>

        <select onChange={handleLanguage} value={lang}>
          <option disabled>Language</option>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>

      </form>

    )
};

export { SearchForm };