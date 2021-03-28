const NumberReducer = (state, action) =>{

    switch(action.type){
        case 'INC':
            return state + action.val;

        case 'DEC':
            return state - action.val;
    }
}

export default NumberReducer