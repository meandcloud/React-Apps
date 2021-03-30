import React, { createContext, useReducer } from 'react'

//Import AppReducer

import AppReducer from './AppReducer'


//Create Initial State

const initialState = {
    transcations: [
        {
            id: 1,
            description: "Income 1",
            transcationAmount: 1000
        },

        {
            id: 2,
            description: "Expense 1",
            transcationAmount: -100
        },

        {
            id: 3,
            description: "Income 2",
            transcationAmount: 2000
        },

        {
            id: 4,
            description: "Expense 2",
            transcationAmount: -500
        }
    ]
}

//Create the Global Context

export const GlobalContext = createContext(initialState);


//Create a Provider for the Global Context

export const GlobalProvider = ({ children }) =>{

    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Action for Transcations

    //Delete Existing Transcation

    function delTranscation(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }


    //Add New Transcation

    function addTransaction(transcation){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transcation
        })
    }


    return(
        <GlobalContext.Provider value={
            {
                transcations: state.transcations,
                transcations: state.transcations,
                delTranscation,
                addTransaction
            }
        }>

            {children}
        </GlobalContext.Provider>
    )
}