//action
const SET_BOOKS = 'SET_BOOKS'

const defaultState = {
    items: [], //массив полученный из апи
    isFetching: true,
}

export default function booksReducer(state = defaultState, action){
    switch (action.type) {
       case 'SET_BOOKS':
           return {
               ...state,
               items: action.payload.items
           }
        default:
            return state;
    }
}

//actionCreator
export const setBooks = (books) => ({type: SET_BOOKS, payload: books})