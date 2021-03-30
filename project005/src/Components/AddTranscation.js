import React, { useContext, useState } from 'react'

//Import GlobalState

import { GlobalContext } from '../Context/GlobalState';

function AddTranscation(){

    const [description, setDiscription] = useState();

    const [transcationAmount, setTranscationAmount] = useState();

    const { addTransaction } = useContext(GlobalContext);


    const onSubmit = (e) =>{
        e.preventDefault();

        const newTranscation = {
            id: new Date().getTime(),
            description,
            transcationAmount: + transcationAmount
        }

        addTransaction(newTranscation);
        
    }

   

    return(
        <>
            <h3>Add Transcation</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor='description'>Description</label>
                    <input 
                    type="text"
                    id="description"
                    placeholder="Details of transcation"
                    value={description}
                    onChange={(e) => setDiscription(e.target.value) }
                    />
                </div>

                <div className="form-control">
                    <label htmlFor='transcationamount'>Description</label>
                    <input 
                    type="number"
                    id="transcationamount"
                    placeholder="Enter transcation amount"
                    value={transcationAmount}
                    onChange={(e) => setTranscationAmount(e.target.value) }
                    required="required"
                    />
                </div>

                <button className="btn">Add Transcation</button>
            </form>




        </>
    )
}

export default AddTranscation