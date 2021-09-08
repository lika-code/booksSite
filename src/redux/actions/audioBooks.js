import axios from 'axios'
import { setAudioBooks } from '../reducers/audioBooksReducer'

/*поскольку мы используем redux-thunk нам нужно вернуть 
еще одну ф-цию которая в качестве параметра принимает dispatch*/
export const getAudioBooks = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3000/dbAudioBooks.json')
        dispatch(setAudioBooks(response.data));
    }
}