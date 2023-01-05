import React from 'react';
import { connect } from 'react-redux'

function Comb(props) {
    const add = () =>{
        props.sendAction()
    }
    return <div>
        <button onClick={add}>+</button>
    </div>
}

/**
 * 这个函数有一个返回值， 返回值是一个兑现
 */
const mapDispatchToProps = (dispatch) =>{
    return {
        sendAction:()=>{
            // 利用 dispatch 发一个 action
            // 传递 action 对象，我们要定一个一个 type
            dispatch({
                type: 'send_add'
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(Comb)