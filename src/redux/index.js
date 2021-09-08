import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import booksReducer from './reducers/booksReducer'
import audioBooksReducer from './reducers/audioBooksReducer'


const rootReducer = combineReducers({
    books: booksReducer,
    audioBooks: audioBooksReducer
})

export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)