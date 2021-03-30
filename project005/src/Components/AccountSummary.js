import React, {useContext} from 'react';

//Import Global State

import {GlobalContext} from '../Context/GlobalState';

function AccountSummary(){

    const {transcations} = useContext(GlobalContext);
    const transAmount = transcations.map(transcation => transcation.transcationAmount);

    const income = transAmount.filter(transcation => transcation > 0)
    .reduce((acc, transaction) => (acc += transaction), 0)
    .toFixed(2);


    const expense = Math.abs(transAmount
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        ).toFixed(2);


    return(
        <>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">${income}</p>
                </div>

                <div>
                    <h4>Expense</h4>
                    <p className="money minus">${expense}</p>
                </div>
            </div>



        </>
    )
}

export default AccountSummary