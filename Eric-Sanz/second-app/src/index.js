import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './Hello';
// import Sum from './Sum';
// import ClickCounter from './ClickCounter';
import reportWebVitals from './reportWebVitals';
// import myProps from './data';
import ConditionalDisplay from './ConditionalDisplay';
import ConditionalDisplay2, { x, w} from './ConditionalDisplay2';

const obj = { value: x, otroValue: w};

ReactDOM.render(
  <React.StrictMode> 
      <ConditionalDisplay isVisible={true} obj={obj}>
        <div>La suma es 0</div>
        <div>La suma es mayor que 0</div>
      </ConditionalDisplay>
      <ConditionalDisplay2 isVisible={true}>
        <h2>Ahora me ves!</h2>
      </ConditionalDisplay2>
  </React.StrictMode>,
  document.getElementById('root')
);



// const props = {
//   a:10,
//   b:10,
//   showAlert: function() {
//     alert(`El resultado es ${this.a + this.b}`);
//   }
// }

// const sum = React.createElement(Sum, {...props}, null);

// ReactDOM.render(
//   <React.StrictMode>
//     {sum}
//     <ClickCounter />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// al tener el isVisible, pintara el div.


// ReactDOM.render(
//   <React.StrictMode>
//     <Hello dateNow = {Date()}/>
//     <App />
//     <Sum a={10} b= {10}/>
//     <Sum {...props}/>
//     <ClickCounter />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
