import { Source } from "../data/Source";
import React, { useState, createContext } from 'react';
import ElephantList from './ElephantList';
import SearchBar from './SearchBar';

export const ElephantContext = createContext();
export const App = () => {

    const [elephantList, setElephantList] = useState(Source);                                      //Setting the state containing the list of elephants
    const [searchList, setSearchList] = useState(elephantList.map(elephant=> {return elephant;})); //Setting the state containing the list of searched elements
    const contextVal = [[elephantList, setElephantList],[searchList, setSearchList]];              //Context value passed to the element
    return (
        <ElephantContext.Provider value={contextVal}>
            <SearchBar />
            <div className="w-100 d-flex flex-wrap justify-content-center align-items-stretch">
                <ElephantList />
            </div>
        </ElephantContext.Provider>

    );
}