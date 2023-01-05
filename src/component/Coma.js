import React from 'react';
import { connect } from 'react-redux'
function Coma(props){
    console.log(props,'??');
    return <div>
        {props.count}
    </div>
}

const mapStateToProps = (state) =>{
    console.log('a', state);
    return state
}

export default connect(mapStateToProps,null)(Coma)