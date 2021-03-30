import React, { useContext } from 'react';

//Import GlobalState
import {GlobalContext} from '../Context/GlobalState'


function Balance(){

    const {transcations} = useContext(GlobalContext);


    const transAmount = transcations.map(transcation => transcation.transcationAmount);
    const balance = transAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);


    return(
        <>
            <h4>Current Balance</h4>
            <h1>${balance}</h1>



        </>
    )
}

export default Balance