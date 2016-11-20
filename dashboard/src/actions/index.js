import Promise from 'bluebird';

export const INITIALIZE_CARD = 'INITIALIZE_CARD';
export const FETCHING_CARD_DATA = 'FETCHING_CARD_DATA';
export const FETCH_CARD_DATA = 'FETCH_CARD_DATA';
export const FETCH_CARD_DATA_SUCCESS = 'FETCH_CARD_DATA_SUCCESS';
export const FETCH_CARD_DATA_FALIURE = 'FETCH_CARD_DATA_FALIURE';

let shouldFail = false;

export function initializeCard (cardId) {
  return {
      type: INITIALIZE_CARD,
      cardId
  };
}

export function fetchingCardData(cardId) {
  return {
    type: FETCHING_CARD_DATA,
    cardId
  }
}

export function fetchDataSuccess(cardId, data) {
  return {
    type: FETCH_CARD_DATA_SUCCESS,
    cardId,
    data
  }
}

export function fetchDataFailure(cardId) {
  return {
    type: FETCH_CARD_DATA_FALIURE,
    cardId
  }
}

export function fetchCardData(cardId){
  return (dispatch) => {
    dispatch(fetchingCardData(cardId));
    return new Promise(function(resolve, reject){
      setTimeout(()=>{
        if(shouldFail) {
          reject()
        } else {
          resolve([1,2,3,4]);
        }
        shouldFail = !shouldFail;
      }, 1000)
    })
    .then((val)=>{
      dispatch( fetchDataSuccess(cardId, val));
    })
    .catch(()=>{
        dispatch( fetchDataFailure(cardId));
    });
  }
}



// For hero
export const SET_HERO_SELECTION = 'SET_HERO_SELECTION';
export function setHeroSelection(selection) {
  return {
    type: SET_HERO_SELECTION,
    selection
  }
}

//get all the cardids and dispatch fetchCardData for them
//middleware that intercepts this
//componentWillReceiveProps
//subscribe in componentDidMount


// {
//   ent: {cards: []},
//   customer: {hero: {}, cards: []},
//   brand: {hero: {}, cards: []}
// }

//Some have interaction others do not, some which have determine themselves how to deal with change

