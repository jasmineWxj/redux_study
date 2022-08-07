const ADDONE = (store)=>{
    return {
        type:"ADD",
        store
    }
}
const SQUARE = ()=>{
    return {
        type:"SQUARE",
    }
}

const get = ()=>{
    return (dispatch,getState)=>{
        setTimeout(() => {
           dispatch({
               type:'GET',
               num:1099
           })
        }, 1000);
    }
}

export {
    ADDONE,
    SQUARE,
    get
}