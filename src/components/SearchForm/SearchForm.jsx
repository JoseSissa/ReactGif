import React, { useState, useRef, useReducer } from 'react';
import './SearchForm.css';

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1
      }
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload
      }
    default:
      return state
  }
}

function SearchForm({ setLocation }) {

    const inputSearchRef = useRef();

    const [state, dispatch] = useReducer(reducer, {
      keyword: '',
      rating: RATINGS[0],
      times: 0
    })
    const {keyword, rating, times} = state



    const handleSubmit = e => {
      e.preventDefault();
      setLocation(`/search/${keyword}/${rating}`);
    };    
    const handleChange = e => dispatch({
      type: ACTIONS.UPDATE_KEYWORD,
      payload: e.target.value
    })
    const handleRating = e => dispatch({
      type: ACTIONS.UPDATE_RATING,
      payload: e.target.value
    })

    return (
      <form onSubmit={handleSubmit} className="form-search">
        <input ref={inputSearchRef} className='form-search__box' type="text" defaultValue={keyword} onChange={handleChange} placeholder="Search a Gif" />
        <button className='form-search__button' type="submit"><img src="/images/search.svg" alt="search" /></button>{times}
        <select onChange={handleRating} value={rating}>
          <option disabled>Rating Type</option>
          {RATINGS.map(elem => <option key={elem}>{elem}</option>)}
        </select>
      </form>
    )
};

export { SearchForm };