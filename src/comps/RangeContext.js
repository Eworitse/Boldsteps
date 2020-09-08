import React, { createContext, useState } from 'react';


export const NumRangeContext = createContext();

function NumRangeContextProvider(props){

    const [numRange, setNumRange] = useState([1,2]);

    function addNum(){

        if (numRange.length < 5) {
            let newArr = [...numRange];
            newArr.push(newArr.length+1);
            setNumRange(newArr);
        }
    }

    function removeNum() {
        if (numRange.length > 2) {
            let nwArr = [...numRange];
            nwArr.pop();
            setNumRange(nwArr);
        }
    }

    return(
        <NumRangeContext.Provider value={{numRange, addNum, removeNum}}>
            {props.children}
        </NumRangeContext.Provider>
    );
}

export default NumRangeContextProvider;