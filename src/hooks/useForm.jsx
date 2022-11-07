import { useReducer } from 'react';

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating',
    UPDATE_LANGUAGE: 'update_lang'
  }
  
  const REDUCER = (state, action) => {
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
        case ACTIONS.UPDATE_LANGUAGE:
        return {
            ...state,
            lang: action.payload
        }
        default:
        return state
    }
  }
  
  export default function useForm({ initialLang, initialKeyword, initialRating }) {
    const [state, dispatch] = useReducer(REDUCER, {
      lang: initialLang,
      keyword: initialKeyword,
      rating: initialRating,
      times: 0
    })
  
    const {lang, keyword, rating, times} = state
  
    return {
      lang,
      keyword,
      rating,
      times,
      updateKeyword: keyword => dispatch({
              type: ACTIONS.UPDATE_KEYWORD,
              payload: keyword
          }),
      updateRating: rating => dispatch({
              type: ACTIONS.UPDATE_RATING,
              payload: rating
          }),
      updateLanguage: lang => dispatch({
              type: ACTIONS.UPDATE_LANGUAGE,
              payload: lang
          })
    }
  }
