//action
const SET_AUDIO_BOOKS = 'SET_AUDIO_BOOKS'

const defaultState = {
    items: [], //массив полученный из апи
    isFetching: true,
}

export default function booksReducer(state = defaultState, action){
    switch (action.type) {
       case 'SET_AUDIO_BOOKS':
           return {
               ...state,
               items: action.payload.items
           }
        default:
            return state;
    }
}

//actionCreator
export const setAudioBooks = (audioBooks) => ({type: SET_AUDIO_BOOKS, payload: audioBooks})