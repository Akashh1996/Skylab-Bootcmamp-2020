// https://codepen.io/liammclennan/pen/VxpZzV?editors=0011

let container = Redux.createStore((model = { running: false, time: 0 }, action) => {
  const updates = {
    'START': (model) => Object.assign(model, {running: true}),
    'STOP': (model) => Object.assign(model, {running: false}),
    'TICK': (model) => Object.assign(model, {time: model.time + (model.running ? 1 : 0)})
  };
  return (updates[action.type] || (() => model))(model);
});

let view = (m) => {
  let minutes = Math.floor(m.time / 60);
  let seconds = m.time - (minutes * 60);
  let secondsFormatted =  `${seconds < 10 ? '0' : ''}${seconds}`;
  let handler = (event) => {
    container.dispatch(m.running ? {type:'STOP'} : {type:'START'});
  };
  
  return <div>
    <p>{minutes}:{secondsFormatted}</p>
    <button onClick={handler}>{m.running ? 'Stop' : 'Start'}</button>
  </div>;
};

const render = () => {
  ReactDOM.render(view(container.getState()),
    document.getElementById('root')
  );
};
container.subscribe(render);

setInterval(() => {
  container.dispatch({type:'TICK'});
}, 1000);