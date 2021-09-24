import React, { useContext } from 'react'
import Elephant from "./Elephant"
import {ElephantContext} from "./App";

/**
 * ElephantList COMPONENT
 * FUNCTIONALITY: LOADS ELEPHANT COMPONENT FOR searchList DATA
 * @param UNDEFINED
 * @returns ARRAY OF <Elephant> COMPONENT
 */
const ElephantList = () => {
    const contextVal = useContext(ElephantContext);     //USING ElephantContext IN App COMPONENT
    const searchList = contextVal[1][0];                //
    return (
        <>
            {
                searchList.length > 0 ?
                    searchList.map((elephant) => {
                        return <Elephant key={elephant._id} properties={elephant} />;
                    }) : <div className="spinner-grow d-block mx-auto mt-5"></div>
            }
        </>
    )
}
export default ElephantList;