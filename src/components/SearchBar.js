import React, { useState} from 'react'

const SearchBar = () => {
    const [text, setText] = useState("");
    const filterText = (event) =>{
        setText(event.target.value);
    };
    return (
        <>
            <input value={text} onChange={filterText} className="form-control p-2 on-top w-75 fs-4 mb-3 w-sm-100" placeholder="Enter a name to search (e.g. Balarama)" type="text" />   
        </>
    )
}

export default SearchBar
