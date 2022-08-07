import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import APP from './App';
import { Provider} from 'react-redux';
// import { legacy_createStore as createStore } from 'redux';
// import { ADDONE, SQUARE } from './action/action'
// import REDUCER from './reducer/reducer'
import store from './store';
// store.dispatch(ADDONE(1))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <APP />
    </Provider>
);


