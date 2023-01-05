import React from 'react';
import ReactDOM from 'react-dom/client';
import APP from './App';
import { Provider } from 'react-redux'
import store from './store';
import Coma from './component/Coma';
import Comb from './component/Comb';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Coma />
        <Comb />
    </Provider>
);


