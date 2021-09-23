import React, {useContext} from 'react'
import {ElephantContext} from './ElephantList'; 

const CountBar = () => {
    const [elephantList] = useContext(ElephantContext);
    return (
        <div className="p-2 on-top text-center w-75 fs-4 mb-2 w-sm-100"><b>COUNT: </b>{elephantList.length}</div>   
    )
}

export default CountBar
