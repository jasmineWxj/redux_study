
const initState = {
    count:1
}

exports.reducer = (state = initState,action) =>{
    console.log(state, action);
    switch (action.type) {
        case 'send_add':
            return {
                count: state.count+1
            }
            break;
        default:
            break;
    }
    return state
}