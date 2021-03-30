import React, { useContext } from 'react';

//Import Global State

import {GlobalContext} from '../Context/GlobalState';




function Transcation({transcation}){

    const {delTranscation} = useContext(GlobalContext);

    const sign = transcation.transcationAmount > 0 ? '+' : '-';

    const transcationType = transcation.transcationAmount > 0 ? 'plus' : 'minus';




    return(
        <>
            <li className="plus">
                {transcation.description}
            <span>
                
               {sign}${Math.abs(transcation.transcationAmount)}
                
            </span>

            <button 
            className="delete-btn" 
            onClick={() => delTranscation(transcation.id)}>
                X
            </button>
        </li>


        </>
    )
}

export default Transcation