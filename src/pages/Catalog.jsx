import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { getBooks } from '../redux/actions/books'
import Bookp from "./Bookp";


function Catalog() {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books.items)

    useEffect(() => {
        dispatch(getBooks())
    }, [])

    return (
        <div>
            {books.map(book => 
                <Bookp book={book}/>
            )}
        </div>
    )
}

export default Catalog
