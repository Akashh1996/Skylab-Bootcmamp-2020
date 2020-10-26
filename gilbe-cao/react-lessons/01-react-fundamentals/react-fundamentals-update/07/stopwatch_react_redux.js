// https://codepen.io/liammclennan/pen/QrpLod?editors=0011

let container = Redux.createStore((model = { running: false, time: 0 }, action) => {
  const updates = {
    'START': (model) => Object.assign({}, model, {running: true}),
    'STOP': (model) => Object.assign({}, model, {running: false}),
    'TICK': (model) => Object.assign({}, model, {time: model.time + (model.running ? 1 : 0)})
  };
  return (updates[action.type] || (() => model))(model);
});

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch, props) => ({
  onStart: () => { dispatch({type: 'START'}); },
  onStop: () => { dispatch({type: 'STOP'}); }
});

const Stopwatch = ReactRedux.connect(mapStateToProps, mapDispatchToProps)((props) => {
  let minutes = Math.floor(props.time / 60);
  let seconds = props.time - (minutes * 60);
  let secondsFormatted =  `${seconds < 10 ? '0' : ''}${seconds}`;
  
  return <div>
    <p>{minutes}:{secondsFormatted}</p>
    <button onClick={props.running ? props.onStop : props.onStart}>
      {props.running ? 'Stop' : 'Start'}
    </button>
  </div>;
});;

ReactDOM.render(
  <ReactRedux.Provider store={container}>
    <Stopwatch />
  </ReactRedux.Provider>,
  document.getElementById('root')
);

setInterval(() => {
  container.dispatch({type:'TICK'});
}, 1000);