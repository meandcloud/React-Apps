import React, {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState'
import Transcation from './Transcation';


function TranscationHistory(){

    const {transcations}  = useContext(GlobalContext)
   // console.log(transcations)

    return(
        <>
            <h3>Transcation History</h3>
            <ul className="list">
                {transcations.map(transcation =>(
                    <Transcation key={transcation.id} transcation={transcation}/>
                ))}                
            </ul>



        </>
    )
}

export default TranscationHistory