import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';
import './main.sass';
import MyComponent from './MyComponent.jsx'

ReactDOM.render(
    <div>
        <Hello name='Bart'/>
        <MyComponent />
    </div>
, document.getElementById('app'));

