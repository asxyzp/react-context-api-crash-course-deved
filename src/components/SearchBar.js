import React, {useState, useContext} from 'react';
import { ElephantContext } from './App';

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState(""); //SEARCH VALUE STATE & IT'S CHANGE FUNCTIOn
    const contextVal = useContext(ElephantContext);     //ACCESSING CONTEXT VALUE PASSED FROM THE CONTEXT PROVIDER
    const elephantList = contextVal[0][0];              //ELEPHANT LIST IS CONTAINS INITIAL DATA
    const setSearchList = contextVal[1][1];             //FUNCTION FOR CHANGING STATE OF SEARCH LIST
    
    /**
     * FUNCTION : filterSearchValue(event)
     * FUNCTIONALITY : FILTERING ELEPHANT DATA USING SEARCH VALUE STATE 
     * @param {*} event : EVENT OBJECT
     * @return : UNDEFINED
     */
    const filterSearchValue = (event) =>{
        let searchValue = event.target.value;                 //VALUE WHICH WILL BE SEARCHED
        setSearchValue(searchValue);                            //CHANGING SEARCH VALUE STATE
        if(searchValue.length>0){                               //WHEN SEARCH VALUE LENGTH IS >0
            
            //SEARCHING THROUGH THE elephantList & FILTERING THE LIST ON THE BASIS OF STRING MATCHES
            const filteredList = elephantList.filter( 
                (elephant) => {
                    searchValue = searchValue.toLowerCase();                   //CONVERTING TO LOWERCASE FOR SEARCH 
                    const name = elephant.name.toLowerCase();                  //CONVERTING TO LOWERCASE FOR SEARCH 
                    const species = elephant.species.toLowerCase();            //CONVERTING TO LOWERCASE FOR SEARCH         
                    const affiliation = elephant.affiliation.toLowerCase();    //CONVERTING TO LOWERCASE FOR SEARCH     
                    const note = elephant.note.toLowerCase();                  //CONVERTING TO LOWERCASE FOR SEARCH
                    
                    //FILTERING SERACH VALUE         
                    if(name.includes(searchValue) || species.includes(searchValue) || affiliation.includes(searchValue) || note.includes(searchValue)) return elephant;
                }
            );

            //WHEN FILTERED LIST IS NOT EMPTY THEN SET THE VALUE OF SEARCH LIST OTHERWISE SET IT AS EMPTY
            if(filteredList.length>0)
                setSearchList(filteredList);
            else
                setSearchList([]);
        }
        else{                                                   //WHEN SEARCH VALUE IS EMPTY
            setSearchList(elephantList.map(elephant=>{return elephant}))
        }
    };
    return (
        <><input type="text" value={searchValue} onChange={filterSearchValue} className="w-75 form-control fs-3 position-relative on-top d-block mx-auto" placeholder="Search 🐘"></input></>
    )
}

export default SearchBar;