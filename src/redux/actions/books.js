import axios from 'axios'
import {setBooks} from '../reducers/booksReducer'

/*поскольку мы используем redux-thunk нам нужно вернуть 
еще одну ф-цию которая в качестве параметра принимает dispatch*/
export const getBooks = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3000/dbBetterBooks.json')
        dispatch(setBooks(response.data));
    }
}