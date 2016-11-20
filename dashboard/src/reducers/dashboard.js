import {
  INITIALIZE_CARD,
  FETCHING_CARD_DATA,
  FETCH_CARD_DATA,
  FETCH_CARD_DATA_SUCCESS,
  FETCH_CARD_DATA_FALIURE
} from '../actions';


import cards from '../config';

let initCards = {};
cards.forEach((c)=>{
  initCards[c.cardId] = {
    isFetching: false,
    hasError: false,
    data: []
  }
});

export default (state = initCards, action) => {
  switch (action.type) {
    case FETCHING_CARD_DATA:
        return Object.assign({}, state, {
          [action.cardId] : {
            isFetching: true,
            hasError: false,
            data: []
          }
        });
    case FETCH_CARD_DATA_SUCCESS:
          return Object.assign({}, state, {
            [action.cardId] : {
              isFetching: false,
              hasError: false,
              data: action.data
            }
          });
    case FETCH_CARD_DATA_FALIURE:
          return Object.assign({}, state, {
            [action.cardId]: {
              isFetching: false,
              hasError: true,
              data: []
            }
          });
    default:
          return state;
  }
};
