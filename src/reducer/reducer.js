
var aa = {
  num:12,
  age:'asdad'
}

const reducer = (state = aa,action) =>{
  console.log(state,'state');
    switch (action.type){
        case 'ADD':
          return {
            num: state.num + action.store,
          }
        case 'SQUARE':
          return {
            num:state.num ** 2
          }
        case 'GET':
          return{
            num:action.num + 2
          }
        default:
          return state
      }
}

export default reducer