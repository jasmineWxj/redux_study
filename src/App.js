import './App.css';
import { connect} from 'react-redux'
import { ADDONE, SQUARE ,get} from './action/action'

function App(props) {
  const addd = ()=>{
    props.sendActionOne()
  }
  return (
    <div className="App">
      {props.num}
      <button onClick={addd}>''''</button>
    </div>
  );
}
const mapStaetToProps = (state)=>{
  console.log(state);
  return state
}
const mapDispatchToProps = (dispatch)=>{
  return {
    sendAction:()=>{
      dispatch(get())
    },
    sendActionOne:()=>{
      dispatch(ADDONE(1))
    }
  }
}
export default connect(mapStaetToProps,mapDispatchToProps)(App);
